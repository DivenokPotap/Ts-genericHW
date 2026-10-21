	function getPromise(): Promise<(string | number)[]> {
	 return new Promise((resolve) => {
	   resolve(['Text', 50]);
	 });
	}

	getPromise ()
	.then((data) => {
	 console.log(data);
	});


    type AllType = {
	 name: string;
	 position: number;
	 color: string;
        weight: number
    }
    
    function compare (top:Pick<AllType, "name" | "color" >, bottom:Pick<AllType, "position" | "weight">): AllType {
	 return {
	   name: top.name,
	   color: top.color,
	   position: bottom.position,
	   weight: bottom.weight,
	 }
    }
    
    const result = compare(
  { name: "Alex", color: "blue" },
  { position: 1, weight: 70 }
    );

    type objA = { 
        name: string
        check: boolean
    }
     type objB = { 
        age: number
        array: string[]
    }

    	function merge <T extends object, U extends object>(objA:T, objB:U) {
	 return Object.assign(objA, objB);
        }
interface Iprops { 
        title: string
}
    
const props: Iprops = {
    title: "Титулка"
}

    class Component<T> {
	 constructor (public props:T) {
	 }
	}

	class Page<T extends Iprops> extends Component<T> {
	 pageInfo () {
	   console.log(this.props.title);
	 }
	}


const objC = merge({ name: "Alan", check: true }, { age: 18, array: ["helloworld", "1", "test"] })
console.log(result);
console.log(objC);
const page = new Page(props);
page.pageInfo();