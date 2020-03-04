new Vue({
    el: '#app',
    data: {
        sStart: true,
        sOutIn: true,
        sOut: true,
        sIn: true,
        sGoodBad: true,
        sHealthy: true,
        sUnhealthy: true,
        sResults: true,
        resultMain:'',
        resultSide:'',
        finalResult:'',
        pleaseSelect:"Please select the options below to receive a suggestion.",

        eatout_healthy: ['Zupas', 'Chipotle', 'Panera Bread', 'Jamba Juice', 'Great Harvest', 'Noodles and Company', 'Whole Foods Cafe', 'Protein Foundry'],
        eatout_splurge: ['KFC', 'Cheesecake Factory', 'Betos', 'Dominos', 'Wendys', 'Taco Bell', 'McDonalds', 'Olive Garden', 'Crown Burger', 'Buffalo Wild Wings', 'Cafe Rio'],
        home_healthy_main: ['Grilled Chicken', 'Steak', 'Salmon', ' Grilled Tofu', 'Chicken Noodle Soup', 'Veggie Burger', 'Fresh Mozzeralla', 'Turkey Burger', 'BLT'],
        home_healthy_side: ['Steamed Broccoli', 'Sliced Apples', 'Kale Chips', 'Grilled Carrots', 'Sweet Potato Fries', 'Green Beans', 'Orange Slices', 'Grapes', 'Baked Chips'],
        home_splurge_main: ['Ben and Jerrys', 'Fried Chicken', 'Mac N Cheese', 'Lasagna', 'Fried Pork Chops', 'Cheesy Potatoes', 'Cake', 'Cheese Burger', 'Chicken Fried Steak', 'Loaded Baked Potatoes'],
        home_splurge_side: ['Cookie Dough', 'Doritos', 'Baked Beans', 'Buttery White Bread', 'Potato Salad', 'Macaroni Salad', 'Fried Rice', 'Hush Puppies', 'French Fries', 'Loaded Mashed Potatoes']

    },
    methods: {
        results: function () {

            let choiceOH = Math.floor(Math.random() * this.eatout_healthy.length);
            let choiceOS = Math.floor(Math.random() * this.eatout_splurge.length);
            let choiceHM = Math.floor(Math.random() * this.home_healthy_main.length);
            let choiceHS = Math.floor(Math.random() * this.home_healthy_side.length);
            let choiceSM = Math.floor(Math.random() * this.home_splurge_main.length);
            let choiceSS = Math.floor(Math.random() * this.home_splurge_side.length);

            //Results for EATOUT and HEALTHY
            if (this.sOut == false && this.sHealthy == false) {
                this.finalResult = "Get something healthy at " + this.eatout_healthy[choiceOH];
                this.pSelect = true;
            }
            //Results for EATOUT and SPLURGE
            if (this.sOut == false && this.sUnhealthy == false) {
                this.finalResult = "Go all out at " + this.eatout_splurge[choiceOS] + ". No regrets!";
                this.pSelect = true;
            }
            //Results for STAY IN and HEALTHY
            if (this.sIn == false && this.sHealthy == false) {
                this.resultMain = this.home_healthy_main[choiceHM];
                this.resultSide = this.home_healthy_side[choiceHS];
                this.finalResult = this.resultMain + " with a side of " + this.resultSide + " might hit the spot!";
                this.pSelect = true;
            }
            //Results for STAY IN and SPLURGE
            if (this.sIn == false && this.sUnhealthy == false) {
                this.resultMain = this.home_splurge_main[choiceSM];
                this.resultSide = this.home_splurge_side[choiceSS];
                this.finalResult = this.resultMain + " with a side of " + this.resultSide + ", you don't have to tell anyone. ";
                this.pSelect = true;
            }
        }
    }
});
