import React, { Component } from 'react';
import styles from './styles.css';

class Alert extends Component {

    constructor(props){
        super(props);
        this.state={
            closing:false
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.visible && !nextProps.visible){
            this.setState({
                closing: true
            });

            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    });
                },500
            );
        }
    }

    render() {
        const { visible, message } = this.props;
        const { closing } = this.state;
        if(!visible && !closing) return null;
        return (
            <div className={styles.dialogBox}>
                <div className={`${styles.dialog} ${!closing?'fadeInDown':'fadeOutUp'} animated`}>
                    <span>{message}</span>
                </div>
            </div>
        );
    }
}


export default Alert;