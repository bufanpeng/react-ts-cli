import * as React from 'react'
import * as styles from './index.less'

interface MyProps {
    hasDefaultStyle: boolean,
    style: object,
    text: string,
    submit(e: React.MouseEvent<HTMLElement>): void
}
class Button extends React.Component<MyProps> {
    public static defaultProps = {
        hasDefaultStyle: true,
        style: {},
        text: '',
        submit: () => null
    };
    public render() {
        return (
            <div className={this.props.hasDefaultStyle ? styles.buttonBox : styles.defaultButtonBox}>
                <div
                    className={styles.button}
                    style={this.props.style}
                    onClick={this.props.submit && this.props.submit.bind(this)}>{this.props.text}</div>
            </div>
        )
    }
}
export default Button