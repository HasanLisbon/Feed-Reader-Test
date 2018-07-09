
$(function() {
    
    describe('RSS Feeds', ()=> {
        
        it('are defined', ()=> {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //checking feed url is defined and has at least one item
        it('feed URL defined', ()=>{
            allFeeds.forEach((feeds)=>{ 
                
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);
            });
           
        });

        //looping through the feeds and making sure that the feeds name is defined and contains at least one item
        it('feed name defined',()=>{
            allFeeds.forEach((feeds)=>{
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            });
        });
    });


    //initiating 'The Menu' test suit
    describe('The Menu',()=>{
        
        //code to test that menu is hidden by default
        it('menu element is hidden', ()=>{
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
         //code to test the visibility of menu changes by clicking on icon link
        it('menu changes visibility', ()=>{
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    
    //initiating new test suit 'Initial Entries'
    describe('Initial Entries', ()=>{
        
        //to test loadFeed function and it completes its call and contains entry more than one
    beforeEach((done)=>{
        loadFeed(0, ()=>{
            done();
         });
        });
        it('checks for more than 0 entry element', ()=>{
            expect($('.feed .entry').length).toBeGreaterThan(0);
        
        });
     });
    
    
    //initiating test suit 'New Feed Selection'
    describe('New Feed Selection',()=>{
        var $firstFeed;
        var $secondFeed;
        // code to test when feed is loaded the content changes
        beforeEach((done)=>{
            loadFeed(0, ()=> {
                firstFeed = $('.feed').html();
                done();
            });
        });

        it('should change feed content after loading feed', function(done) {
            loadFeed(1, ()=> {
                secondFeed = $('.feed').html();
                expect(secondFeed).not.toEqual(firstFeed);
                done();
            });
        });
    });
        
}());
