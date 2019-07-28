import { setEvent, setPongs, setResult } from "./mock.state";

let nPongs = 0;

export const resetPongs = () => {
    nPongs = 0;
    setPongs(0);
};

export const pongHandler = (evt, ctx, cb) => {
    nPongs += 1;
    setPongs(nPongs);
    setEvent(evt);
    cb("{}");
};

export const envHandler = (evt, ctx, cb) => {
    setResult(process.env["MY_VAR"]);
    cb("{}");
};

export const pseudoHandler = (evt, ctx, cb) => {
    setResult(evt.TopicArn);
    cb("{}");
};

export const asyncHandler = async (evt, ctx) => {
    await new Promise(res => setTimeout(res, 100));
    setResult(evt.TopicArn);
    return "{}";
};
