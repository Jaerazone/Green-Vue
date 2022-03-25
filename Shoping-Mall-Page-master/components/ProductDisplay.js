// 9) js파일 만든후에

Vue.component('prodect-display',{
    //12) 템플릿이 이제 길어지기때문에 데이터나 메소드는 여기에써본다
    data : function (){
        return {
            // 16) 템플릿을 보고 이제 내용을 채워본다
             //image : '',  // 13) image를 임의로 적고, 18) computed로 보냄.
            stock : 10, //20) 재고의 초기값은 10으로 설정해둠 첫실행창
            brand : 'LG',
            product : '마스크',
            pay : 15000,
            details : ['폴리프로필렌 부직포', '플라스틱 (코편)', '나일론끈'],
            //18) image를 배열로 저장해본다 variants는 변하는값임
            variants : [ // 20) stock을 10과 0으로 일단 설정함 ㅋ
                { color : 'white', image : "./images/mask_white.jpg" , stock: 10},
                { color : 'black', image : "./images/mask_black.jpg"  , stock: 0}
            ], // 22) stock : 0 << 0은 불린값으로 false라서 v-else가 실행된다.
            // 24) 동그라미 버튼을 선택한 인덱스의 값을 가져오고싶다.
            //     selection 0으로 초기화 해두고
            selection : 0,
        }
    },
    methods : {  // 26) 마우스 올린것의 index값을 this.selection값으로 넣어준다
        updateVariant : function (index) {
            this.selection = index;
        }
    },
    computed : {
        //17) title이 Green 브랜드, 마스크 상품으로 나뉘어서 값을 바꿔보도록하자
        title : function (){
            return this.brand+ " "+this.product;
        },
        image : function () {
            // 19) image값을 ''초기화하면 처음실행창이 빈값이 되기때문에 
            // computed 를 이용해서 variants의 image값을 들고온다
            // 배열의 이미지값을 들고오기 위함..
            return this.variants[this.selection].image //24)[] 안의 값을 selection으로 지정해줌
        },
        isStock : function () { // 20) 배열의 재고값을 들고오기 위함
            //21) 이 재고값은 <p>태그에 붙일거임 v-if
            return this.variants[this.selection].stock //24)[] 안의 값을 selection으로 지정해줌
        }
    },
    
    // 11)* html에서 썼던 내용을 복붙해 들고온다    
    // 13) 이미지추가( "image") << data값을 쓰기위해서는 v-bind를 붙인다
    // 14) {{title}} 넣고, {{pay}} 넣고
    // 15) 상품세부설명은 v-for로 넣는다 디테일의 배열을 들고오기로함(배열아직 생성안했는데 그냥미리적음ㅋ)
    
    template : 
    `
    <!-- 1) 화면 구성을 먼저 해본다-->
    <div class="product-display">
        <div class="product-container">
            <!-- 2) 이미지를 추가한다 -->
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            
            <!-- 3) 상품설명 -->
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="isStock">재고가 남아있습니다</p>
                <p v-else>재고가 없습니다</p>
                
                <p>금액: {{pay}} </p>
                <!-- 4) 상품 세부설명은 ul로 -->
                <ul>
                    <!--5) li로 적는 이유는 배열로 들고와서 한번에 출력하기 위함-->
                    <li v-for="detail in details">{{detail}}</li>
                </ul>

                <!-- 6) 색상 바꾸기 , 컬러가 2개라서 나중에 받아올예정-->
                <!-- 23) color-circle , CSS부분 색 화이트/블랙 2가지 버튼을 만들어보기로한다
                    background-color: black; 이런값이 들어가도록 해야함
                    v-for="(variant, index) in variants"
                    v-for로 값을 두개 들고오면 뒤에오는 값은 배열의 인덱스값을 들고오게된다
                    그리고 컬러를 들고와야하는데 v-bind로 스타일값을주어 가져와보자

                    25) v-on,마우스를 올렸을때 variants의 인덱스 값과?

                        그버튼의 인덱스값을 업데이트하는 함수를 만든다
                -->
                <div 
                    class="color-circle"
                    v-for="(variant, index) in variants"
                    v-bind:style="{backgroundColor: variant.color}"
                    v-on:mouseover="updateVariant(index)"
                    >
                </div>

                <!-- 7) 버튼 만들기 -->
                <!-- 
                    27)-END 재고가 없을때 disabledButton 버튼을 활성화 시키려고한다 
                    isStock 이 없을때 버튼이 비활성화 되야하므로 isStock에 not을 붙인다
                    CSS에서 disabledButton 앞에 . 이 있기때문에 class임을 알수있다.
                -->
                <button 
                    class="button"
                    v-bind:class = "{disabledButton : !isStock }">
                    장바구니에 추가
                    </button>
                
            </div>
        </div>
    </div>
    `
})