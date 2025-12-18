type eventtype = "click" | "scroll" | 'mousemove';
type Excludevent = Exclude<eventtype ,'scroll'>

const handlevent = (event : Excludevent) =>
{
    console.log(`the event ${event} has been called`);
};
handlevent('click');