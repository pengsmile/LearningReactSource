import { h} from '../../preact';
import {wrapContext} from './themeContext';



const ThemeTogglerButton = props => {
    return (
        <wrapContext.Consumer>{value=><span>{value}</span>}</wrapContext.Consumer>
    );
}

export default ThemeTogglerButton;