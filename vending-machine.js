/**
 벤딩머신을 만들자
 구성요소
 - 벤딩머신
 - 상태값
 > 음료수 종류별 객체
 >> 수량
 >> 가격
 - 동작
 > 전원을 켠다.
 > 돈을 넣는 기능
 >> 거스름 돈이 있는지 체크
 >>> 거스름 돈이 없을시 돈이 들어가지 않고 에러메시지 리턴
 >> 현재 있는 음료수 상태 리턴
 >> 돈을 넣으면 거스름돈 반환 버튼 활성화
 > 음료수선택
 >>음료수 배출
 >>거스름돈 계산
 > 거스름돈 배출
 */
var vendingAction = {
    giveMoney : function (money){
        this.moneyBox += money;
        var initMoney = this.moneyBox;
        if(initMoney < 500){
            return '현재가능한 음료가 없습니다.';
        }
        var agreeProducts  = this.products.filter(function(array){
            var possibleProducts = array.price <= initMoney;
            return possibleProducts;
        });

        var possibleBeverage = agreeProducts.map(function(array){
            return array.name;
        });
        return '현재 구매 가능한 음료는 '+possibleBeverage+' 입니다.';
    },
    getBeverage : function(beverageName) {
        if(!this.power) throw new Error('전원이 꺼져 있습니다. 전원을 켜주세요.');
        if(!this.moneyBox) throw new Error('돈넣을 넣어주세요');
        for (var i = 0; i < this.products.length; i++) {
            var beverage = this.products[i];
            if(beverage.name === beverageName) {
                if(!beverage.quantity){
                    return '해당 음료가 모두 소진되었습니다.';
                }
                beverage.quantity -= 1;
                this.moneyBox -= beverage.price;
                this.profitBox += beverage.price;
                return '음료수 '+beverageName+'이/가 나왔습니다.' +'\n' + '잔액이 '+this.moneyBox+'남았습니다.';
            }
        }
    },
    getChange : function(){
        var changeMoney = this.moneyBox;
        this.moneyBox = 0;
        if(!changeMoney){
            return '반환 될 잔액이 없습니다.'
        }
        return '잔액이 '+changeMoney+'반환 되었습니다.';
    },
    giveBeverage : function (beverageName,quantity){
        for (var i = 0; i < this.products.length; i++) {
            var beverage = this.products[i];
            if(beverage.name === beverageName) {
                beverage.quantity += quantity;
                return '음료수 '+beverageName+'의 총 갯수는'+beverage.quantity+'가 되었습니다.';
            }
        }
    },
    on : function() {
        this.power = true;
    },
    off : function() {
        this.power = false;
    }
};
function VendingMachine(products){
    this.power =  true;
    this.moneyBox = 0;
    this.profitBox = 0;
    this.products = products;
}
VendingMachine.prototype = vendingAction;
var vendingMachine1 = new VendingMachine([
    {
        name: '콜라',
        price: 500,
        quantity: 0
    },
    {
        name: '사이다',
        price: 700,
        quantity: 30
    },
    {
        name: '게토레이',
        price:800,
        quantity: 20
    },
    {
        name: '포카리스웨트',
        price:800,
        quantity: 20
    }
]);

var vendingMachine2 = new VendingMachine([
    {
        name: '식혜',
        price: 500,
        quantity: 20
    },
    {
        name: '암바사',
        price: 700,
        quantity: 30
    },
    {
        name: '비타500',
        price:800,
        quantity: 20
    },
    {
        name: '오로나민씨',
        price:800,
        quantity: 20
    }
]);