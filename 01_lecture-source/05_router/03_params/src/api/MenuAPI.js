import menus from '../data/menu-detail.json'

/* json 파일로부터 전체 메뉴 리스트 반환해보기 */
export function getMenuList(){
    /* json 올 파싱된 데이터를 반환한다. */
    return menus;
}

export function getMenuDetail(menuCode){
    console.log('api에서 ',menuCode)

    /* 
        pathVariable 로 넘어오는 값은 문자열 이다 
        파싱된 데이터에서 꺼낸 객체의 menuCode 는 숫자이므로 넘겨 받은 값을 
        parseInt 파싱 처리를 해줘야한다
    */
    console.log(typeof menuCode)

    /*
        menus 백열에서 filter 를 사용해서 콜백함수가 true 를 반환하는 요소만 다시금 배역만들어줘 return 해준다.
    */

    return menus.filter(menu=>menu.menuCode === parseInt(menuCode))[0]

}

export function getMenuByName(menuName){

    /* filter, map , match */
    /*
        match : 포함 여부에 따라서 인수값이 포함되어 있으면 객체를 반환해준다.

    */

    // match => 
    // return menus.filter(menu=>menu.menuName.includes(menuName))
    return menus.filter(menu=> menu.menuName.match(menuName))
}

/*
    Named export 와 Default export

    Named export 는 default 를 없이 작성한 export 를 말한다.
    이 경우 export function getMenuList() 이다.

    반대로 default export 의 경우 export default getMenuList() 이다

    그렇다면 왜 두가지로 나누어 지는가

    named export 의 장점은 하나의 모듈안에 여러개의 함수가 담겨 있을 때 import 시 코드의 작성량이 줄어든다.

    예를 들어 하나으 모둘안에 function1, function2, function3 이 있다고 생각 해보자

    default export 의 경우 import 시에 

    import function1 form './'
    import function2 form './'
    import function3 form './'

    이런식으로 사용하는 모든 함수를 위한 import 문을 작성해야한다

    반대로 named export 의 경우

    import {function1, function2 , function3} from './' 이런식으로 한줄로 작성이 가능하다 


    default export 의 경우 import 시에 이름을 적절히 변형이 가능하다는 장점이 있다


    export default function01() 

    import changeFunction from './'


*/