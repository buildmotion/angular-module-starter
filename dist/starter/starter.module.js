import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
var StarterModule = /** @class */ (function () {
    function StarterModule() {
    }
    StarterModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [HelloWorldComponent],
                    exports: [HelloWorldComponent]
                },] },
    ];
    /** @nocollapse */
    StarterModule.ctorParameters = function () { return []; };
    return StarterModule;
}());
export { StarterModule };
//# sourceMappingURL=starter.module.js.map