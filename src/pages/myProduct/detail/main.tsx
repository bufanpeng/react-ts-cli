import * as React from 'react'
import * as styles from './main.less'
import TextEllipsis from "@/components/myProduct/textEllipsis";

interface MyProps {
    history: any,
};
interface MyState {
    title: string,
    listData: any[],
}
// 详情页
class Detail extends React.Component<MyProps, MyState> {
    public state: MyState = {
        title: '',
        listData: [
            [
                { name: '我不是王毛' },
                { name: '我就是少林寺挑水的' },
                { name: '我没有武功，菜的抠脚啊' },
                { name: '不要嘲笑样式，随手写的，后面会好好写，哈哈' }
            ]
        ],
    }

    public render() {
        const borderB = { borderBottom: '1px solid rgba(227,231,233,0.7)' }
        const trainCourseList = (val: any[]) =>
            val.map((item: any, index: number) =>
                <div key={index} style={index !== val.length - 1 ? borderB : {}} className={styles.test}>
                    <div>{item.name}</div>
                </div>
            )

        const content = !!this.state.listData.length && this.state.listData.map((item: any, index: number) =>
            <div className={styles.content} key={index}>
                {trainCourseList(item)}
            </div>
        )
        return (
            <div className={styles.detailBox}>
                {content}
                <TextEllipsis text="开始你的业务开发吧" />
            </div>
        )
    }
}
export default Detail