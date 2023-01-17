import{_ as u,d as F,o as E,c as e,B as t}from"./index.ef9f4476.js";const a=F({setup(){}}),C={class:"layout-container"},B=t("<article data-v-17e8b0e8><section data-v-17e8b0e8><p data-v-17e8b0e8>\u5982\u4F55\u5B9A\u5236\u4E00\u5957\u5C5E\u4E8E\u81EA\u5DF1\u7684\u7CFB\u7EDF\u4E3B\u9898\u5462\uFF0C\u672C\u7BC7\u6587\u7AE0\u5C31\u6765\u6559\u4F60\u5728\u6B64\u7CFB\u7EDF\u5185\u5982\u4F55\u5FEB\u901F\u5B9E\u73B0\u4E00\u5957\u81EA\u5B9A\u4E49\u4E3B\u9898</p><p data-v-17e8b0e8> 1. \u9996\u5148\uFF0C\u4F60\u627E\u5230 <b data-v-17e8b0e8>src/theme/index.ts</b> \u6587\u4EF6\uFF0C\u54B1\u4EEC\u7CFB\u7EDF\u5185\u7684\u4E09\u4E2A\u4E3B\u9898\u914D\u7F6E\u5747\u5728 <b data-v-17e8b0e8>style</b>\u5E38\u91CF\u4E0B\uFF0C\u4F60\u590D\u5236\u4E00\u5957\u4E3B\u9898\uFF0C\u6539\u52A8\u4E3A\u81EA\u5DF1\u7684\u989C\u8272\u4EE3\u7801\u5373\u53EF\u3002 </p><p data-v-17e8b0e8> 2. \u5982\u679C\u4F60\u91C7\u7528\u7684\u662F\u56FD\u9645\u5316\u7684\u6A21\u677F\uFF0C\u4F60\u9700\u8981\u989D\u5916\u5173\u6CE8\u4E00\u4E0B <b data-v-17e8b0e8>locale/modules</b>\u6587\u4EF6\u5939\u4E0B\u5404\u4E2A\u8BED\u8A00\u5305\u7684system.ts\uFF0C\u5728\u91CC\u9762\u5206\u522B\u5B9A\u4E49\u4F60\u7684\u4E3B\u9898\u540D\u79F0\uFF0C\u5BF9\u8C61\u6240\u5728\u4F4D\u7F6E\u4E3A\uFF1A <b data-v-17e8b0e8>system/setting/style</b></p><p data-v-17e8b0e8> 3. \u4F60\u914D\u7F6E\u7684\u4E3B\u9898\u540D\u79F0\uFF0C\u5982\uFF1A <b data-v-17e8b0e8>default/light/dark</b>\uFF0C\u8FD9\u51E0\u4E2A\u540D\u79F0\u5747\u4F1A\u88AB\u6620\u5C04\u5230body\u7684className\u4E0A\u9762\uFF0C\u6545\uFF0C\u4F60\u751A\u81F3\u5728\u5F53\u524D\u6570\u91CF\u7684\u53D8\u91CF\u4E0D\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\u65F6\uFF0C\u751A\u81F3\u53EF\u4EE5\u76F4\u63A5\u52A0\u4E00\u4E2Acss\u6587\u4EF6\u6765\u8FDB\u884C\u6240\u6709\u5143\u7D20\u7684\u6837\u5F0F\u81EA\u5B9A\u4E49\uFF0C\u5177\u4F53\u53EF\u53C2\u7167\uFF1A <b data-v-17e8b0e8>theme/modules/dark.scss</b>\u6587\u4EF6\u4E2D\u7684\u5199\u6CD5\uFF0C\u5199\u5B8C\u540E\uFF0C\u5728 <b data-v-17e8b0e8>theme/index.scss</b>\u5E95\u90E8\u5F15\u5165\u5373\u53EF\u3002 </p><p data-v-17e8b0e8> 4. \u7CFB\u7EDF\u4F1A\u81EA\u52A8\u91C7\u96C6 <b data-v-17e8b0e8>src/theme/index.ts</b>\u6587\u4EF6\u4E0B\u9762\u7684\u4E3B\u9898\uFF0C\u5E76\u5728\u4E3B\u9898\u914D\u7F6E\u91CC\u9762\u5C55\u793A\u5B83\uFF0C\u5982\u6B64\u4E00\u6765\uFF0C\u4F60\u81EA\u5B9A\u4E49\u4E3B\u9898\u552F\u4E00\u9700\u8981\u5173\u6CE8\u7684\u5C31\u53EA\u662Ftheme\u6587\u4EF6\u5939\uFF0C\u5982\u679C\u9700\u8981\u56FD\u9645\u5316\uFF0C\u518D\u52A0\u4E00\u4E2Alocale\u6587\u4EF6\u5939\uFF0C\u9664\u6B64\u4E4B\u5916\u4E0D\u9700\u8981\u6D89\u53CA\u5230\u5176\u4ED6\u4EFB\u4F55\u6587\u4EF6\u5939\u7684\u4FEE\u6539\u3002 </p><p data-v-17e8b0e8>5. \u6B64\u63AA\u65BD\u786E\u4FDD\u4E86\u81EA\u5B9A\u4E49\u4E3B\u9898\u8DB3\u591F\u7684\u7B80\u5355\uFF0C\u7B80\u5355\u5230\u4F60\u53EA\u9700\u8981copy\u51E0\u884C\u4EE3\u7801\uFF0C\u6539\u4E00\u4E0B\u989C\u8272\u5373\u53EF\u3002</p><p data-v-17e8b0e8>6. diy\u4E3B\u9898\u662F\u5982\u6B64\u7684\u7B80\u5355\uFF0C\u8D76\u5FEB\u8BD5\u8BD5\u5427\u3002</p></section></article>",1),s=[B];function A(d,D,b,c,o,p){return E(),e("div",C,s)}var _=u(a,[["render",A],["__scopeId","data-v-17e8b0e8"]]);export{_ as default};
