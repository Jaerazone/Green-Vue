
Vue.component ('review-list', {
    
    data : function () {
        return {}
    },
    template : 
    `
    <div class="review-container">
            <h3>Reviews:</h3>
            <ul>
                <li><slot name="name"></slot> 님이 <slot name="rating"></slot> 별점을 주었습니다</li>
                <li><slot name="review"></slot></li>
                <li>추천: <slot name="recomment"></slot></li>
            </ul>
    </div>
    `
})
