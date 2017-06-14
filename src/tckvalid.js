


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

    
    /**
     * @method charAt: returns char from desired
     * index in string
     */
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
          , charAt10 = null
          , charAt11;

        // Check first number for zero
        // #
        if( charAt( 0 ) == "0" )
            valid = false;

        // Get tenth char from tck
        // and check tenth 
        // #
        charAt10 = this.checkAt10();
       
        if( charAt10.fail )
            return false;

        // Check eleventh char
        // #
        charAt11 = this.checkAt11( charAt10 );
        
        if( !charAt11 )
            return false;

        return true;
    };

    /**
     * @desc
     * @returns {object}
     * object.fail: {Boolean}
     * object.char: {String}
     */
    Factory.prototype.checkAt10 = function() {
        return {
            fail: false,
            char: null
        }
    };

    /**
     * @desc
     * @returns
     */
    Factory.prototype.checkAt11 = function() {
        return true
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



