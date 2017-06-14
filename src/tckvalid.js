


// Apply factory to String
// #
!(function( window, String, undefined )
{
    "use strict";
 
    /**
     *
     * @constructor
     */
    function Factory( tc ) {

        this.tc = tc;
        return this.test();
    };

    Factory.prototype.test = function() {

        return true;
    };

    /**
     * Proto factory method
     */
    function Proto_tcValid() {
        return Factory.call( Factory.prototype, this );
    }

    // Apply factory to string proto
    // #
    String.prototype.tcValid = Proto_tcValid;

})( window, String, undefined );



