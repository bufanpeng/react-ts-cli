import * as React from "react";
import { connect } from "dva";
import Button from "@/components/myProduct/button";
import TextEllipsis from "@/components/myProduct/textEllipsis";
import * as styles from "./main.less";

interface MyProps {
    dispatch: any,
    history: any
}
interface MyState {
    homeList: object,
    latestData: any[],
}
class MainBody extends React.Component<MyProps, MyState> {
    public state: MyState = {
        homeList: {},
        latestData: [],
    }
    // 首页数据
    public getHomeData = () => {
        this.props.dispatch({
            type: "myProduct/getHomeData",
            payload: {
                mayParams: 1
            },
        }).then((res: any) => {
            this.setState({
                latestData: res.recmd
            })
        })
    };

    // 详情页
    public toDetail = (val: any) => {
        this.props.history.push({
            pathname: "/detail"
        });
    };


    public componentDidMount() {
        this.getHomeData();
    }
    // 此种写法也可以
    // public static getDerivedStateFromProps(nextProps: any) {
    //     if (!!nextProps.homeList.recmd) {
    //         return {
    //             homeList: nextProps.homeList,
    //         }
    //     }
    //     return null
    // }
    public render() {
        const content =
            this.state.latestData.length > 0
                ? this.state.latestData.map((item, index) => {
                    return (
                        <div
                            className={`${styles.contentItem} ${styles.marb30} ${styles.posr}  ${styles.paddingR2}`}
                            key={index}
                        >
                            <div>{item.name}</div>
                        </div>
                    );
                })
                : "";
        return (
            <div>
                {
                    this.state.latestData.length !== 0 &&
                    <div className={styles.contentBox}>
                        {content}
                        <TextEllipsis text="开始你的业务开发吧" />
                        <Button text="测试跳转" submit={this.toDetail}/>
                    </div>
                }
            </div>
        );
    }
}
function mapStateToProps(state: any) {
    return {
        homeList: state.myProduct.homeList,
    };
}

const Home = connect(mapStateToProps)(MainBody);

export default Home;
