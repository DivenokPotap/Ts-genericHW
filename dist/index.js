function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
const result = compare({ name: "Alex", color: "blue" }, { position: 1, weight: 70 });
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const props = {
    title: "Титулка"
};
class Component {
    props;
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const objC = merge({ name: "Alan", check: true }, { age: 18, array: ["helloworld", "1", "test"] });
console.log(result);
console.log(objC);
const page = new Page(props);
page.pageInfo();
export {};
//# sourceMappingURL=index.js.map