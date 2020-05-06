System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, typescript;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "55d06eZvAFBfLgWKvBp6jZo", "Mirror", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("typescript", typescript = (_dec = ccclass('typescript'), _dec2 = property(cc.ModelComponent), _dec3 = property(cc.CameraComponent), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(typescript, _Component);

        function typescript() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, typescript);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(typescript)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "model", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraComp", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(typescript, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            var renderTex = new cc.RenderTexture();
            renderTex.reset({
              width: 256,
              height: 256,
              colorFormat: cc.RenderTexture.PixelFormat.RGBA8888,
              depthStencilFormat: cc.RenderTexture.DepthStencilFormat.DEPTH_24_STENCIL_8
            });
            this.cameraComp.targetTexture = renderTex;
            var pass = this.model.material.passes[0];
            var binding = pass.getBinding('mainTexture');
            pass.bindTextureView(binding, renderTex.getGFXTextureView());
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return typescript;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "model", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cameraComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRTovanlwR2FtZS91bml0eVNoYWRlckJvb2tUb0NvY29zM0QvYXNzZXRzL1NjcmlwdC9NaXJyb3IudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInR5cGVzY3JpcHQiLCJjYyIsIk1vZGVsQ29tcG9uZW50IiwiQ2FtZXJhQ29tcG9uZW50IiwicmVuZGVyVGV4IiwiUmVuZGVyVGV4dHVyZSIsInJlc2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvckZvcm1hdCIsIlBpeGVsRm9ybWF0IiwiUkdCQTg4ODgiLCJkZXB0aFN0ZW5jaWxGb3JtYXQiLCJEZXB0aFN0ZW5jaWxGb3JtYXQiLCJERVBUSF8yNF9TVEVOQ0lMXzgiLCJjYW1lcmFDb21wIiwidGFyZ2V0VGV4dHVyZSIsInBhc3MiLCJtb2RlbCIsIm1hdGVyaWFsIiwicGFzc2VzIiwiYmluZGluZyIsImdldEJpbmRpbmciLCJiaW5kVGV4dHVyZVZpZXciLCJnZXRHRlhUZXh0dXJlVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7Ozs7QUFDYkMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyxVQVNIQyxRQUFRLENBQUNFLEVBQUUsQ0FBQ0MsY0FBSixDLFVBR1JILFFBQVEsQ0FBQ0UsRUFBRSxDQUFDRSxlQUFKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0E7QUFDTDtBQUNBLGdCQUFNQyxTQUFTLEdBQUcsSUFBSUgsRUFBRSxDQUFDSSxhQUFQLEVBQWxCO0FBQ0FELFlBQUFBLFNBQVMsQ0FBQ0UsS0FBVixDQUFnQjtBQUNaQyxjQUFBQSxLQUFLLEVBQUUsR0FESztBQUVaQyxjQUFBQSxNQUFNLEVBQUUsR0FGSTtBQUdaQyxjQUFBQSxXQUFXLEVBQUVSLEVBQUUsQ0FBQ0ksYUFBSCxDQUFpQkssV0FBakIsQ0FBNkJDLFFBSDlCO0FBSVpDLGNBQUFBLGtCQUFrQixFQUFFWCxFQUFFLENBQUNJLGFBQUgsQ0FBaUJRLGtCQUFqQixDQUFvQ0M7QUFKNUMsYUFBaEI7QUFNQSxpQkFBS0MsVUFBTCxDQUFnQkMsYUFBaEIsR0FBZ0NaLFNBQWhDO0FBQ0EsZ0JBQU1hLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0JDLE1BQXBCLENBQTJCLENBQTNCLENBQWI7QUFDQSxnQkFBTUMsT0FBTyxHQUFHSixJQUFJLENBQUNLLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBaEI7QUFDQUwsWUFBQUEsSUFBSSxDQUFDTSxlQUFMLENBQXFCRixPQUFyQixFQUE4QmpCLFNBQVMsQ0FBQ29CLGlCQUFWLEVBQTlCO0FBQ0gsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUEvQjRCM0IsUzs7Ozs7aUJBU0QsSTs7Ozs7OztpQkFHTSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ3R5cGVzY3JpcHQnKVxyXG5leHBvcnQgY2xhc3MgdHlwZXNjcmlwdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk1vZGVsQ29tcG9uZW50KVxyXG4gICAgbW9kZWw6IGNjLk1vZGVsQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQ2FtZXJhQ29tcG9uZW50KVxyXG4gICAgY2FtZXJhQ29tcDogY2MuQ2FtZXJhQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyVGV4ID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICByZW5kZXJUZXgucmVzZXQoe1xyXG4gICAgICAgICAgICB3aWR0aDogMjU2LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1NixcclxuICAgICAgICAgICAgY29sb3JGb3JtYXQ6IGNjLlJlbmRlclRleHR1cmUuUGl4ZWxGb3JtYXQuUkdCQTg4ODgsXHJcbiAgICAgICAgICAgIGRlcHRoU3RlbmNpbEZvcm1hdDogY2MuUmVuZGVyVGV4dHVyZS5EZXB0aFN0ZW5jaWxGb3JtYXQuREVQVEhfMjRfU1RFTkNJTF84LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQ29tcC50YXJnZXRUZXh0dXJlID0gcmVuZGVyVGV4O1xyXG4gICAgICAgIGNvbnN0IHBhc3MgPSB0aGlzLm1vZGVsLm1hdGVyaWFsLnBhc3Nlc1swXTtcclxuICAgICAgICBjb25zdCBiaW5kaW5nID0gcGFzcy5nZXRCaW5kaW5nKCdtYWluVGV4dHVyZScpO1xyXG4gICAgICAgIHBhc3MuYmluZFRleHR1cmVWaWV3KGJpbmRpbmcsIHJlbmRlclRleC5nZXRHRlhUZXh0dXJlVmlldygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==