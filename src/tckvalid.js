


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
        console.log(this);
    };

    Factory.prototype.test = function() {

        console.log( this.tc );
    };

    /**
     * Proto factory method
     */
    function Proto_tcValid() {

        Factory.call( Factory, this );
    }

    // Apply factory to string proto
    // #
    String.prototype.tcValid = Proto_tcValid;

})( window, String, undefined );



