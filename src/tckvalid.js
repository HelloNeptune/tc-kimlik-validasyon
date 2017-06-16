


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
         * @param index {Number}
         */
        charAt: function( index ) {
            return ( Factory.prototype.tc + "" ).charAt( index );
        },

        
        /**
         * 
         * @desc
         * @param str {String}
         */
        toInt: function( str ) {
            return parseInt( str )
        },

        /**
         * 
         * @desc
         * @param num {Number}
         */
        toStr: function( num ) {
            return "" + num;
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
        if( charAt( 0 ) == "0" || this.tc.length != 11 )
            return false;

        // Get tenth char from tck
        // and check tenth 
        // #
        charAt10 = this.checkAt10();
       
        if( charAt10.fail )
            return false;

        // Check eleventh char
        // #
        charAt11 = this.checkAt11( charAt10.val );
        
        if( !charAt11 )
            return false;

        return true;
    };

    /**
     * @desc
     * @returns {object}
     * object.fail: {Boolean}
     * object.val: {String}
     */
    Factory.prototype.checkAt10 = function() {

        var part1 = null
          , part2 = null
          , temp = null
          , fail = false
          , tc = this.tc
          , toInt = this.helpers.toInt
          , toStr = this.helpers.toStr;
          
          part1 = ( toInt( tc[ 0 ] ) + toInt( tc[ 2 ] ) + toInt( tc[ 4 ] ) + toInt( tc[ 6 ] ) + toInt( tc[ 8 ] ) ) * 7;
          part2 = toInt( tc[ 1 ] ) + toInt( tc[ 3 ] ) + toInt( tc[ 5 ] ) + toInt( tc[ 7 ] ) ;
          
          temp = toStr( ( part1 - part2 ) % 10 );

          if( temp != tc[ 9 ])
            fail = true;

        return {
            fail: fail,
            val: temp
        }
    };

    /**
     * @desc
     * @param charAt10 {String}
     * @returns {Boolean}
     */
    Factory.prototype.checkAt11 = function( charAt10 ) {
        
        var tc = this.tc
          , temp = null
          , success = true
          , toInt = this.helpers.toInt
          , toStr = this.helpers.toStr;

        temp = toStr( ( toInt( tc[ 0 ] ) + toInt( tc[ 1 ] ) + toInt( tc[ 2 ] ) + toInt( tc[ 3 ] ) + toInt( tc[ 4 ] ) +
        toInt( tc[ 5 ] ) + toInt( tc[ 6 ] ) + toInt( tc[ 7 ] ) + toInt( tc[ 8 ] ) + toInt( charAt10 ) ) % 10 );

        if( temp != tc[ 10 ] )
            success = false;

        return success;
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



