import { EMPTY_OBJ, EMPTY_ARR } from './constants';
import { commitRoot, diff } from './diff/index';
import { createElement, Fragment } from './create-element';
import options from './options';

const IS_HYDRATE = EMPTY_OBJ;


/**
 * Render a Preact virtual node into a DOM element
 * 将Preact虚拟节点呈现到DOM元素中
 * @param {import('./index').ComponentChild} vnode The virtual node to render 要渲染的虚拟节点
 * @param {import('./internal').PreactElement} parentDom The DOM element to
 * render into  要呈现到的DOM元素
 * @param {Element | Text} [replaceNode] Optional: Attempt to re-use an
 * existing DOM tree rooted at `replaceNode`  可选:尝试重用植根于' replaceNode '的现有DOM树
 */
export function render(vnode, parentDom, replaceNode) {
	if (options._root) options._root(vnode, parentDom);

	// We abuse the `replaceNode` parameter in `hydrate()` to signal if we
	// are in hydration mode or not by passing `IS_HYDRATE` instead of a
	// DOM element.
	let isHydrating = replaceNode === IS_HYDRATE;

	// To be able to support calling `render()` multiple times on the same
	// DOM node, we need to obtain a reference to the previous tree. We do
	// this by assigning a new `_children` property to DOM nodes which points
	// to the last rendered tree. By default this property is not present, which
	// means that we are mounting a new tree for the first time.
	//能够支持在同一个页面上多次调用render()
	// DOM节点时，需要获得对前一个树的引用。我们所做的
	//这是通过给指向的DOM节点分配一个新的' _children '属性来实现的
	//到最后渲染的树。默认情况下，此属性不存在
	//意思是我们第一次安装一棵新树。
	let oldVNode = isHydrating
		? null
		: (replaceNode && replaceNode._children) || parentDom._children;
	vnode = createElement(Fragment, null, [vnode]);

	// List of effects that need to be called after diffing.
	// 在扩散后需要被调用的效果列表。
	let commitQueue = [];
	diff(
		parentDom,
		// Determine the new vnode tree and store it on the DOM element on
		// our custom `_children` property.
		//确定新的vnode树并将其存储在DOM元素上
		//我们的自定义' _children '属性。
		((isHydrating ? parentDom : replaceNode || parentDom)._children = vnode),
		oldVNode || EMPTY_OBJ,
		EMPTY_OBJ,
		parentDom.ownerSVGElement !== undefined,
		replaceNode && !isHydrating
			? [replaceNode]
			: oldVNode
			? null
			: parentDom.childNodes.length
			? EMPTY_ARR.slice.call(parentDom.childNodes)
			: null,
		commitQueue,
		replaceNode || EMPTY_OBJ,
		isHydrating
	);

	// Flush all queued effects
	commitRoot(commitQueue, vnode);
}

/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {import('./index').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to
 * update
 */
export function hydrate(vnode, parentDom) {
	render(vnode, parentDom, IS_HYDRATE);
}
