angular
.module('100gmInfo', [])
.controller('SectionCtrl', function() {
    this.sections = [
        {
            title : 'Nuts',
            items : [
                { title : "Almonds", image : "m1.jpg" },
                { title : "Cashews", image : "m2.jpg" },
                { title : "Pistachios", image : "m3.jpg" }
            ]
        }, {
            title : 'Oils',
            items : [
                { title : "Freedom Oil", image : "mk4.jpg" },
                { title : "Saffola Gold", image : "mk5.jpg" },
                { title : "Fortune Oil", image : "mk6.jpg" }
            ]
        }, {
            title : 'Noodles',
            items : [
                { title : "Yippee Noodles", image : "mk7.jpg" },
                { title : "Wheat Pasta", image : "mk8.jpg" },
                { title : "Chinese Noodles", image : "mk9.jpg" }
            ]
        }
    ];
    
})
.controller('SliderCtrl', function() {
    
    this.sliders = [
        { title : "Ashirwad", image : "s1.jpg" },
        { title : "Madhur Pure Sugar", image : "s2.jpg" },
        { title : "Kissan Tomato Ketchup", image : "s4.jpg" },
        { title : "Sprite", image : "s5.jpg" },
        { title : "Cadbury Choclairs", image : "s8.jpg" }
    ];
})
.controller('CategoryCtrl', function() {
    
    this.cats = [
        { title : "Grocery" },
        { title : "Fruits" },
        { title : "Soft Drinks" },
        { title : "Biscuits & Cookies" },
        { title : "Snacks & Beverages" }
    ];
})
.controller('BrandCtrl', function() {
    
    this.brands = [
        { title : "Aashirvaad" },
        { title : "Amul" },
        { title : "Bingo" },
        { title : "Boost" },
        { title : "Maggi" },
        { title : "Glucon-D" },
        { title : "Horlicks" },
        { title : "Dabur" },
        { title : "Coca-Cola" },
        { title : "Cadbury" },
        { title : "Bru" },
        { title : "Bournvita" },
        { title : "Tang" },
        { title : "Oreo" },
        { title : "Taj Mahal" },
        { title : "Sprite" },
        { title : "Thums Up" },
        { title : "Tata" },
        { title : "Sunfeast" },
        { title : "Sunsilk" },
        { title : "Patanjali" },
        { title : "MTR" },
        { title : "Kissan" },
        { title : "Lipton" }
    ];
})
;