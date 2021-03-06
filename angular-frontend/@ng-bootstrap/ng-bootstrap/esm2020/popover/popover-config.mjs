import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../ngb-config";
/**
 * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
 *
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
export class NgbPopoverConfig {
    constructor(_ngbConfig) {
        this._ngbConfig = _ngbConfig;
        this.autoClose = true;
        this.placement = 'auto';
        this.triggers = 'click';
        this.disablePopover = false;
        this.openDelay = 0;
        this.closeDelay = 0;
    }
    get animation() { return (this._animation === undefined) ? this._ngbConfig.animation : this._animation; }
    set animation(animation) { this._animation = animation; }
}
NgbPopoverConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbPopoverConfig, deps: [{ token: i1.NgbConfig }], target: i0.ɵɵFactoryTarget.Injectable });
NgbPopoverConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbPopoverConfig, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: NgbPopoverConfig, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.NgbConfig }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcG9wb3Zlci9wb3BvdmVyLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFJekM7Ozs7O0dBS0c7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBWTNCLFlBQW9CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFYekMsY0FBUyxHQUFtQyxJQUFJLENBQUM7UUFDakQsY0FBUyxHQUFtQixNQUFNLENBQUM7UUFDbkMsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUVuQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBVSxHQUFHLENBQUMsQ0FBQztJQUk2QixDQUFDO0lBRTdDLElBQUksU0FBUyxLQUFjLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEgsSUFBSSxTQUFTLENBQUMsU0FBa0IsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7OzZHQWZ2RCxnQkFBZ0I7aUhBQWhCLGdCQUFnQixjQURKLE1BQU07MkZBQ2xCLGdCQUFnQjtrQkFENUIsVUFBVTttQkFBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1BsYWNlbWVudEFycmF5fSBmcm9tICcuLi91dGlsL3Bvc2l0aW9uaW5nJztcclxuaW1wb3J0IHtOZ2JDb25maWd9IGZyb20gJy4uL25nYi1jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIEEgY29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgW2BOZ2JQb3BvdmVyYF0oIy9jb21wb25lbnRzL3BvcG92ZXIvYXBpI05nYlBvcG92ZXIpIGNvbXBvbmVudC5cclxuICpcclxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZSB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluXHJcbiAqIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGUgcG9wb3ZlcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcclxuZXhwb3J0IGNsYXNzIE5nYlBvcG92ZXJDb25maWcge1xyXG4gIGF1dG9DbG9zZTogYm9vbGVhbiB8ICdpbnNpZGUnIHwgJ291dHNpZGUnID0gdHJ1ZTtcclxuICBwbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5ID0gJ2F1dG8nO1xyXG4gIHRyaWdnZXJzID0gJ2NsaWNrJztcclxuICBjb250YWluZXI6IHN0cmluZztcclxuICBkaXNhYmxlUG9wb3ZlciA9IGZhbHNlO1xyXG4gIHBvcG92ZXJDbGFzczogc3RyaW5nO1xyXG4gIG9wZW5EZWxheSA9IDA7XHJcbiAgY2xvc2VEZWxheSA9IDA7XHJcblxyXG4gIHByaXZhdGUgX2FuaW1hdGlvbjogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdiQ29uZmlnOiBOZ2JDb25maWcpIHt9XHJcblxyXG4gIGdldCBhbmltYXRpb24oKTogYm9vbGVhbiB7IHJldHVybiAodGhpcy5fYW5pbWF0aW9uID09PSB1bmRlZmluZWQpID8gdGhpcy5fbmdiQ29uZmlnLmFuaW1hdGlvbiA6IHRoaXMuX2FuaW1hdGlvbjsgfVxyXG4gIHNldCBhbmltYXRpb24oYW5pbWF0aW9uOiBib29sZWFuKSB7IHRoaXMuX2FuaW1hdGlvbiA9IGFuaW1hdGlvbjsgfVxyXG59XHJcbiJdfQ==