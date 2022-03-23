// <!-- 뷰 인스턴스 -->
new Vue({
    el : "#app",
    data : {
        id: 0, // 메모의 개인값을 알기위해 0으로 설정하고, 아래 id++해줌.
        memo : '',
        memolist: []
    },
    methods : {
        addMemo : function() {
            this.memolist.push({id:this.id, memo:this.memo});
            //2개의 값을 넣어주기위해 {,}를 사용함
            // memolist : []라, 객체 형태라서 {} 사용
            this.id++;
            this.memo="";
        },
        deleteMemo : function (id) {
            //memolist 의 아이디를 지움
            //forEach구문 : 배열의 요소값을 하나씩 함수에 넣어서 실행
            let index = 0;
            this.memolist.forEach( (element, i) => {
                // (value값=element, index값=i)
                // 요소의 id와 가져온id가 동일하다면 index값 할당
                if(element.id == id ) {
                    index = i;
                }
            });
            // 가져온 인덱스 값을 이용해서 삭제
            this.memolist.splice(index,1);
        }
    }    
})