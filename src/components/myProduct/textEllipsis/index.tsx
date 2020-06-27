import React from 'react'
// import PropTypes from 'prop-types'
import * as styles from './index.less'
const TextEllipsis = ({ text = '', ellipsisType = '1', style = {} }) => {
    return (<div className={ellipsisType === '1' ? `${styles.ellipsis} ${styles.content}` : `${styles.ellipsisTwo} ${styles.content}`} style={style}>{text}</div>)
}
export default TextEllipsis
// export default class TextEllipsis extends Component {
//     static propTypes = {
//         ellipsisType: PropTypes.string,
//         text: PropTypes.string
//     }
//     static defaultProps = {
//         ellipsisType: 'ellipsis'
//     }
//     render() {
//         const {text, ellipsisType} = this.props
//         return(<div className={ellipsisType === 'ellipsis content' ? ellipsis : 'ellipsisTwo content'}>{text}</div>)
//     }
// } 