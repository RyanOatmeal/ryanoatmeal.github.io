export const world = (props) => {
    if (props?.input === "bob") {
        return { state: { counter: 1 }, output: "Steven" };
    }
    else if (props?.input === "Jerry") {
        return { state: { counter: 0 }, output: "Enter bob and see Steven, Jerry to return, else be doomed with ipsum." };
    }
    return { state: { counter: 10 }, output: lorem };
};
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lectus in lectus tempor malesuada ac nec augue. Mauris in orci justo. Suspendisse sit amet tempor augue. Duis ultricies placerat tellus, a imperdiet diam pretium vel. Aenean nunc diam, accumsan quis rutrum ac, laoreet vitae ipsum. Vestibulum quis interdum massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet, sem ac aliquam posuere, nisl lorem rhoncus justo, vel rutrum sem lorem mattis ipsum. Mauris lobortis quam tellus, ac eleifend libero fringilla sit amet. Nulla efficitur vestibulum risus facilisis lobortis. Sed aliquam eleifend est in dignissim.

Praesent non orci mauris. Pellentesque semper id mauris tempus sollicitudin. Nulla malesuada at enim ut vestibulum. Phasellus ac sagittis ex. Curabitur ultricies molestie congue. Donec imperdiet erat diam, at commodo sem placerat ut. Curabitur sapien mi, sagittis eu lorem et, faucibus hendrerit sapien. Maecenas eleifend rutrum volutpat. Aliquam elit nisl, finibus vel est ut, varius aliquet neque. Integer cursus luctus arcu sed hendrerit. Duis consequat ante sed convallis maximus. Maecenas mauris eros, facilisis ut porta a, condimentum eu metus. Donec sed venenatis nisi. Donec feugiat est id sapien commodo rutrum.

Sed suscipit porta dui, vitae laoreet mauris sagittis quis. Aliquam pellentesque erat libero, vel tempor diam tincidunt at. In varius risus et purus viverra, at molestie odio fringilla. Pellentesque at leo ultricies, laoreet augue sed, interdum nisl. Donec hendrerit justo mi, vel eleifend tellus varius vitae. Donec molestie felis non ex fermentum rhoncus. Vivamus rutrum lacus ac pellentesque viverra. Vestibulum id velit nisl. Maecenas rhoncus massa semper lectus posuere egestas. Vivamus sodales bibendum ligula, ac finibus turpis dignissim et.

Ut vel ipsum et tellus elementum hendrerit. Proin auctor quis nibh tempor dictum. Aenean neque lorem, dictum eu enim quis, pulvinar euismod diam. Nunc vel scelerisque mauris. Praesent in augue viverra, suscipit nunc eget, dignissim libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id mauris et erat aliquam porta a vitae metus. Integer tincidunt est vel eleifend consectetur. Praesent vel nulla nec lacus luctus fermentum quis sit amet turpis. Donec turpis augue, ullamcorper non nibh nec, tincidunt vehicula nisl. Curabitur non felis nec quam dapibus ultricies non in diam.

Mauris id mollis nisl, nec condimentum mi. Suspendisse mattis suscipit congue. Cras vitae faucibus ligula, eu cursus erat. Nullam sit amet consequat urna, sit amet venenatis urna. Quisque rhoncus, felis et volutpat consectetur, nulla massa posuere orci, id egestas leo lacus vel augue. Nulla facilisi. Suspendisse commodo quam a malesuada scelerisque. Nulla tortor nibh, molestie et tortor sed, hendrerit consequat lectus. Nam elit odio, condimentum non velit sed, ornare pulvinar sapien.`;
//# sourceMappingURL=index.js.map