import type {App} from 'vue';
import {Icon} from './Icon';
import {Button} from './Button';
import {
    // Need
    Button as AntButton,
    Input,
    Layout
} from 'ant-design-vue';

const compList = [AntButton.Group, Icon];

export function registerGlobComp(app: App) {
    compList.forEach((comp) => {
        app.component(comp.name || comp.displayName, comp);
    });

    // @ts-ignore
    app.use(Input).use(Button).use(Layout);
}
