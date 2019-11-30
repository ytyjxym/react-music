export default function timeTrans(time){
    let sec = time % 60 < 10 ? '0' + parseInt(time % 60) : parseInt(time % 60);
    let min = parseInt(time / 60) < 10 ? '0' + parseInt(time / 60) : parseInt(time / 60);
    return `${min}:${sec}`
}
