(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[10],{302:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var i=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},304:function(e,a,n){"use strict";n.d(a,"a",(function(){return r})),n.d(a,"b",(function(){return s}));var i=n(382),t=n(317),c=n(302),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var a=Object(i.a)(Number(e),new Date,{locale:t.a});return Object(c.a)(a)}return""},s=function(e){return e?"".concat(e,"kg"):""}},385:function(e,a,n){"use strict";n.r(a);var i=n(85),t=n(4),c=n(0),r=n(293),s=n(149),l=n.n(s),d=n(84),o=n(291),u=n(79),m=n(295),j=n(36),v=n(363),b=n(364),h=n(365),g=n(366),O=n(277),x=n(392),p=n(299),k=n.n(p),f=n(326),N=n.n(f),S=n(70),L=["1","2"],T=["1","2"];function w(e){var a,n=e.animal,i=F();return Object(t.jsx)(r.a,{item:!0,xs:10,md:6,lg:3,children:Object(t.jsxs)(v.a,{children:[Object(t.jsx)(b.a,{component:j.c,to:"/animal/".concat(n.id),children:Object(t.jsx)(h.a,{className:i.media,image:n.imageUrl||"https://eu.ui-avatars.com/api/?name=".concat(n.name),title:"Animal picture"})}),Object(t.jsx)(g.a,{avatar:Object(t.jsx)(x.a,{"aria-label":"specie",alt:"specie",src:A(n)}),action:Object(t.jsx)(O.a,{"aria-label":"add to favorites",children:Object(t.jsx)(N.a,{})}),title:Object(t.jsx)(d.a,{className:i.headerText,noWrap:!0,children:n.name}),subheader:Object(t.jsx)(d.a,{className:i.headerText,noWrap:!0,children:null===(a=n.registration)||void 0===a?void 0:a.registrationDate})})]})})}function A(e){var a,n;if(!(null===(a=e.details)||void 0===a?void 0:a.gender)||!L.includes(e.details.gender.id))return"".concat(S.a.PUBLIC_URL,"/logo192.png");var i="0";return(null===e||void 0===e||null===(n=e.details)||void 0===n?void 0:n.species)&&T.includes(e.details.species.id)&&(i=e.details.species.id),"".concat(S.a.PUBLIC_URL,"/gender").concat(e.details.gender.id,"-species").concat(i,".png")}var F=k()((function(){return{media:{height:0,paddingTop:"56.25%"},headerText:{maxWidth:150}}}));function y(e){var a=e.animals;return Object(t.jsx)(r.a,{container:!0,component:"ul",spacing:2,justify:"center",children:a.map((function(e){return Object(t.jsx)(w,{animal:e},e.id)}))})}var C=n(19),B=n(367),D=n(22),U=n(368),E=n(372),I=n(371),R=n(369),W=n(370),q=n(304);function G(e){var a=e.animals,n=Object(C.f)(),i=z();return Object(t.jsx)(B.a,{children:Object(t.jsxs)(U.a,{className:i.table,size:"small","aria-label":"animals",children:[Object(t.jsx)(R.a,{children:Object(t.jsxs)(W.a,{className:i.headRow,children:[Object(t.jsx)(I.a,{align:"center",className:i.head}),Object(t.jsx)(I.a,{align:"center",className:i.head,children:"Specie"}),Object(t.jsx)(I.a,{align:"center",className:i.head,children:"Name"}),Object(t.jsx)(I.a,{align:"center",className:i.head,children:"Breed"}),Object(t.jsx)(I.a,{align:"center",className:i.head,children:"Weight, kg"}),Object(t.jsx)(I.a,{align:"center",className:i.head,children:"Age"}),Object(t.jsx)(I.a,{align:"center",className:i.head,children:"Checked in"})]})}),Object(t.jsx)(E.a,{children:a.map((function(e){var a,c;return Object(t.jsxs)(W.a,{hover:!0,onClick:function(){return a=e.id,void n.push("/animal/".concat(a));var a},className:i.row,children:[Object(t.jsx)(I.a,{align:"center",children:Object(t.jsx)(x.a,{alt:"Animal picture",src:e.imageUrl?e.imageUrl:"https://eu.ui-avatars.com/api/?name=".concat(e.name)})}),Object(t.jsx)(I.a,{align:"center",children:"Dog"}),Object(t.jsx)(I.a,{align:"center",children:e.name}),Object(t.jsx)(I.a,{align:"center",children:"Puddle"}),Object(t.jsx)(I.a,{align:"center",children:null===(a=e.details)||void 0===a?void 0:a.weight}),Object(t.jsx)(I.a,{align:"center",children:Object(q.a)(null===(c=e.details)||void 0===c?void 0:c.birthDate)}),Object(t.jsx)(I.a,{align:"center",children:"check-in date"})]},e.id)}))})]})})}var P,z=k()((function(e){return{headRow:{backgroundColor:Object(D.c)(e.palette.primary.dark,.75)},head:{color:e.palette.text.secondary},table:{width:"100%",backgroundColor:Object(D.c)(e.palette.background.paper,.4)},row:{cursor:"pointer",textDecoration:"none"}}})),J=n(328),Q=n.n(J),_=n(327),H=n.n(_),K=n(391),M=n(373);function V(e){var a=e.value,n=e.onChange;return Object(t.jsxs)(K.a,{size:"small",exclusive:!0,value:a,onChange:function(e,a){return n(a)},"aria-label":"view selector",children:[Object(t.jsx)(M.a,{value:P.LIST,"aria-label":P.LIST,children:Object(t.jsx)(H.a,{})}),Object(t.jsx)(M.a,{value:P.TABLE,"aria-label":P.TABLE,children:Object(t.jsx)(Q.a,{})})]})}!function(e){e.LIST="list",e.TABLE="table"}(P||(P={}));var X={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimalsList"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animals"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:324,source:{body:"query GetAnimalsList {\n    animals {\n        id\n        name\n        imageUrl\n        status\n        details {\n            gender {\n                id\n                value\n            }\n            species {\n                id\n                value\n            }\n            birthDate\n            weight\n        }\n    }\n}\n\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function Y(e){var a=e.viewType,n=Object(u.useQuery)(X),i=n.loading,c=n.error,r=n.data;return i?Object(t.jsx)(m.a,{animation:"wave",variant:"rect",height:500}):c?Object(t.jsx)("p",{children:"Error!"}):(null===r||void 0===r?void 0:r.animals.length)?a===P.TABLE?Object(t.jsx)(G,{animals:r.animals}):Object(t.jsx)(y,{animals:r.animals}):Object(t.jsx)("p",{children:"No data"})}var Z=n(135);function $(e){var a=e.viewType,n=e.onChange,i=e.mobile;return Object(t.jsxs)(r.a,{container:!0,spacing:2,alignItems:"center",children:[Object(t.jsx)(r.a,{item:!0,xs:10,children:Object(t.jsx)(d.a,{children:"Filters"})}),!i&&Object(t.jsx)(r.a,{item:!0,xs:2,style:{textAlign:"right"},children:Object(t.jsx)(V,{value:a,onChange:n})})]})}a.default=function(){var e=l()(),a=Object(c.useState)(P.LIST),n=Object(i.a)(a,2),r=n[0],s=n[1],d=Object(o.a)(e.breakpoints.down("sm"));return Object(c.useEffect)((function(){d&&r===P.TABLE&&s(P.LIST)}),[d,r]),Object(t.jsx)(Z.a,{title:"Animals List",topSection:Object(t.jsx)($,{viewType:r,onChange:function(){s(r===P.TABLE?P.LIST:P.TABLE)},mobile:d}),children:Object(t.jsx)(Y,{viewType:r})})}}}]);
//# sourceMappingURL=10.676ae89a.chunk.js.map