'use strict';

/**
 * Configuration for module compilation
 */
module.exports = {

    /**
     * Bundle's entry point
     */
    entryPoint: 'index.js',

    /**
     * A list of IDs of modules that should remain external to the bundle
     */
    external: [
        '@angular/core',
        '@angular/router',
        'rxjs'
    ],

    /**
     * The name to use for the module for IIFE bundles
     */
    moduleName: 'ng-reusable-auth',

    /**
     * The name to use for the module for UMD/IIFE bundles
     */
    umdModuleName: 'ng-reusable-auth.umd.js'
};
