


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

    
    Factory.prototype.helpers = {

        /**
         * 
         * @desc
         * @param index {number}
         */
        charAt: function( index ) {
            return ( Factory.prototype.tc + "" ).charAt( index );
        }
    };

    /**
     * 
     * @desc this method will testing "tck" algorithm
     * with a given tck number
     * @returns {number}
     */
    Factory.prototype.test = function() {

        var charAt = this.helpers.charAt
          , valid = true;

        // Check first number for zero
        // #
        if( charAt( 0 ) == "0" )
            valid = false;
        
        return valid;
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



