const handleSearch = () => {
    const input = document.getElementById('searchInput').value.trim();

    if (input !== '') {
        gtag("event", "search_button_clicked", {
            event_category: "engagement",
            event_label: input,
            search_term: input
        });

        alert(`검색어 "${input}" 에 대한 검색을 실행하였습니다.`);
    } else {
        alert("검색어를 입력해주세요.");
    }
};

// 상품상세보기 이벤트 함수
const viewItem = () => {
    gtag("event", "view_item", {
        category: "IT",
        labels: "promotion_item",
        currency : "KRW",
        value : 129000,
        items: [
            {
                item_id: "EP1001",
                item_name: "무선 이어폰",
                currency: "KRW",
                price: 129000,
                quantity: 1
            },
        ],
    });
    alert("view_item 이벤트 발생");
};

// 장바구니 이벤트 함수
const addToCart = () => {
    gtag("event", "add_to_cart", {
        category: "IT",
        labels: "promotion_item",
        currency : "KRW",
        value : 129000,
        items: [
            {
                item_id: "EP1001",
                item_name: "무선 이어폰",
                currency: "KRW",
                price: 129000,
                quantity: 1
            },
        ],
    });
    alert("add_to_cart 이벤트 발생");
};

// 구매 이벤트 함수
const purchase = () => {
    gtag("event", "purchase", {
        transaction_id: "T1234",
        affiliation : "온라인몰",   
        category : "IT",
        labels: "promotion_item",
        tax : 12900,
        shipping : 3000,            
        currency : "KRW",
        value : 129000,
        items: [
            {
                item_id: "EP1001",
                item_name: "무선 이어폰",
                currency: "KRW",
                price: 129000,
                quantity: 1
            },
        ],
    });
    alert("purchase 이벤트 발생");  
