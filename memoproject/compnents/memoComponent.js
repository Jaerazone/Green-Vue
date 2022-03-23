



// <!-- 사용할 컴포넌트  -->
Vue.component ('memo-component', {
    props: ['id'],
    template : // 기본<slot>을 unnamed slot이라고한다.
    `<div>
        <h3>
            메모
            <button @click="deletememo">X</button>
        </h3>
        <p>{{time}}</p>
        <slot></slot>    <!-- slot의 위치가 {{m}} -->
    </div>`,
    data : function () {
        return { 
            time : new Date() 
        };
    },
    methods : {
        deletememo : function (){
            this.$emit("delete", this.id)
        } // delete라는 이벤트를 만든다. 
        // 어느걸? 부모한테 받아야와야하는데 
        // props로 id만들어준뒤 그id를(this.id) 들고온다
    }
})