(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[9],{302:function(e,n,a){"use strict";a.d(n,"a",(function(){return t}));var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},304:function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return d}));var t=a(382),i=a(317),r=a(302),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n=Object(t.a)(Number(e),new Date,{locale:i.a});return Object(r.a)(n)}return""},d=function(e){return e?"".concat(e,"kg"):""}},386:function(e,n,a){"use strict";a.r(n);var t=a(85),i=a(4),r=a(0),c=a.n(r),d=a(330),l=a.n(d),o=a(19),s=a(79),u=a(298),m=a(84),v=a(272),j=a(295),b=a(304),h=a(293),k=a(274),O=Object(v.a)((function(){return Object(k.a)({root:{flexGrow:1}})}));var f=function(e){var n=e.children,a=O(),t=c.a.Children.count(n),r=!!Math.floor(12/t);if(!t||t>4)return null;var d=[];return c.a.Children.forEach(n,(function(e,n){d.push(Object(i.jsx)(h.a,{item:!0,xs:12,sm:r,children:e},"grid-col-".concat(n)))})),Object(i.jsx)("div",{className:a.root,children:Object(i.jsx)(h.a,{container:!0,spacing:3,children:d})})},p=a(279),g=a(244),x=a(34),N=a(8),S=a(363),F=a(366),w=a(277),y=a(377),D=a(378),A=a(392),E=a(299),C=a.n(E),G=a(334),W=a.n(G);function L(e){var n=e.eventName,a=e.date,c=e.author,d=e.description,l=U(),o=Object(r.useState)(!1),s=Object(t.a)(o,2),u=s[0],v=s[1];return Object(i.jsxs)(S.a,{className:l.root,children:[Object(i.jsx)(F.a,{avatar:Object(i.jsx)(A.a,{"aria-label":"event",alt:"event",children:"E"}),title:Object(i.jsx)(m.a,{noWrap:!0,className:l.eventName,children:n}),action:Object(i.jsx)(w.a,{className:Object(N.a)(l.expand,Object(x.a)({},l.expandOpen,u)),onClick:function(){return v(!u)},"aria-expanded":u,"aria-label":"show more",children:Object(i.jsx)(W.a,{})}),subheader:Object(i.jsx)(m.a,{noWrap:!0,children:a})}),Object(i.jsx)(y.a,{in:u,timeout:"auto",unmountOnExit:!0,children:Object(i.jsxs)(D.a,{className:l.content,children:[Object(i.jsx)(m.a,{paragraph:!0,children:c}),Object(i.jsx)(m.a,{paragraph:!0,children:d})]})})]})}var U=C()((function(e){var n;return{root:{width:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},eventName:(n={maxWidth:160},Object(x.a)(n,e.breakpoints.up("md"),{maxWidth:350}),Object(x.a)(n,e.breakpoints.up("lg"),{maxWidth:600}),n),content:{wordBreak:"break-word"}}})),q=Object(v.a)((function(){return Object(k.a)({root:{width:"100%"}})}));var I=function(){var e=q();return Object(i.jsx)(p.a,{className:e.root,children:[0,1,2,3].map((function(e){return Object(i.jsx)(g.a,{children:Object(i.jsx)(L,{eventName:"Event".concat(e),date:"2020-01-0".concat(e),author:"Author".concat(e),description:"Description".concat(e)})},e)}))})},M={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimal"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"allergy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"food"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"breed"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:413,source:{body:"query GetAnimal($id: Int!) {\n    animal(id: $id) {\n        id\n        name\n        details {\n            gender {\n                value\n            }\n            color {\n                id\n                value\n            }\n            birthDate\n            weight\n            allergy\n            food\n            breed {\n                id\n                value\n            }\n        }\n        imageUrl\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};var V=function(e){var n,a=e.onLoad,t=Object(o.h)().id,r=J(),c=Object(s.useQuery)(M,{variables:{id:Number(t)},onCompleted:function(e){var n=e.animal;return a?a(n):void 0}}),d=c.loading,v=c.error,h=c.data;if(d)return Object(i.jsx)(j.a,{animation:"wave",variant:"rect",height:"70vh"});if(v)return Object(i.jsx)("p",{children:"Error!"});if(!(null===h||void 0===h?void 0:h.animal))return Object(i.jsx)("p",{children:"No data!"});var k=h.animal,O=(null===(n=k.details)||void 0===n?void 0:n.birthDate)?Object(b.a)(k.details.birthDate):"";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(f,{children:[Object(i.jsx)(l.a,{src:k.imageUrl,aspectRatio:16/9}),Object(i.jsxs)(i.Fragment,{children:[k.details&&Object(i.jsx)(u.a,{mt:1,children:Object(i.jsx)(m.a,{className:r.animalMeta,variant:"body1",children:"".concat(k.details.breed,", ").concat(k.details.gender,", ").concat(Object(b.b)(k.details.weight),", ").concat(k.details.color,", ").concat(O)})}),Object(i.jsx)(u.a,{mt:1,children:Object(i.jsxs)(m.a,{variant:"body1",children:["Referencing Animal ID:",t]})})]})]}),Object(i.jsx)(u.a,{mt:2,mb:2,children:Object(i.jsx)(m.a,{variant:"h5",component:"h3",children:"Events"})}),Object(i.jsx)(I,{})]})},J=Object(v.a)((function(e){return{root:{flexGrow:1},animalName:{color:e.palette.primary.dark},animalMeta:{color:e.palette.grey[600]}}})),Q=a(135);n.default=function(){var e=Object(r.useState)(""),n=Object(t.a)(e,2),a=n[0],c=n[1];return Object(i.jsx)(Q.a,{title:null!==a&&void 0!==a?a:"Pet details",children:Object(i.jsx)(V,{onLoad:function(e){var n;return c(null!==(n=e.name)&&void 0!==n?n:"")}})})}}}]);
//# sourceMappingURL=9.0c7bb98c.chunk.js.map