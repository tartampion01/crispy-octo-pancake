//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjax.js
Function.__typeName="Function";Function.__class=true;Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};Function.emptyFunction=Function.emptyMethod=function(){};Function.validateParameters=function(c,b,a){return Function._validateParams(c,b,a)};Function._validateParams=function(g,e,c){var a,d=e.length;c=c||typeof c==="undefined";a=Function._validateParameterCount(g,e,c);if(a){a.popStackFrame();return a}for(var b=0,i=g.length;b<i;b++){var f=e[Math.min(b,d-1)],h=f.name;if(f.parameterArray)h+="["+(b-d+1)+"]";else if(!c&&b>=d)break;a=Function._validateParameter(g[b],f,h);if(a){a.popStackFrame();return a}}return null};Function._validateParameterCount=function(j,d,i){var a,c,b=d.length,e=j.length;if(e<b){var f=b;for(a=0;a<b;a++){var g=d[a];if(g.optional||g.parameterArray)f--}if(e<f)c=true}else if(i&&e>b){c=true;for(a=0;a<b;a++)if(d[a].parameterArray){c=false;break}}if(c){var h=Error.parameterCount();h.popStackFrame();return h}return null};Function._validateParameter=function(c,a,h){var b,g=a.type,l=!!a.integer,k=!!a.domElement,m=!!a.mayBeNull;b=Function._validateParameterType(c,g,l,k,m,h);if(b){b.popStackFrame();return b}var e=a.elementType,f=!!a.elementMayBeNull;if(g===Array&&typeof c!=="undefined"&&c!==null&&(e||!f)){var j=!!a.elementInteger,i=!!a.elementDomElement;for(var d=0;d<c.length;d++){var n=c[d];b=Function._validateParameterType(n,e,j,i,f,h+"["+d+"]");if(b){b.popStackFrame();return b}}}return null};Function._validateParameterType=function(b,c,k,j,h,d){var a,g;if(typeof b==="undefined")if(h)return null;else{a=Error.argumentUndefined(d);a.popStackFrame();return a}if(b===null)if(h)return null;else{a=Error.argumentNull(d);a.popStackFrame();return a}if(c&&c.__enum){if(typeof b!=="number"){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(b%1===0){var e=c.prototype;if(!c.__flags||b===0){for(g in e)if(e[g]===b)return null}else{var i=b;for(g in e){var f=e[g];if(f===0)continue;if((f&b)===f)i-=f;if(i===0)return null}}}a=Error.argumentOutOfRange(d,b,String.format(Sys.Res.enumInvalidValue,b,c.getName()));a.popStackFrame();return a}if(j&&(!Sys._isDomElement(b)||b.nodeType===3)){a=Error.argument(d,Sys.Res.argumentDomElement);a.popStackFrame();return a}if(c&&!Sys._isInstanceOfType(c,b)){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(c===Number&&k)if(b%1!==0){a=Error.argumentOutOfRange(d,b,Sys.Res.argumentInteger);a.popStackFrame();return a}return null};Error.__typeName="Error";Error.__class=true;Error.create=function(d,b){var a=new Error(d);a.message=d;if(b)for(var c in b)a[c]=b[c];a.popStackFrame();return a};Error.argument=function(a,c){var b="Sys.ArgumentException: "+(c?c:Sys.Res.argument);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentException",paramName:a});d.popStackFrame();return d};Error.argumentNull=function(a,c){var b="Sys.ArgumentNullException: "+(c?c:Sys.Res.argumentNull);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentNullException",paramName:a});d.popStackFrame();return d};Error.argumentOutOfRange=function(c,a,d){var b="Sys.ArgumentOutOfRangeException: "+(d?d:Sys.Res.argumentOutOfRange);if(c)b+="\n"+String.format(Sys.Res.paramName,c);if(typeof a!=="undefined"&&a!==null)b+="\n"+String.format(Sys.Res.actualValue,a);var e=Error.create(b,{name:"Sys.ArgumentOutOfRangeException",paramName:c,actualValue:a});e.popStackFrame();return e};Error.argumentType=function(d,c,b,e){var a="Sys.ArgumentTypeException: ";if(e)a+=e;else if(c&&b)a+=String.format(Sys.Res.argumentTypeWithTypes,c.getName(),b.getName());else a+=Sys.Res.argumentType;if(d)a+="\n"+String.format(Sys.Res.paramName,d);var f=Error.create(a,{name:"Sys.ArgumentTypeException",paramName:d,actualType:c,expectedType:b});f.popStackFrame();return f};Error.argumentUndefined=function(a,c){var b="Sys.ArgumentUndefinedException: "+(c?c:Sys.Res.argumentUndefined);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentUndefinedException",paramName:a});d.popStackFrame();return d};Error.format=function(a){var c="Sys.FormatException: "+(a?a:Sys.Res.format),b=Error.create(c,{name:"Sys.FormatException"});b.popStackFrame();return b};Error.invalidOperation=function(a){var c="Sys.InvalidOperationException: "+(a?a:Sys.Res.invalidOperation),b=Error.create(c,{name:"Sys.InvalidOperationException"});b.popStackFrame();return b};Error.notImplemented=function(a){var c="Sys.NotImplementedException: "+(a?a:Sys.Res.notImplemented),b=Error.create(c,{name:"Sys.NotImplementedException"});b.popStackFrame();return b};Error.parameterCount=function(a){var c="Sys.ParameterCountException: "+(a?a:Sys.Res.parameterCount),b=Error.create(c,{name:"Sys.ParameterCountException"});b.popStackFrame();return b};Error.prototype.popStackFrame=function(){if(typeof this.stack==="undefined"||this.stack===null||typeof this.fileName==="undefined"||this.fileName===null||typeof this.lineNumber==="undefined"||this.lineNumber===null)return;var a=this.stack.split("\n"),c=a[0],e=this.fileName+":"+this.lineNumber;while(typeof c!=="undefined"&&c!==null&&c.indexOf(e)===-1){a.shift();c=a[0]}var d=a[1];if(typeof d==="undefined"||d===null)return;var b=d.match(/@(.*):(\d+)$/);if(typeof b==="undefined"||b===null)return;this.fileName=b[1];this.lineNumber=parseInt(b[2]);a.shift();this.stack=a.join("\n")};Object.__typeName="Object";Object.__class=true;Object.getType=function(b){var a=b.constructor;if(!a||typeof a!=="function"||!a.__typeName||a.__typeName==="Object")return Object;return a};Object.getTypeName=function(a){return Object.getType(a).getName()};String.__typeName="String";String.__class=true;String.prototype.endsWith=function(a){return this.substr(this.length-a.length)===a};String.prototype.startsWith=function(a){return this.substr(0,a.length)===a};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.trimEnd=function(){return this.replace(/\s+$/,"")};String.prototype.trimStart=function(){return this.replace(/^\s+/,"")};String.format=function(){return String._toFormattedString(false,arguments)};String._toFormattedString=function(l,j){var c="",e=j[0];for(var a=0;true;){var f=e.indexOf("{",a),d=e.indexOf("}",a);if(f<0&&d<0){c+=e.slice(a);break}if(d>0&&(d<f||f<0)){c+=e.slice(a,d+1);a=d+2;continue}c+=e.slice(a,f);a=f+1;if(e.charAt(a)==="{"){c+="{";a++;continue}if(d<0)break;var h=e.substring(a,d),g=h.indexOf(":"),k=parseInt(g<0?h:h.substring(0,g),10)+1,i=g<0?"":h.substring(g+1),b=j[k];if(typeof b==="undefined"||b===null)b="";if(b.toFormattedString)c+=b.toFormattedString(i);else if(l&&b.localeFormat)c+=b.localeFormat(i);else if(b.format)c+=b.format(i);else c+=b.toString();a=d+1}return c};Boolean.__typeName="Boolean";Boolean.__class=true;Boolean.parse=function(b){var a=b.trim().toLowerCase();if(a==="false")return false;if(a==="true")return true};Date.__typeName="Date";Date.__class=true;Number.__typeName="Number";Number.__class=true;RegExp.__typeName="RegExp";RegExp.__class=true;if(!window)this.window=this;window.Type=Function;Type.prototype.callBaseMethod=function(a,d,b){var c=Sys._getBaseMethod(this,a,d);if(!b)return c.apply(a);else return c.apply(a,b)};Type.prototype.getBaseMethod=function(a,b){return Sys._getBaseMethod(this,a,b)};Type.prototype.getBaseType=function(){return typeof this.__baseType==="undefined"?null:this.__baseType};Type.prototype.getInterfaces=function(){var a=[],b=this;while(b){var c=b.__interfaces;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Array.contains(a,e))a[a.length]=e}b=b.__baseType}return a};Type.prototype.getName=function(){return typeof this.__typeName==="undefined"?"":this.__typeName};Type.prototype.implementsInterface=function(d){this.resolveInheritance();var c=d.getName(),a=this.__interfaceCache;if(a){var e=a[c];if(typeof e!=="undefined")return e}else a=this.__interfaceCache={};var b=this;while(b){var f=b.__interfaces;if(f)if(Array.indexOf(f,d)!==-1)return a[c]=true;b=b.__baseType}return a[c]=false};Type.prototype.inheritsFrom=function(b){this.resolveInheritance();var a=this.__baseType;while(a){if(a===b)return true;a=a.__baseType}return false};Type.prototype.initializeBase=function(a,b){this.resolveInheritance();if(this.__baseType)if(!b)this.__baseType.apply(a);else this.__baseType.apply(a,b);return a};Type.prototype.isImplementedBy=function(a){if(typeof a==="undefined"||a===null)return false;var b=Object.getType(a);return !!(b.implementsInterface&&b.implementsInterface(this))};Type.prototype.isInstanceOfType=function(a){return Sys._isInstanceOfType(this,a)};Type.prototype.registerClass=function(c,b,d){this.prototype.constructor=this;this.__typeName=c;this.__class=true;if(b){this.__baseType=b;this.__basePrototypePending=true}Sys.__upperCaseTypes[c.toUpperCase()]=this;if(d){this.__interfaces=[];for(var a=2,f=arguments.length;a<f;a++){var e=arguments[a];this.__interfaces.push(e)}}return this};Type.prototype.registerInterface=function(a){Sys.__upperCaseTypes[a.toUpperCase()]=this;this.prototype.constructor=this;this.__typeName=a;this.__interface=true;return this};Type.prototype.resolveInheritance=function(){if(this.__basePrototypePending){var b=this.__baseType;b.resolveInheritance();for(var a in b.prototype){var c=b.prototype[a];if(!this.prototype[a])this.prototype[a]=c}delete this.__basePrototypePending}};Type.getRootNamespaces=function(){return Array.clone(Sys.__rootNamespaces)};Type.isClass=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__class};Type.isInterface=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__interface};Type.isNamespace=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__namespace};Type.parse=function(typeName,ns){var fn;if(ns){fn=Sys.__upperCaseTypes[ns.getName().toUpperCase()+"."+typeName.toUpperCase()];return fn||null}if(!typeName)return null;if(!Type.__htClasses)Type.__htClasses={};fn=Type.__htClasses[typeName];if(!fn){fn=eval(typeName);Type.__htClasses[typeName]=fn}return fn};Type.registerNamespace=function(e){var d=window,c=e.split(".");for(var b=0;b<c.length;b++){var f=c[b],a=d[f];if(!a)a=d[f]={};if(!a.__namespace){if(b===0&&e!=="Sys")Sys.__rootNamespaces[Sys.__rootNamespaces.length]=a;a.__namespace=true;a.__typeName=c.slice(0,b+1).join(".");a.getName=function(){return this.__typeName}}d=a}};Type._checkDependency=function(c,a){var d=Type._registerScript._scripts,b=d?!!d[c]:false;if(typeof a!=="undefined"&&!b)throw Error.invalidOperation(String.format(Sys.Res.requiredScriptReferenceNotIncluded,a,c));return b};Type._registerScript=function(a,c){var b=Type._registerScript._scripts;if(!b)Type._registerScript._scripts=b={};if(b[a])throw Error.invalidOperation(String.format(Sys.Res.scriptAlreadyLoaded,a));b[a]=true;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Type._checkDependency(e))throw Error.invalidOperation(String.format(Sys.Res.scriptDependencyNotFound,a,e))}};Type.registerNamespace("Sys");Sys.__upperCaseTypes={};Sys.__rootNamespaces=[Sys];Sys._isInstanceOfType=function(c,b){if(typeof b==="undefined"||b===null)return false;if(b instanceof c)return true;var a=Object.getType(b);return !!(a===c)||a.inheritsFrom&&a.inheritsFrom(c)||a.implementsInterface&&a.implementsInterface(c)};Sys._getBaseMethod=function(d,e,c){var b=d.getBaseType();if(b){var a=b.prototype[c];return a instanceof Function?a:null}return null};Sys._isDomElement=function(a){var c=false;if(typeof a.nodeType!=="number"){var b=a.ownerDocument||a.document||a;if(b!=a){var d=b.defaultView||b.parentWindow;c=d!=a}else c=typeof b.body==="undefined"}return !c};Array.__typeName="Array";Array.__class=true;Array.add=Array.enqueue=function(a,b){a[a.length]=b};Array.addRange=function(a,b){a.push.apply(a,b)};Array.clear=function(a){a.length=0};Array.clone=function(a){if(a.length===1)return [a[0]];else return Array.apply(null,a)};Array.contains=function(a,b){return Sys._indexOf(a,b)>=0};Array.dequeue=function(a){return a.shift()};Array.forEach=function(b,e,d){for(var a=0,f=b.length;a<f;a++){var c=b[a];if(typeof c!=="undefined")e.call(d,c,a,b)}};Array.indexOf=function(a,c,b){return Sys._indexOf(a,c,b)};Array.insert=function(a,b,c){a.splice(b,0,c)};Array.parse=function(value){if(!value)return [];return eval(value)};Array.remove=function(b,c){var a=Sys._indexOf(b,c);if(a>=0)b.splice(a,1);return a>=0};Array.removeAt=function(a,b){a.splice(b,1)};Sys._indexOf=function(d,e,a){if(typeof e==="undefined")return -1;var c=d.length;if(c!==0){a=a-0;if(isNaN(a))a=0;else{if(isFinite(a))a=a-a%1;if(a<0)a=Math.max(0,c+a)}for(var b=a;b<c;b++)if(typeof d[b]!=="undefined"&&d[b]===e)return b}return -1};Type._registerScript._scripts={"MicrosoftAjaxCore.js":true,"MicrosoftAjaxGlobalization.js":true,"MicrosoftAjaxSerialization.js":true,"MicrosoftAjaxComponentModel.js":true,"MicrosoftAjaxHistory.js":true,"MicrosoftAjaxNetwork.js":true,"MicrosoftAjaxWebServices.js":true};Sys.IDisposable=function(){};Sys.IDisposable.prototype={};Sys.IDisposable.registerInterface("Sys.IDisposable");Sys.StringBuilder=function(a){this._parts=typeof a!=="undefined"&&a!==null&&a!==""?[a.toString()]:[];this._value={};this._len=0};Sys.StringBuilder.prototype={append:function(a){this._parts[this._parts.length]=a},appendLine:function(a){this._parts[this._parts.length]=typeof a==="undefined"||a===null||a===""?"\r\n":a+"\r\n"},clear:function(){this._parts=[];this._value={};this._len=0},isEmpty:function(){if(this._parts.length===0)return true;return this.toString()===""},toString:function(a){a=a||"";var b=this._parts;if(this._len!==b.length){this._value={};this._len=b.length}var d=this._value;if(typeof d[a]==="undefined"){if(a!=="")for(var c=0;c<b.length;)if(typeof b[c]==="undefined"||b[c]===""||b[c]===null)b.splice(c,1);else c++;d[a]=this._parts.join(a)}return d[a]}};Sys.StringBuilder.registerClass("Sys.StringBuilder");Sys.Browser={};Sys.Browser.InternetExplorer={};Sys.Browser.Firefox={};Sys.Browser.Safari={};Sys.Browser.Opera={};Sys.Browser.agent=null;Sys.Browser.hasDebuggerStatement=false;Sys.Browser.name=navigator.appName;Sys.Browser.version=parseFloat(navigator.appVersion);Sys.Browser.documentMode=0;if(navigator.userAgent.indexOf(" MSIE ")>-1){Sys.Browser.agent=Sys.Browser.InternetExplorer;Sys.Browser.version=parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);if(Sys.Browser.version>=8)if(document.documentMode>=7)Sys.Browser.documentMode=document.documentMode;Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" Firefox/")>-1){Sys.Browser.agent=Sys.Browser.Firefox;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]);Sys.Browser.name="Firefox";Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" AppleWebKit/")>-1){Sys.Browser.agent=Sys.Browser.Safari;Sys.Browser.version=parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]);Sys.Browser.name="Safari"}else if(navigator.userAgent.indexOf("Opera/")>-1)Sys.Browser.agent=Sys.Browser.Opera;Sys.EventArgs=function(){};Sys.EventArgs.registerClass("Sys.EventArgs");Sys.EventArgs.Empty=new Sys.EventArgs;Sys.CancelEventArgs=function(){Sys.CancelEventArgs.initializeBase(this);this._cancel=false};Sys.CancelEventArgs.prototype={get_cancel:function(){return this._cancel},set_cancel:function(a){this._cancel=a}};Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs",Sys.EventArgs);Type.registerNamespace("Sys.UI");Sys._Debug=function(){};Sys._Debug.prototype={_appendConsole:function(a){if(typeof Debug!=="undefined"&&Debug.writeln)Debug.writeln(a);if(window.console&&window.console.log)window.console.log(a);if(window.opera)window.opera.postError(a);if(window.debugService)window.debugService.trace(a)},_appendTrace:function(b){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value+=b+"\n"},assert:function(c,a,b){if(!c){a=b&&this.assert.caller?String.format(Sys.Res.assertFailedCaller,a,this.assert.caller):String.format(Sys.Res.assertFailed,a);if(confirm(String.format(Sys.Res.breakIntoDebugger,a)))this.fail(a)}},clearTrace:function(){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value=""},fail:function(message){this._appendConsole(message);if(Sys.Browser.hasDebuggerStatement)eval("debugger")},trace:function(a){this._appendConsole(a);this._appendTrace(a)},traceDump:function(a,b){var c=this._traceDump(a,b,true)},_traceDump:function(a,c,f,b,d){c=c?c:"traceDump";b=b?b:"";if(a===null){this.trace(b+c+": null");return}switch(typeof a){case "undefined":this.trace(b+c+": Undefined");break;case "number":case "string":case "boolean":this.trace(b+c+": "+a);break;default:if(Date.isInstanceOfType(a)||RegExp.isInstanceOfType(a)){this.trace(b+c+": "+a.toString());break}if(!d)d=[];else if(Array.contains(d,a)){this.trace(b+c+": ...");return}Array.add(d,a);if(a==window||a===document||window.HTMLElement&&a instanceof HTMLElement||typeof a.nodeName==="string"){var k=a.tagName?a.tagName:"DomElement";if(a.id)k+=" - "+a.id;this.trace(b+c+" {"+k+"}")}else{var i=Object.getTypeName(a);this.trace(b+c+(typeof i==="string"?" {"+i+"}":""));if(b===""||f){b+="    ";var e,j,l,g,h;if(Array.isInstanceOfType(a)){j=a.length;for(e=0;e<j;e++)this._traceDump(a[e],"["+e+"]",f,b,d)}else for(g in a){h=a[g];if(!Function.isInstanceOfType(h))this._traceDump(h,g,f,b,d)}}}Array.remove(d,a)}}};Sys._Debug.registerClass("Sys._Debug");Sys.Debug=new Sys._Debug;Sys.Debug.isDebug=false;function Sys$Enum$parse(c,e){var a,b,i;if(e){a=this.__lowerCaseValues;if(!a){this.__lowerCaseValues=a={};var g=this.prototype;for(var f in g)a[f.toLowerCase()]=g[f]}}else a=this.prototype;if(!this.__flags){i=e?c.toLowerCase():c;b=a[i.trim()];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c,this.__typeName));return b}else{var h=(e?c.toLowerCase():c).split(","),j=0;for(var d=h.length-1;d>=0;d--){var k=h[d].trim();b=a[k];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c.split(",")[d].trim(),this.__typeName));j|=b}return j}}function Sys$Enum$toString(c){if(typeof c==="undefined"||c===null)return this.__string;var d=this.prototype,a;if(!this.__flags||c===0){for(a in d)if(d[a]===c)return a}else{var b=this.__sortedValues;if(!b){b=[];for(a in d)b[b.length]={key:a,value:d[a]};b.sort(function(a,b){return a.value-b.value});this.__sortedValues=b}var e=[],g=c;for(a=b.length-1;a>=0;a--){var h=b[a],f=h.value;if(f===0)continue;if((f&c)===f){e[e.length]=h.key;g-=f;if(g===0)break}}if(e.length&&g===0)return e.reverse().join(", ")}return ""}Type.prototype.registerEnum=function(b,c){Sys.__upperCaseTypes[b.toUpperCase()]=this;for(var a in this.prototype)this[a]=this.prototype[a];this.__typeName=b;this.parse=Sys$Enum$parse;this.__string=this.toString();this.toString=Sys$Enum$toString;this.__flags=c;this.__enum=true};Type.isEnum=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__enum};Type.isFlags=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__flags};Sys.CollectionChange=function(e,a,c,b,d){this.action=e;if(a)if(!(a instanceof Array))a=[a];this.newItems=a||null;if(typeof c!=="number")c=-1;this.newStartingIndex=c;if(b)if(!(b instanceof Array))b=[b];this.oldItems=b||null;if(typeof d!=="number")d=-1;this.oldStartingIndex=d};Sys.CollectionChange.registerClass("Sys.CollectionChange");Sys.NotifyCollectionChangedAction=function(){throw Error.notImplemented()};Sys.NotifyCollectionChangedAction.prototype={add:0,remove:1,reset:2};Sys.NotifyCollectionChangedAction.registerEnum("Sys.NotifyCollectionChangedAction");Sys.NotifyCollectionChangedEventArgs=function(a){this._changes=a;Sys.NotifyCollectionChangedEventArgs.initializeBase(this)};Sys.NotifyCollectionChangedEventArgs.prototype={get_changes:function(){return this._changes||[]}};Sys.NotifyCollectionChangedEventArgs.registerClass("Sys.NotifyCollectionChangedEventArgs",Sys.EventArgs);Sys.Observer=function(){};Sys.Observer.registerClass("Sys.Observer");Sys.Observer.makeObservable=function(a){var c=a instanceof Array,b=Sys.Observer;if(a.setValue===b._observeMethods.setValue)return a;b._addMethods(a,b._observeMethods);if(c)b._addMethods(a,b._arrayMethods);return a};Sys.Observer._addMethods=function(c,b){for(var a in b)c[a]=b[a]};Sys.Observer._addEventHandler=function(c,a,b){Sys.Observer._getContext(c,true).events._addHandler(a,b)};Sys.Observer.addEventHandler=function(c,a,b){Sys.Observer._addEventHandler(c,a,b)};Sys.Observer._removeEventHandler=function(c,a,b){Sys.Observer._getContext(c,true).events._removeHandler(a,b)};Sys.Observer.removeEventHandler=function(c,a,b){Sys.Observer._removeEventHandler(c,a,b)};Sys.Observer.raiseEvent=function(b,e,d){var c=Sys.Observer._getContext(b);if(!c)return;var a=c.events.getHandler(e);if(a)a(b,d)};Sys.Observer.addPropertyChanged=function(b,a){Sys.Observer._addEventHandler(b,"propertyChanged",a)};Sys.Observer.removePropertyChanged=function(b,a){Sys.Observer._removeEventHandler(b,"propertyChanged",a)};Sys.Observer.beginUpdate=function(a){Sys.Observer._getContext(a,true).updating=true};Sys.Observer.endUpdate=function(b){var a=Sys.Observer._getContext(b);if(!a||!a.updating)return;a.updating=false;var d=a.dirty;a.dirty=false;if(d){if(b instanceof Array){var c=a.changes;a.changes=null;Sys.Observer.raiseCollectionChanged(b,c)}Sys.Observer.raisePropertyChanged(b,"")}};Sys.Observer.isUpdating=function(b){var a=Sys.Observer._getContext(b);return a?a.updating:false};Sys.Observer._setValue=function(a,j,g){var b,f,k=a,d=j.split(".");for(var i=0,m=d.length-1;i<m;i++){var l=d[i];b=a["get_"+l];if(typeof b==="function")a=b.call(a);else a=a[l];var n=typeof a;if(a===null||n==="undefined")throw Error.invalidOperation(String.format(Sys.Res.nullReferenceInPath,j))}var e,c=d[m];b=a["get_"+c];f=a["set_"+c];if(typeof b==="function")e=b.call(a);else e=a[c];if(typeof f==="function")f.call(a,g);else a[c]=g;if(e!==g){var h=Sys.Observer._getContext(k);if(h&&h.updating){h.dirty=true;return}Sys.Observer.raisePropertyChanged(k,d[0])}};Sys.Observer.setValue=function(b,a,c){Sys.Observer._setValue(b,a,c)};Sys.Observer.raisePropertyChanged=function(b,a){Sys.Observer.raiseEvent(b,"propertyChanged",new Sys.PropertyChangedEventArgs(a))};Sys.Observer.addCollectionChanged=function(b,a){Sys.Observer._addEventHandler(b,"collectionChanged",a)};Sys.Observer.removeCollectionChanged=function(b,a){Sys.Observer._removeEventHandler(b,"collectionChanged",a)};Sys.Observer._collectionChange=function(d,c){var a=Sys.Observer._getContext(d);if(a&&a.updating){a.dirty=true;var b=a.changes;if(!b)a.changes=b=[c];else b.push(c)}else{Sys.Observer.raiseCollectionChanged(d,[c]);Sys.Observer.raisePropertyChanged(d,"length")}};Sys.Observer.add=function(a,b){var c=new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,[b],a.length);Array.add(a,b);Sys.Observer._collectionChange(a,c)};Sys.Observer.addRange=function(a,b){var c=new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,b,a.length);Array.addRange(a,b);Sys.Observer._collectionChange(a,c)};Sys.Observer.clear=function(a){var b=Array.clone(a);Array.clear(a);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.reset,null,-1,b,0))};Sys.Observer.insert=function(a,b,c){Array.insert(a,b,c);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,[c],b))};Sys.Observer.remove=function(a,b){var c=Array.indexOf(a,b);if(c!==-1){Array.remove(a,b);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove,null,-1,[b],c));return true}return false};Sys.Observer.removeAt=function(b,a){if(a>-1&&a<b.length){var c=b[a];Array.removeAt(b,a);Sys.Observer._collectionChange(b,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove,null,-1,[c],a))}};Sys.Observer.raiseCollectionChanged=function(b,a){Sys.Observer.raiseEvent(b,"collectionChanged",new Sys.NotifyCollectionChangedEventArgs(a))};Sys.Observer._observeMethods={add_propertyChanged:function(a){Sys.Observer._addEventHandler(this,"propertyChanged",a)},remove_propertyChanged:function(a){Sys.Observer._removeEventHandler(this,"propertyChanged",a)},addEventHandler:function(a,b){Sys.Observer._addEventHandler(this,a,b)},removeEventHandler:function(a,b){Sys.Observer._removeEventHandler(this,a,b)},get_isUpdating:function(){return Sys.Observer.isUpdating(this)},beginUpdate:function(){Sys.Observer.beginUpdate(this)},endUpdate:function(){Sys.Observer.endUpdate(this)},setValue:function(b,a){Sys.Observer._setValue(this,b,a)},raiseEvent:function(b,a){Sys.Observer.raiseEvent(this,b,a)},raisePropertyChanged:function(a){Sys.Observer.raiseEvent(this,"propertyChanged",new Sys.PropertyChangedEventArgs(a))}};Sys.Observer._arrayMethods={add_collectionChanged:function(a){Sys.Observer._addEventHandler(this,"collectionChanged",a)},remove_collectionChanged:function(a){Sys.Observer._removeEventHandler(this,"collectionChanged",a)},add:function(a){Sys.Observer.add(this,a)},addRange:function(a){Sys.Observer.addRange(this,a)},clear:function(){Sys.Observer.clear(this)},insert:function(a,b){Sys.Observer.insert(this,a,b)},remove:function(a){return Sys.Observer.remove(this,a)},removeAt:function(a){Sys.Observer.removeAt(this,a)},raiseCollectionChanged:function(a){Sys.Observer.raiseEvent(this,"collectionChanged",new Sys.NotifyCollectionChangedEventArgs(a))}};Sys.Observer._getContext=function(b,c){var a=b._observerContext;if(a)return a();if(c)return (b._observerContext=Sys.Observer._createContext())();return null};Sys.Observer._createContext=function(){var a={events:new Sys.EventHandlerList};return function(){return a}};Date._appendPreOrPostMatch=function(e,b){var d=0,a=false;for(var c=0,g=e.length;c<g;c++){var f=e.charAt(c);switch(f){case "'":if(a)b.append("'");else d++;a=false;break;case "\\":if(a)b.append("\\");a=!a;break;default:b.append(f);a=false}}return d};Date._expandFormat=function(a,b){if(!b)b="F";var c=b.length;if(c===1)switch(b){case "d":return a.ShortDatePattern;case "D":return a.LongDatePattern;case "t":return a.ShortTimePattern;case "T":return a.LongTimePattern;case "f":return a.LongDatePattern+" "+a.ShortTimePattern;case "F":return a.FullDateTimePattern;case "M":case "m":return a.MonthDayPattern;case "s":return a.SortableDateTimePattern;case "Y":case "y":return a.YearMonthPattern;default:throw Error.format(Sys.Res.formatInvalidString)}else if(c===2&&b.charAt(0)==="%")b=b.charAt(1);return b};Date._expandYear=function(c,a){var d=new Date,e=Date._getEra(d);if(a<100){var b=Date._getEraYear(d,c,e);a+=b-b%100;if(a>c.Calendar.TwoDigitYearMax)a-=100}return a};Date._getEra=function(e,c){if(!c)return 0;var b,d=e.getTime();for(var a=0,f=c.length;a<f;a+=4){b=c[a+2];if(b===null||d>=b)return a}return 0};Date._getEraYear=function(d,b,e,c){var a=d.getFullYear();if(!c&&b.eras)a-=b.eras[e+3];return a};Date._getParseRegExp=function(b,e){if(!b._parseRegExp)b._parseRegExp={};else if(b._parseRegExp[e])return b._parseRegExp[e];var c=Date._expandFormat(b,e);c=c.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1");var a=new Sys.StringBuilder("^"),j=[],f=0,i=0,h=Date._getTokenRegExp(),d;while((d=h.exec(c))!==null){var l=c.slice(f,d.index);f=h.lastIndex;i+=Date._appendPreOrPostMatch(l,a);if(i%2===1){a.append(d[0]);continue}switch(d[0]){case "dddd":case "ddd":case "MMMM":case "MMM":case "gg":case "g":a.append("(\\D+)");break;case "tt":case "t":a.append("(\\D*)");break;case "yyyy":a.append("(\\d{4})");break;case "fff":a.append("(\\d{3})");break;case "ff":a.append("(\\d{2})");break;case "f":a.append("(\\d)");break;case "dd":case "d":case "MM":case "M":case "yy":case "y":case "HH":case "H":case "hh":case "h":case "mm":case "m":case "ss":case "s":a.append("(\\d\\d?)");break;case "zzz":a.append("([+-]?\\d\\d?:\\d{2})");break;case "zz":case "z":a.append("([+-]?\\d\\d?)");break;case "/":a.append("(\\"+b.DateSeparator+")")}Array.add(j,d[0])}Date._appendPreOrPostMatch(c.slice(f),a);a.append("$");var k=a.toString().replace(/\s+/g,"\\s+"),g={"regExp":k,"groups":j};b._parseRegExp[e]=g;return g};Date._getTokenRegExp=function(){return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g};Date.parseLocale=function(a){return Date._parse(a,Sys.CultureInfo.CurrentCulture,arguments)};Date.parseInvariant=function(a){return Date._parse(a,Sys.CultureInfo.InvariantCulture,arguments)};Date._parse=function(h,d,i){var a,c,b,f,e,g=false;for(a=1,c=i.length;a<c;a++){f=i[a];if(f){g=true;b=Date._parseExact(h,f,d);if(b)return b}}if(!g){e=d._getDateTimeFormats();for(a=0,c=e.length;a<c;a++){b=Date._parseExact(h,e[a],d);if(b)return b}}return null};Date._parseExact=function(w,D,k){w=w.trim();var g=k.dateTimeFormat,A=Date._getParseRegExp(g,D),C=(new RegExp(A.regExp)).exec(w);if(C===null)return null;var B=A.groups,x=null,e=null,c=null,j=null,i=null,d=0,h,p=0,q=0,f=0,l=null,v=false;for(var s=0,E=B.length;s<E;s++){var a=C[s+1];if(a)switch(B[s]){case "dd":case "d":j=parseInt(a,10);if(j<1||j>31)return null;break;case "MMMM":c=k._getMonthIndex(a);if(c<0||c>11)return null;break;case "MMM":c=k._getAbbrMonthIndex(a);if(c<0||c>11)return null;break;case "M":case "MM":c=parseInt(a,10)-1;if(c<0||c>11)return null;break;case "y":case "yy":e=Date._expandYear(g,parseInt(a,10));if(e<0||e>9999)return null;break;case "yyyy":e=parseInt(a,10);if(e<0||e>9999)return null;break;case "h":case "hh":d=parseInt(a,10);if(d===12)d=0;if(d<0||d>11)return null;break;case "H":case "HH":d=parseInt(a,10);if(d<0||d>23)return null;break;case "m":case "mm":p=parseInt(a,10);if(p<0||p>59)return null;break;case "s":case "ss":q=parseInt(a,10);if(q<0||q>59)return null;break;case "tt":case "t":var z=a.toUpperCase();v=z===g.PMDesignator.toUpperCase();if(!v&&z!==g.AMDesignator.toUpperCase())return null;break;case "f":f=parseInt(a,10)*100;if(f<0||f>999)return null;break;case "ff":f=parseInt(a,10)*10;if(f<0||f>999)return null;break;case "fff":f=parseInt(a,10);if(f<0||f>999)return null;break;case "dddd":i=k._getDayIndex(a);if(i<0||i>6)return null;break;case "ddd":i=k._getAbbrDayIndex(a);if(i<0||i>6)return null;break;case "zzz":var u=a.split(/:/);if(u.length!==2)return null;h=parseInt(u[0],10);if(h<-12||h>13)return null;var m=parseInt(u[1],10);if(m<0||m>59)return null;l=h*60+(a.startsWith("-")?-m:m);break;case "z":case "zz":h=parseInt(a,10);if(h<-12||h>13)return null;l=h*60;break;case "g":case "gg":var o=a;if(!o||!g.eras)return null;o=o.toLowerCase().trim();for(var r=0,F=g.eras.length;r<F;r+=4)if(o===g.eras[r+1].toLowerCase()){x=r;break}if(x===null)return null}}var b=new Date,t,n=g.Calendar.convert;if(n)t=n.fromGregorian(b)[0];else t=b.getFullYear();if(e===null)e=t;else if(g.eras)e+=g.eras[(x||0)+3];if(c===null)c=0;if(j===null)j=1;if(n){b=n.toGregorian(e,c,j);if(b===null)return null}else{b.setFullYear(e,c,j);if(b.getDate()!==j)return null;if(i!==null&&b.getDay()!==i)return null}if(v&&d<12)d+=12;b.setHours(d,p,q,f);if(l!==null){var y=b.getMinutes()-(l+b.getTimezoneOffset());b.setHours(b.getHours()+parseInt(y/60,10),y%60)}return b};Date.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Date.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Date.prototype._toFormattedString=function(e,j){var b=j.dateTimeFormat,n=b.Calendar.convert;if(!e||!e.length||e==="i")if(j&&j.name.length)if(n)return this._toFormattedString(b.FullDateTimePattern,j);else{var r=new Date(this.getTime()),x=Date._getEra(this,b.eras);r.setFullYear(Date._getEraYear(this,b,x));return r.toLocaleString()}else return this.toString();var l=b.eras,k=e==="s";e=Date._expandFormat(b,e);var a=new Sys.StringBuilder,c;function d(a){if(a<10)return "0"+a;return a.toString()}function m(a){if(a<10)return "00"+a;if(a<100)return "0"+a;return a.toString()}function v(a){if(a<10)return "000"+a;else if(a<100)return "00"+a;else if(a<1000)return "0"+a;return a.toString()}var h,p,t=/([^d]|^)(d|dd)([^d]|$)/g;function s(){if(h||p)return h;h=t.test(e);p=true;return h}var q=0,o=Date._getTokenRegExp(),f;if(!k&&n)f=n.fromGregorian(this);for(;true;){var w=o.lastIndex,i=o.exec(e),u=e.slice(w,i?i.index:e.length);q+=Date._appendPreOrPostMatch(u,a);if(!i)break;if(q%2===1){a.append(i[0]);continue}function g(a,b){if(f)return f[b];switch(b){case 0:return a.getFullYear();case 1:return a.getMonth();case 2:return a.getDate()}}switch(i[0]){case "dddd":a.append(b.DayNames[this.getDay()]);break;case "ddd":a.append(b.AbbreviatedDayNames[this.getDay()]);break;case "dd":h=true;a.append(d(g(this,2)));break;case "d":h=true;a.append(g(this,2));break;case "MMMM":a.append(b.MonthGenitiveNames&&s()?b.MonthGenitiveNames[g(this,1)]:b.MonthNames[g(this,1)]);break;case "MMM":a.append(b.AbbreviatedMonthGenitiveNames&&s()?b.AbbreviatedMonthGenitiveNames[g(this,1)]:b.AbbreviatedMonthNames[g(this,1)]);break;case "MM":a.append(d(g(this,1)+1));break;case "M":a.append(g(this,1)+1);break;case "yyyy":a.append(v(f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k)));break;case "yy":a.append(d((f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k))%100));break;case "y":a.append((f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k))%100);break;case "hh":c=this.getHours()%12;if(c===0)c=12;a.append(d(c));break;case "h":c=this.getHours()%12;if(c===0)c=12;a.append(c);break;case "HH":a.append(d(this.getHours()));break;case "H":a.append(this.getHours());break;case "mm":a.append(d(this.getMinutes()));break;case "m":a.append(this.getMinutes());break;case "ss":a.append(d(this.getSeconds()));break;case "s":a.append(this.getSeconds());break;case "tt":a.append(this.getHours()<12?b.AMDesignator:b.PMDesignator);break;case "t":a.append((this.getHours()<12?b.AMDesignator:b.PMDesignator).charAt(0));break;case "f":a.append(m(this.getMilliseconds()).charAt(0));break;case "ff":a.append(m(this.getMilliseconds()).substr(0,2));break;case "fff":a.append(m(this.getMilliseconds()));break;case "z":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+Math.floor(Math.abs(c)));break;case "zz":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+d(Math.floor(Math.abs(c))));break;case "zzz":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+d(Math.floor(Math.abs(c)))+":"+d(Math.abs(this.getTimezoneOffset()%60)));break;case "g":case "gg":if(b.eras)a.append(b.eras[Date._getEra(this,l)+1]);break;case "/":a.append(b.DateSeparator)}}return a.toString()};String.localeFormat=function(){return String._toFormattedString(true,arguments)};Number.parseLocale=function(a){return Number._parse(a,Sys.CultureInfo.CurrentCulture)};Number.parseInvariant=function(a){return Number._parse(a,Sys.CultureInfo.InvariantCulture)};Number._parse=function(b,o){b=b.trim();if(b.match(/^[+-]?infinity$/i))return parseFloat(b);if(b.match(/^0x[a-f0-9]+$/i))return parseInt(b);var a=o.numberFormat,g=Number._parseNumberNegativePattern(b,a,a.NumberNegativePattern),h=g[0],e=g[1];if(h===""&&a.NumberNegativePattern!==1){g=Number._parseNumberNegativePattern(b,a,1);h=g[0];e=g[1]}if(h==="")h="+";var j,d,f=e.indexOf("e");if(f<0)f=e.indexOf("E");if(f<0){d=e;j=null}else{d=e.substr(0,f);j=e.substr(f+1)}var c,k,m=d.indexOf(a.NumberDecimalSeparator);if(m<0){c=d;k=null}else{c=d.substr(0,m);k=d.substr(m+a.NumberDecimalSeparator.length)}c=c.split(a.NumberGroupSeparator).join("");var n=a.NumberGroupSeparator.replace(/\u00A0/g," ");if(a.NumberGroupSeparator!==n)c=c.split(n).join("");var l=h+c;if(k!==null)l+="."+k;if(j!==null){var i=Number._parseNumberNegativePattern(j,a,1);if(i[0]==="")i[0]="+";l+="e"+i[0]+i[1]}if(l.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/))return parseFloat(l);return Number.NaN};Number._parseNumberNegativePattern=function(a,d,e){var b=d.NegativeSign,c=d.PositiveSign;switch(e){case 4:b=" "+b;c=" "+c;case 3:if(a.endsWith(b))return ["-",a.substr(0,a.length-b.length)];else if(a.endsWith(c))return ["+",a.substr(0,a.length-c.length)];break;case 2:b+=" ";c+=" ";case 1:if(a.startsWith(b))return ["-",a.substr(b.length)];else if(a.startsWith(c))return ["+",a.substr(c.length)];break;case 0:if(a.startsWith("(")&&a.endsWith(")"))return ["-",a.substr(1,a.length-2)]}return ["",a]};Number.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Number.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Number.prototype._toFormattedString=function(e,j){if(!e||e.length===0||e==="i")if(j&&j.name.length>0)return this.toLocaleString();else return this.toString();var o=["n %","n%","%n"],n=["-n %","-n%","-%n"],p=["(n)","-n","- n","n-","n -"],m=["$n","n$","$ n","n $"],l=["($n)","-$n","$-n","$n-","(n$)","-n$","n-$","n$-","-n $","-$ n","n $-","$ n-","$ -n","n- $","($ n)","(n $)"];function g(a,c,d){for(var b=a.length;b<c;b++)a=d?"0"+a:a+"0";return a}function i(j,i,l,n,p){var h=l[0],k=1,o=Math.pow(10,i),m=Math.round(j*o)/o;if(!isFinite(m))m=j;j=m;var b=j.toString(),a="",c,e=b.split(/e/i);b=e[0];c=e.length>1?parseInt(e[1]):0;e=b.split(".");b=e[0];a=e.length>1?e[1]:"";var q;if(c>0){a=g(a,c,false);b+=a.slice(0,c);a=a.substr(c)}else if(c<0){c=-c;b=g(b,c+1,true);a=b.slice(-c,b.length)+a;b=b.slice(0,-c)}if(i>0){if(a.length>i)a=a.slice(0,i);else a=g(a,i,false);a=p+a}else a="";var d=b.length-1,f="";while(d>=0){if(h===0||h>d)if(f.length>0)return b.slice(0,d+1)+n+f+a;else return b.slice(0,d+1)+a;if(f.length>0)f=b.slice(d-h+1,d+1)+n+f;else f=b.slice(d-h+1,d+1);d-=h;if(k<l.length){h=l[k];k++}}return b.slice(0,d+1)+n+f+a}var a=j.numberFormat,d=Math.abs(this);if(!e)e="D";var b=-1;if(e.length>1)b=parseInt(e.slice(1),10);var c;switch(e.charAt(0)){case "d":case "D":c="n";if(b!==-1)d=g(""+d,b,true);if(this<0)d=-d;break;case "c":case "C":if(this<0)c=l[a.CurrencyNegativePattern];else c=m[a.CurrencyPositivePattern];if(b===-1)b=a.CurrencyDecimalDigits;d=i(Math.abs(this),b,a.CurrencyGroupSizes,a.CurrencyGroupSeparator,a.CurrencyDecimalSeparator);break;case "n":case "N":if(this<0)c=p[a.NumberNegativePattern];else c="n";if(b===-1)b=a.NumberDecimalDigits;d=i(Math.abs(this),b,a.NumberGroupSizes,a.NumberGroupSeparator,a.NumberDecimalSeparator);break;case "p":case "P":if(this<0)c=n[a.PercentNegativePattern];else c=o[a.PercentPositivePattern];if(b===-1)b=a.PercentDecimalDigits;d=i(Math.abs(this)*100,b,a.PercentGroupSizes,a.PercentGroupSeparator,a.PercentDecimalSeparator);break;default:throw Error.format(Sys.Res.formatBadFormatSpecifier)}var k=/n|\$|-|%/g,f="";for(;true;){var q=k.lastIndex,h=k.exec(c);f+=c.slice(q,h?h.index:c.length);if(!h)break;switch(h[0]){case "n":f+=d;break;case "$":f+=a.CurrencySymbol;break;case "-":if(/[1-9]/.test(d))f+=a.NegativeSign;break;case "%":f+=a.PercentSymbol}}return f};Sys.CultureInfo=function(c,b,a){this.name=c;this.numberFormat=b;this.dateTimeFormat=a};Sys.CultureInfo.prototype={_getDateTimeFormats:function(){if(!this._dateTimeFormats){var a=this.dateTimeFormat;this._dateTimeFormats=[a.MonthDayPattern,a.YearMonthPattern,a.ShortDatePattern,a.ShortTimePattern,a.LongDatePattern,a.LongTimePattern,a.FullDateTimePattern,a.RFC1123Pattern,a.SortableDateTimePattern,a.UniversalSortableDateTimePattern]}return this._dateTimeFormats},_getIndex:function(c,d,e){var b=this._toUpper(c),a=Array.indexOf(d,b);if(a===-1)a=Array.indexOf(e,b);return a},_getMonthIndex:function(a){if(!this._upperMonths){this._upperMonths=this._toUpperArray(this.dateTimeFormat.MonthNames);this._upperMonthsGenitive=this._toUpperArray(this.dateTimeFormat.MonthGenitiveNames)}return this._getIndex(a,this._upperMonths,this._upperMonthsGenitive)},_getAbbrMonthIndex:function(a){if(!this._upperAbbrMonths){this._upperAbbrMonths=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);this._upperAbbrMonthsGenitive=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthGenitiveNames)}return this._getIndex(a,this._upperAbbrMonths,this._upperAbbrMonthsGenitive)},_getDayIndex:function(a){if(!this._upperDays)this._upperDays=this._toUpperArray(this.dateTimeFormat.DayNames);return Array.indexOf(this._upperDays,this._toUpper(a))},_getAbbrDayIndex:function(a){if(!this._upperAbbrDays)this._upperAbbrDays=this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames);return Array.indexOf(this._upperAbbrDays,this._toUpper(a))},_toUpperArray:function(c){var b=[];for(var a=0,d=c.length;a<d;a++)b[a]=this._toUpper(c[a]);return b},_toUpper:function(a){return a.split("\u00a0").join(" ").toUpperCase()}};Sys.CultureInfo.registerClass("Sys.CultureInfo");Sys.CultureInfo._parse=function(a){var b=a.dateTimeFormat;if(b&&!b.eras)b.eras=a.eras;return new Sys.CultureInfo(a.name,a.numberFormat,b)};Sys.CultureInfo.InvariantCulture=Sys.CultureInfo._parse({"name":"","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":true,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"\u00a4","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":true},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, dd MMMM yyyy HH:mm:ss","LongDatePattern":"dddd, dd MMMM yyyy","LongTimePattern":"HH:mm:ss","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'","ShortDatePattern":"MM/dd/yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy'-'MM'-'dd'T'HH':'mm':'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy'-'MM'-'dd HH':'mm':'ss'Z'","YearMonthPattern":"yyyy MMMM","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":true,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]},"eras":[1,"A.D.",null,0]});if(typeof __cultureInfo==="object"){Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse(__cultureInfo);delete __cultureInfo}else Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse({"name":"en-US","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"$","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, MMMM dd, yyyy h:mm:ss tt","LongDatePattern":"dddd, MMMM dd, yyyy","LongTimePattern":"h:mm:ss tt","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'","ShortDatePattern":"M/d/yyyy","ShortTimePattern":"h:mm tt","SortableDateTimePattern":"yyyy'-'MM'-'dd'T'HH':'mm':'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy'-'MM'-'dd HH':'mm':'ss'Z'","YearMonthPattern":"MMMM, yyyy","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":false,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]},"eras":[1,"A.D.",null,0]});Type.registerNamespace("Sys.Serialization");Sys.Serialization.JavaScriptSerializer=function(){};Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer");Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs=[];Sys.Serialization.JavaScriptSerializer._charsToEscape=[];Sys.Serialization.JavaScriptSerializer._dateRegEx=new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars={};Sys.Serialization.JavaScriptSerializer._escapeRegEx=new RegExp('["\\\\\\x00-\\x1F]',"i");Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal=new RegExp('["\\\\\\x00-\\x1F]',"g");Sys.Serialization.JavaScriptSerializer._jsonRegEx=new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]","g");Sys.Serialization.JavaScriptSerializer._jsonStringRegEx=new RegExp('"(\\\\.|[^"\\\\])*"',"g");Sys.Serialization.JavaScriptSerializer._serverTypeFieldName="__type";Sys.Serialization.JavaScriptSerializer._init=function(){var c=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000b","\\f","\\r","\\u000e","\\u000f","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001a","\\u001b","\\u001c","\\u001d","\\u001e","\\u001f"];Sys.Serialization.JavaScriptSerializer._charsToEscape[0]="\\";Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"]=new RegExp("\\\\","g");Sys.Serialization.JavaScriptSerializer._escapeChars["\\"]="\\\\";Sys.Serialization.JavaScriptSerializer._charsToEscape[1]='"';Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"']=new RegExp('"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars['"']='\\"';for(var a=0;a<32;a++){var b=String.fromCharCode(a);Sys.Serialization.JavaScriptSerializer._charsToEscape[a+2]=b;Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b]=new RegExp(b,"g");Sys.Serialization.JavaScriptSerializer._escapeChars[b]=c[a]}};Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder=function(b,a){a.append(b.toString())};Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder=function(a,b){if(isFinite(a))b.append(String(a));else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers)};Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder=function(a,c){c.append('"');if(Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(a)){if(Sys.Serialization.JavaScriptSerializer._charsToEscape.length===0)Sys.Serialization.JavaScriptSerializer._init();if(a.length<128)a=a.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal,function(a){return Sys.Serialization.JavaScriptSerializer._escapeChars[a]});else for(var d=0;d<34;d++){var b=Sys.Serialization.JavaScriptSerializer._charsToEscape[d];if(a.indexOf(b)!==-1)if(Sys.Browser.agent===Sys.Browser.Opera||Sys.Browser.agent===Sys.Browser.FireFox)a=a.split(b).join(Sys.Serialization.JavaScriptSerializer._escapeChars[b]);else a=a.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b],Sys.Serialization.JavaScriptSerializer._escapeChars[b])}}c.append(a);c.append('"')};Sys.Serialization.JavaScriptSerializer._serializeWithBuilder=function(b,a,i,g){var c;switch(typeof b){case "object":if(b)if(Number.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);else if(Boolean.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);else if(String.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);else if(Array.isInstanceOfType(b)){a.append("[");for(c=0;c<b.length;++c){if(c>0)a.append(",");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b[c],a,false,g)}a.append("]")}else{if(Date.isInstanceOfType(b)){a.append('"\\/Date(');a.append(b.getTime());a.append(')\\/"');break}var d=[],f=0;for(var e in b){if(e.startsWith("$"))continue;if(e===Sys.Serialization.JavaScriptSerializer._serverTypeFieldName&&f!==0){d[f++]=d[0];d[0]=e}else d[f++]=e}if(i)d.sort();a.append("{");var j=false;for(c=0;c<f;c++){var h=b[d[c]];if(typeof h!=="undefined"&&typeof h!=="function"){if(j)a.append(",");else j=true;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(d[c],a,i,g);a.append(":");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(h,a,i,g)}}a.append("}")}else a.append("null");break;case "number":Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);break;case "string":Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);break;case "boolean":Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);break;default:a.append("null")}};Sys.Serialization.JavaScriptSerializer.serialize=function(b){var a=new Sys.StringBuilder;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b,a,false);return a.toString()};Sys.Serialization.JavaScriptSerializer.deserialize=function(data,secure){if(data.length===0)throw Error.argument("data",Sys.Res.cannotDeserializeEmptyString);try{var exp=data.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx,"$1new Date($2)");if(secure&&Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(exp.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx,"")))throw null;return eval("("+exp+")")}catch(a){throw Error.argument("data",Sys.Res.cannotDeserializeInvalidJson)}};Type.registerNamespace("Sys.UI");Sys.EventHandlerList=function(){this._list={}};Sys.EventHandlerList.prototype={_addHandler:function(b,a){Array.add(this._getEvent(b,true),a)},addHandler:function(b,a){this._addHandler(b,a)},_removeHandler:function(c,b){var a=this._getEvent(c);if(!a)return;Array.remove(a,b)},removeHandler:function(b,a){this._removeHandler(b,a)},getHandler:function(b){var a=this._getEvent(b);if(!a||a.length===0)return null;a=Array.clone(a);return function(c,d){for(var b=0,e=a.length;b<e;b++)a[b](c,d)}},_getEvent:function(a,b){if(!this._list[a]){if(!b)return null;this._list[a]=[]}return this._list[a]}};Sys.EventHandlerList.registerClass("Sys.EventHandlerList");Sys.CommandEventArgs=function(c,a,b){Sys.CommandEventArgs.initializeBase(this);this._commandName=c;this._commandArgument=a;this._commandSource=b};Sys.CommandEventArgs.prototype={_commandName:null,_commandArgument:null,_commandSource:null,get_commandName:function(){return this._commandName},get_commandArgument:function(){return this._commandArgument},get_commandSource:function(){return this._commandSource}};Sys.CommandEventArgs.registerClass("Sys.CommandEventArgs",Sys.CancelEventArgs);Sys.INotifyPropertyChange=function(){};Sys.INotifyPropertyChange.prototype={};Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange");Sys.PropertyChangedEventArgs=function(a){Sys.PropertyChangedEventArgs.initializeBase(this);this._propertyName=a};Sys.PropertyChangedEventArgs.prototype={get_propertyName:function(){return this._propertyName}};Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs",Sys.EventArgs);Sys.INotifyDisposing=function(){};Sys.INotifyDisposing.prototype={};Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing");Sys.Component=function(){if(Sys.Application)Sys.Application.registerDisposableObject(this)};Sys.Component.prototype={_id:null,_initialized:false,_updating:false,get_events:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_id:function(){return this._id},set_id:function(a){this._id=a},get_isInitialized:function(){return this._initialized},get_isUpdating:function(){return this._updating},add_disposing:function(a){this.get_events().addHandler("disposing",a)},remove_disposing:function(a){this.get_events().removeHandler("disposing",a)},add_propertyChanged:function(a){this.get_events().addHandler("propertyChanged",a)},remove_propertyChanged:function(a){this.get_events().removeHandler("propertyChanged",a)},beginUpdate:function(){this._updating=true},dispose:function(){if(this._events){var a=this._events.getHandler("disposing");if(a)a(this,Sys.EventArgs.Empty)}delete this._events;Sys.Application.unregisterDisposableObject(this);Sys.Application.removeComponent(this)},endUpdate:function(){this._updating=false;if(!this._initialized)this.initialize();this.updated()},initialize:function(){this._initialized=true},raisePropertyChanged:function(b){if(!this._events)return;var a=this._events.getHandler("propertyChanged");if(a)a(this,new Sys.PropertyChangedEventArgs(b))},updated:function(){}};Sys.Component.registerClass("Sys.Component",null,Sys.IDisposable,Sys.INotifyPropertyChange,Sys.INotifyDisposing);function Sys$Component$_setProperties(a,i){var d,j=Object.getType(a),e=j===Object||j===Sys.UI.DomElement,h=Sys.Component.isInstanceOfType(a)&&!a.get_isUpdating();if(h)a.beginUpdate();for(var c in i){var b=i[c],f=e?null:a["get_"+c];if(e||typeof f!=="function"){var k=a[c];if(!b||typeof b!=="object"||e&&!k)a[c]=b;else Sys$Component$_setProperties(k,b)}else{var l=a["set_"+c];if(typeof l==="function")l.apply(a,[b]);else if(b instanceof Array){d=f.apply(a);for(var g=0,m=d.length,n=b.length;g<n;g++,m++)d[m]=b[g]}else if(typeof b==="object"&&Object.getType(b)===Object){d=f.apply(a);Sys$Component$_setProperties(d,b)}}}if(h)a.endUpdate()}function Sys$Component$_setReferences(c,b){for(var a in b){var e=c["set_"+a],d=$find(b[a]);e.apply(c,[d])}}var $create=Sys.Component.create=function(h,f,d,c,g){var a=g?new h(g):new h,b=Sys.Application,i=b.get_isCreatingComponents();a.beginUpdate();if(f)Sys$Component$_setProperties(a,f);if(d)for(var e in d)a["add_"+e](d[e]);if(a.get_id())b.addComponent(a);if(i){b._createdComponents[b._createdComponents.length]=a;if(c)b._addComponentToSecondPass(a,c);else a.endUpdate()}else{if(c)Sys$Component$_setReferences(a,c);a.endUpdate()}return a};Sys.UI.MouseButton=function(){throw Error.notImplemented()};Sys.UI.MouseButton.prototype={leftButton:0,middleButton:1,rightButton:2};Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton");Sys.UI.Key=function(){throw Error.notImplemented()};Sys.UI.Key.prototype={backspace:8,tab:9,enter:13,esc:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:127};Sys.UI.Key.registerEnum("Sys.UI.Key");Sys.UI.Point=function(a,b){this.rawX=a;this.rawY=b;this.x=Math.round(a);this.y=Math.round(b)};Sys.UI.Point.registerClass("Sys.UI.Point");Sys.UI.Bounds=function(c,d,b,a){this.x=c;this.y=d;this.height=a;this.width=b};Sys.UI.Bounds.registerClass("Sys.UI.Bounds");Sys.UI.DomEvent=function(e){var a=e,b=this.type=a.type.toLowerCase();this.rawEvent=a;this.altKey=a.altKey;if(typeof a.button!=="undefined")this.button=typeof a.which!=="undefined"?a.button:a.button===4?Sys.UI.MouseButton.middleButton:a.button===2?Sys.UI.MouseButton.rightButton:Sys.UI.MouseButton.leftButton;if(b==="keypress")this.charCode=a.charCode||a.keyCode;else if(a.keyCode&&a.keyCode===46)this.keyCode=127;else this.keyCode=a.keyCode;this.clientX=a.clientX;this.clientY=a.clientY;this.ctrlKey=a.ctrlKey;this.target=a.target?a.target:a.srcElement;if(!b.startsWith("key"))if(typeof a.offsetX!=="undefined"&&typeof a.offsetY!=="undefined"){this.offsetX=a.offsetX;this.offsetY=a.offsetY}else if(this.target&&this.target.nodeType!==3&&typeof a.clientX==="number"){var c=Sys.UI.DomElement.getLocation(this.target),d=Sys.UI.DomElement._getWindow(this.target);this.offsetX=(d.pageXOffset||0)+a.clientX-c.x;this.offsetY=(d.pageYOffset||0)+a.clientY-c.y}this.screenX=a.screenX;this.screenY=a.screenY;this.shiftKey=a.shiftKey};Sys.UI.DomEvent.prototype={preventDefault:function(){if(this.rawEvent.preventDefault)this.rawEvent.preventDefault();else if(window.event)this.rawEvent.returnValue=false},stopPropagation:function(){if(this.rawEvent.stopPropagation)this.rawEvent.stopPropagation();else if(window.event)this.rawEvent.cancelBubble=true}};Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");var $addHandler=Sys.UI.DomEvent.addHandler=function(a,d,e,g){if(!a._events)a._events={};var c=a._events[d];if(!c)a._events[d]=c=[];var b;if(a.addEventListener){b=function(b){return e.call(a,new Sys.UI.DomEvent(b))};a.addEventListener(d,b,false)}else if(a.attachEvent){b=function(){var b={};try{b=Sys.UI.DomElement._getWindow(a).event}catch(c){}return e.call(a,new Sys.UI.DomEvent(b))};a.attachEvent("on"+d,b)}c[c.length]={handler:e,browserHandler:b,autoRemove:g};if(g){var f=a.dispose;if(f!==Sys.UI.DomEvent._disposeHandlers){a.dispose=Sys.UI.DomEvent._disposeHandlers;if(typeof f!=="undefined")a._chainDispose=f}}},$addHandlers=Sys.UI.DomEvent.addHandlers=function(f,d,c,e){for(var b in d){var a=d[b];if(c)a=Function.createDelegate(c,a);$addHandler(f,b,a,e||false)}},$clearHandlers=Sys.UI.DomEvent.clearHandlers=function(a){Sys.UI.DomEvent._clearHandlers(a,false)};Sys.UI.DomEvent._clearHandlers=function(a,g){if(a._events){var e=a._events;for(var b in e){var d=e[b];for(var c=d.length-1;c>=0;c--){var f=d[c];if(!g||f.autoRemove)$removeHandler(a,b,f.handler)}}a._events=null}};Sys.UI.DomEvent._disposeHandlers=function(){Sys.UI.DomEvent._clearHandlers(this,true);var b=this._chainDispose,a=typeof b;if(a!=="undefined"){this.dispose=b;this._chainDispose=null;if(a==="function")this.dispose()}};var $removeHandler=Sys.UI.DomEvent.removeHandler=function(b,a,c){Sys.UI.DomEvent._removeHandler(b,a,c)};Sys.UI.DomEvent._removeHandler=function(a,e,f){var d=null,c=a._events[e];for(var b=0,g=c.length;b<g;b++)if(c[b].handler===f){d=c[b].browserHandler;break}if(a.removeEventListener)a.removeEventListener(e,d,false);else if(a.detachEvent)a.detachEvent("on"+e,d);c.splice(b,1)};Sys.UI.DomElement=function(){};Sys.UI.DomElement.registerClass("Sys.UI.DomElement");Sys.UI.DomElement.addCssClass=function(a,b){if(!Sys.UI.DomElement.containsCssClass(a,b))if(a.className==="")a.className=b;else a.className+=" "+b};Sys.UI.DomElement.containsCssClass=function(b,a){return Array.contains(b.className.split(" "),a)};Sys.UI.DomElement.getBounds=function(a){var b=Sys.UI.DomElement.getLocation(a);return new Sys.UI.Bounds(b.x,b.y,a.offsetWidth||0,a.offsetHeight||0)};var $get=Sys.UI.DomElement.getElementById=function(f,e){if(!e)return document.getElementById(f);if(e.getElementById)return e.getElementById(f);var c=[],d=e.childNodes;for(var b=0;b<d.length;b++){var a=d[b];if(a.nodeType==1)c[c.length]=a}while(c.length){a=c.shift();if(a.id==f)return a;d=a.childNodes;for(b=0;b<d.length;b++){a=d[b];if(a.nodeType==1)c[c.length]=a}}return null};if(document.documentElement.getBoundingClientRect)Sys.UI.DomElement.getLocation=function(a){if(a.self||a.nodeType===9||a===document.documentElement||a.parentNode===a.ownerDocument.documentElement)return new Sys.UI.Point(0,0);var f=a.getBoundingClientRect();if(!f)return new Sys.UI.Point(0,0);var e=a.ownerDocument.documentElement,h=a.ownerDocument.body,l,c=Math.round(f.left)+(e.scrollLeft||h.scrollLeft),d=Math.round(f.top)+(e.scrollTop||h.scrollTop);if(Sys.Browser.agent===Sys.Browser.InternetExplorer){try{var g=a.ownerDocument.parentWindow.frameElement||null;if(g){var i=g.frameBorder==="0"||g.frameBorder==="no"?2:0;c+=i;d+=i}}catch(m){}if(Sys.Browser.version===7&&!document.documentMode){var j=document.body,k=j.getBoundingClientRect(),b=(k.right-k.left)/j.clientWidth;b=Math.round(b*100);b=(b-b%5)/100;if(!isNaN(b)&&b!==1){c=Math.round(c/b);d=Math.round(d/b)}}if((document.documentMode||0)<8){c-=e.clientLeft;d-=e.clientTop}}return new Sys.UI.Point(c,d)};else if(Sys.Browser.agent===Sys.Browser.Safari)Sys.UI.DomElement.getLocation=function(c){if(c.window&&c.window===c||c.nodeType===9)return new Sys.UI.Point(0,0);var d=0,e=0,a,j=null,g=null,b;for(a=c;a;j=a,(g=b,a=a.offsetParent)){b=Sys.UI.DomElement._getCurrentStyle(a);var f=a.tagName?a.tagName.toUpperCase():null;if((a.offsetLeft||a.offsetTop)&&(f!=="BODY"||(!g||g.position!=="absolute"))){d+=a.offsetLeft;e+=a.offsetTop}if(j&&Sys.Browser.version>=3){d+=parseInt(b.borderLeftWidth);e+=parseInt(b.borderTopWidth)}}b=Sys.UI.DomElement._getCurrentStyle(c);var h=b?b.position:null;if(!h||h!=="absolute")for(a=c.parentNode;a;a=a.parentNode){f=a.tagName?a.tagName.toUpperCase():null;if(f!=="BODY"&&f!=="HTML"&&(a.scrollLeft||a.scrollTop)){d-=a.scrollLeft||0;e-=a.scrollTop||0}b=Sys.UI.DomElement._getCurrentStyle(a);var i=b?b.position:null;if(i&&i==="absolute")break}return new Sys.UI.Point(d,e)};else Sys.UI.DomElement.getLocation=function(d){if(d.window&&d.window===d||d.nodeType===9)return new Sys.UI.Point(0,0);var e=0,f=0,a,i=null,g=null,b=null;for(a=d;a;i=a,(g=b,a=a.offsetParent)){var c=a.tagName?a.tagName.toUpperCase():null;b=Sys.UI.DomElement._getCurrentStyle(a);if((a.offsetLeft||a.offsetTop)&&!(c==="BODY"&&(!g||g.position!=="absolute"))){e+=a.offsetLeft;f+=a.offsetTop}if(i!==null&&b){if(c!=="TABLE"&&c!=="TD"&&c!=="HTML"){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}if(c==="TABLE"&&(b.position==="relative"||b.position==="absolute")){e+=parseInt(b.marginLeft)||0;f+=parseInt(b.marginTop)||0}}}b=Sys.UI.DomElement._getCurrentStyle(d);var h=b?b.position:null;if(!h||h!=="absolute")for(a=d.parentNode;a;a=a.parentNode){c=a.tagName?a.tagName.toUpperCase():null;if(c!=="BODY"&&c!=="HTML"&&(a.scrollLeft||a.scrollTop)){e-=a.scrollLeft||0;f-=a.scrollTop||0;b=Sys.UI.DomElement._getCurrentStyle(a);if(b){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}}}return new Sys.UI.Point(e,f)};Sys.UI.DomElement.isDomElement=function(a){return Sys._isDomElement(a)};Sys.UI.DomElement.removeCssClass=function(d,c){var a=" "+d.className+" ",b=a.indexOf(" "+c+" ");if(b>=0)d.className=(a.substr(0,b)+" "+a.substring(b+c.length+1,a.length)).trim()};Sys.UI.DomElement.resolveElement=function(b,c){var a=b;if(!a)return null;if(typeof a==="string")a=Sys.UI.DomElement.getElementById(a,c);return a};Sys.UI.DomElement.raiseBubbleEvent=function(c,d){var b=c;while(b){var a=b.control;if(a&&a.onBubbleEvent&&a.raiseBubbleEvent){Sys.UI.DomElement._raiseBubbleEventFromControl(a,c,d);return}b=b.parentNode}};Sys.UI.DomElement._raiseBubbleEventFromControl=function(a,b,c){if(!a.onBubbleEvent(b,c))a._raiseBubbleEvent(b,c)};Sys.UI.DomElement.setLocation=function(b,c,d){var a=b.style;a.position="absolute";a.left=c+"px";a.top=d+"px"};Sys.UI.DomElement.toggleCssClass=function(b,a){if(Sys.UI.DomElement.containsCssClass(b,a))Sys.UI.DomElement.removeCssClass(b,a);else Sys.UI.DomElement.addCssClass(b,a)};Sys.UI.DomElement.getVisibilityMode=function(a){return a._visibilityMode===Sys.UI.VisibilityMode.hide?Sys.UI.VisibilityMode.hide:Sys.UI.VisibilityMode.collapse};Sys.UI.DomElement.setVisibilityMode=function(a,b){Sys.UI.DomElement._ensureOldDisplayMode(a);if(a._visibilityMode!==b){a._visibilityMode=b;if(Sys.UI.DomElement.getVisible(a)===false)if(a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none";a._visibilityMode=b}};Sys.UI.DomElement.getVisible=function(b){var a=b.currentStyle||Sys.UI.DomElement._getCurrentStyle(b);if(!a)return true;return a.visibility!=="hidden"&&a.display!=="none"};Sys.UI.DomElement.setVisible=function(a,b){if(b!==Sys.UI.DomElement.getVisible(a)){Sys.UI.DomElement._ensureOldDisplayMode(a);a.style.visibility=b?"visible":"hidden";if(b||a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none"}};Sys.UI.DomElement._ensureOldDisplayMode=function(a){if(!a._oldDisplayMode){var b=a.currentStyle||Sys.UI.DomElement._getCurrentStyle(a);a._oldDisplayMode=b?b.display:null;if(!a._oldDisplayMode||a._oldDisplayMode==="none")switch(a.tagName.toUpperCase()){case "DIV":case "P":case "ADDRESS":case "BLOCKQUOTE":case "BODY":case "COL":case "COLGROUP":case "DD":case "DL":case "DT":case "FIELDSET":case "FORM":case "H1":case "H2":case "H3":case "H4":case "H5":case "H6":case "HR":case "IFRAME":case "LEGEND":case "OL":case "PRE":case "TABLE":case "TD":case "TH":case "TR":case "UL":a._oldDisplayMode="block";break;case "LI":a._oldDisplayMode="list-item";break;default:a._oldDisplayMode="inline"}}};Sys.UI.DomElement._getWindow=function(a){var b=a.ownerDocument||a.document||a;return b.defaultView||b.parentWindow};Sys.UI.DomElement._getCurrentStyle=function(a){if(a.nodeType===3)return null;var c=Sys.UI.DomElement._getWindow(a);if(a.documentElement)a=a.documentElement;var b=c&&a!==c&&c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle||a.style;if(!b&&Sys.Browser.agent===Sys.Browser.Safari&&a.style){var g=a.style.display,f=a.style.position;a.style.position="absolute";a.style.display="block";var e=c.getComputedStyle(a,null);a.style.display=g;a.style.position=f;b={};for(var d in e)b[d]=e[d];b.display="none"}return b};Sys.IContainer=function(){};Sys.IContainer.prototype={};Sys.IContainer.registerInterface("Sys.IContainer");Sys.ApplicationLoadEventArgs=function(b,a){Sys.ApplicationLoadEventArgs.initializeBase(this);this._components=b;this._isPartialLoad=a};Sys.ApplicationLoadEventArgs.prototype={get_components:function(){return this._components},get_isPartialLoad:function(){return this._isPartialLoad}};Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs",Sys.EventArgs);Sys._Application=function(){Sys._Application.initializeBase(this);this._disposableObjects=[];this._components={};this._createdComponents=[];this._secondPassComponents=[];this._unloadHandlerDelegate=Function.createDelegate(this,this._unloadHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._unloadHandlerDelegate);this._domReady()};Sys._Application.prototype={_creatingComponents:false,_disposing:false,_deleteCount:0,get_isCreatingComponents:function(){return this._creatingComponents},get_isDisposing:function(){return this._disposing},add_init:function(a){if(this._initialized)a(this,Sys.EventArgs.Empty);else this.get_events().addHandler("init",a)},remove_init:function(a){this.get_events().removeHandler("init",a)},add_load:function(a){this.get_events().addHandler("load",a)},remove_load:function(a){this.get_events().removeHandler("load",a)},add_unload:function(a){this.get_events().addHandler("unload",a)},remove_unload:function(a){this.get_events().removeHandler("unload",a)},addComponent:function(a){this._components[a.get_id()]=a},beginCreateComponents:function(){this._creatingComponents=true},dispose:function(){if(!this._disposing){this._disposing=true;if(this._timerCookie){window.clearTimeout(this._timerCookie);delete this._timerCookie}if(this._endRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler);delete this._endRequestHandler}if(this._beginRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler);delete this._beginRequestHandler}if(window.pageUnload)window.pageUnload(this,Sys.EventArgs.Empty);var c=this.get_events().getHandler("unload");if(c)c(this,Sys.EventArgs.Empty);var b=Array.clone(this._disposableObjects);for(var a=0,f=b.length;a<f;a++){var d=b[a];if(typeof d!=="undefined")d.dispose()}Array.clear(this._disposableObjects);Sys.UI.DomEvent.removeHandler(window,"unload",this._unloadHandlerDelegate);if(Sys._ScriptLoader){var e=Sys._ScriptLoader.getInstance();if(e)e.dispose()}Sys._Application.callBaseMethod(this,"dispose")}},disposeElement:function(c,j){if(c.nodeType===1){var b,h=c.getElementsByTagName("*"),g=h.length,i=new Array(g);for(b=0;b<g;b++)i[b]=h[b];for(b=g-1;b>=0;b--){var d=i[b],f=d.dispose;if(f&&typeof f==="function")d.dispose();else{var e=d.control;if(e&&typeof e.dispose==="function")e.dispose()}var a=d._behaviors;if(a)this._disposeComponents(a);a=d._components;if(a){this._disposeComponents(a);d._components=null}}if(!j){var f=c.dispose;if(f&&typeof f==="function")c.dispose();else{var e=c.control;if(e&&typeof e.dispose==="function")e.dispose()}var a=c._behaviors;if(a)this._disposeComponents(a);a=c._components;if(a){this._disposeComponents(a);c._components=null}}}},endCreateComponents:function(){var b=this._secondPassComponents;for(var a=0,d=b.length;a<d;a++){var c=b[a].component;Sys$Component$_setReferences(c,b[a].references);c.endUpdate()}this._secondPassComponents=[];this._creatingComponents=false},findComponent:function(b,a){return a?Sys.IContainer.isInstanceOfType(a)?a.findComponent(b):a[b]||null:Sys.Application._components[b]||null},getComponents:function(){var a=[],b=this._components;for(var c in b)a[a.length]=b[c];return a},initialize:function(){if(!this.get_isInitialized()&&!this._disposing){Sys._Application.callBaseMethod(this,"initialize");this._raiseInit();if(this.get_stateString){if(Sys.WebForms&&Sys.WebForms.PageRequestManager){this._beginRequestHandler=Function.createDelegate(this,this._onPageRequestManagerBeginRequest);Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler);this._endRequestHandler=Function.createDelegate(this,this._onPageRequestManagerEndRequest);Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler)}var a=this.get_stateString();if(a!==this._currentEntry)this._navigate(a);else this._ensureHistory()}this.raiseLoad()}},notifyScriptLoaded:function(){},registerDisposableObject:function(b){if(!this._disposing){var a=this._disposableObjects,c=a.length;a[c]=b;b.__msdisposeindex=c}},raiseLoad:function(){var b=this.get_events().getHandler("load"),a=new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents),!!this._loaded);this._loaded=true;if(b)b(this,a);if(window.pageLoad)window.pageLoad(this,a);this._createdComponents=[]},removeComponent:function(b){var a=b.get_id();if(a)delete this._components[a]},unregisterDisposableObject:function(a){if(!this._disposing){var e=a.__msdisposeindex;if(typeof e==="number"){var b=this._disposableObjects;delete b[e];delete a.__msdisposeindex;if(++this._deleteCount>1000){var c=[];for(var d=0,f=b.length;d<f;d++){a=b[d];if(typeof a!=="undefined"){a.__msdisposeindex=c.length;c.push(a)}}this._disposableObjects=c;this._deleteCount=0}}}},_addComponentToSecondPass:function(b,a){this._secondPassComponents[this._secondPassComponents.length]={component:b,references:a}},_disposeComponents:function(a){if(a)for(var b=a.length-1;b>=0;b--){var c=a[b];if(typeof c.dispose==="function")c.dispose()}},_domReady:function(){var a,g,f=this;function b(){f.initialize()}var c=function(){Sys.UI.DomEvent.removeHandler(window,"load",c);b()};Sys.UI.DomEvent.addHandler(window,"load",c);if(document.addEventListener)try{document.addEventListener("DOMContentLoaded",a=function(){document.removeEventListener("DOMContentLoaded",a,false);b()},false)}catch(h){}else if(document.attachEvent)if(window==window.top&&document.documentElement.doScroll){var e,d=document.createElement("div");a=function(){try{d.doScroll("left")}catch(c){e=window.setTimeout(a,0);return}d=null;b()};a()}else document.attachEvent("onreadystatechange",a=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",a);b()}})},_raiseInit:function(){var a=this.get_events().getHandler("init");if(a){this.beginCreateComponents();a(this,Sys.EventArgs.Empty);this.endCreateComponents()}},_unloadHandler:function(){this.dispose()}};Sys._Application.registerClass("Sys._Application",Sys.Component,Sys.IContainer);Sys.Application=new Sys._Application;var $find=Sys.Application.findComponent;Sys.UI.Behavior=function(b){Sys.UI.Behavior.initializeBase(this);this._element=b;var a=b._behaviors;if(!a)b._behaviors=[this];else a[a.length]=this};Sys.UI.Behavior.prototype={_name:null,get_element:function(){return this._element},get_id:function(){var a=Sys.UI.Behavior.callBaseMethod(this,"get_id");if(a)return a;if(!this._element||!this._element.id)return "";return this._element.id+"$"+this.get_name()},get_name:function(){if(this._name)return this._name;var a=Object.getTypeName(this),b=a.lastIndexOf(".");if(b!==-1)a=a.substr(b+1);if(!this.get_isInitialized())this._name=a;return a},set_name:function(a){this._name=a},initialize:function(){Sys.UI.Behavior.callBaseMethod(this,"initialize");var a=this.get_name();if(a)this._element[a]=this},dispose:function(){Sys.UI.Behavior.callBaseMethod(this,"dispose");var a=this._element;if(a){var c=this.get_name();if(c)a[c]=null;var b=a._behaviors;Array.remove(b,this);if(b.length===0)a._behaviors=null;delete this._element}}};Sys.UI.Behavior.registerClass("Sys.UI.Behavior",Sys.Component);Sys.UI.Behavior.getBehaviorByName=function(b,c){var a=b[c];return a&&Sys.UI.Behavior.isInstanceOfType(a)?a:null};Sys.UI.Behavior.getBehaviors=function(a){if(!a._behaviors)return [];return Array.clone(a._behaviors)};Sys.UI.Behavior.getBehaviorsByType=function(d,e){var a=d._behaviors,c=[];if(a)for(var b=0,f=a.length;b<f;b++)if(e.isInstanceOfType(a[b]))c[c.length]=a[b];return c};Sys.UI.VisibilityMode=function(){throw Error.notImplemented()};Sys.UI.VisibilityMode.prototype={hide:0,collapse:1};Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode");Sys.UI.Control=function(a){Sys.UI.Control.initializeBase(this);this._element=a;a.control=this;var b=this.get_role();if(b)a.setAttribute("role",b)};Sys.UI.Control.prototype={_parent:null,_visibilityMode:Sys.UI.VisibilityMode.hide,get_element:function(){return this._element},get_id:function(){if(!this._element)return "";return this._element.id},set_id:function(){throw Error.invalidOperation(Sys.Res.cantSetId)},get_parent:function(){if(this._parent)return this._parent;if(!this._element)return null;var a=this._element.parentNode;while(a){if(a.control)return a.control;a=a.parentNode}return null},set_parent:function(a){this._parent=a},get_role:function(){return null},get_visibilityMode:function(){return Sys.UI.DomElement.getVisibilityMode(this._element)},set_visibilityMode:function(a){Sys.UI.DomElement.setVisibilityMode(this._element,a)},get_visible:function(){return Sys.UI.DomElement.getVisible(this._element)},set_visible:function(a){Sys.UI.DomElement.setVisible(this._element,a)},addCssClass:function(a){Sys.UI.DomElement.addCssClass(this._element,a)},dispose:function(){Sys.UI.Control.callBaseMethod(this,"dispose");if(this._element){this._element.control=null;delete this._element}if(this._parent)delete this._parent},onBubbleEvent:function(){return false},raiseBubbleEvent:function(a,b){this._raiseBubbleEvent(a,b)},_raiseBubbleEvent:function(b,c){var a=this.get_parent();while(a){if(a.onBubbleEvent(b,c))return;a=a.get_parent()}},removeCssClass:function(a){Sys.UI.DomElement.removeCssClass(this._element,a)},toggleCssClass:function(a){Sys.UI.DomElement.toggleCssClass(this._element,a)}};Sys.UI.Control.registerClass("Sys.UI.Control",Sys.Component);Sys.HistoryEventArgs=function(a){Sys.HistoryEventArgs.initializeBase(this);this._state=a};Sys.HistoryEventArgs.prototype={get_state:function(){return this._state}};Sys.HistoryEventArgs.registerClass("Sys.HistoryEventArgs",Sys.EventArgs);Sys.Application._appLoadHandler=null;Sys.Application._beginRequestHandler=null;Sys.Application._clientId=null;Sys.Application._currentEntry="";Sys.Application._endRequestHandler=null;Sys.Application._history=null;Sys.Application._enableHistory=false;Sys.Application._historyFrame=null;Sys.Application._historyInitialized=false;Sys.Application._historyPointIsNew=false;Sys.Application._ignoreTimer=false;Sys.Application._initialState=null;Sys.Application._state={};Sys.Application._timerCookie=0;Sys.Application._timerHandler=null;Sys.Application._uniqueId=null;Sys._Application.prototype.get_stateString=function(){var a=null;if(Sys.Browser.agent===Sys.Browser.Firefox){var c=window.location.href,b=c.indexOf("#");if(b!==-1)a=c.substring(b+1);else a="";return a}else a=window.location.hash;if(a.length>0&&a.charAt(0)==="#")a=a.substring(1);return a};Sys._Application.prototype.get_enableHistory=function(){return this._enableHistory};Sys._Application.prototype.set_enableHistory=function(a){this._enableHistory=a};Sys._Application.prototype.add_navigate=function(a){this.get_events().addHandler("navigate",a)};Sys._Application.prototype.remove_navigate=function(a){this.get_events().removeHandler("navigate",a)};Sys._Application.prototype.addHistoryPoint=function(c,f){this._ensureHistory();var b=this._state;for(var a in c){var d=c[a];if(d===null){if(typeof b[a]!=="undefined")delete b[a]}else b[a]=d}var e=this._serializeState(b);this._historyPointIsNew=true;this._setState(e,f);this._raiseNavigate()};Sys._Application.prototype.setServerId=function(a,b){this._clientId=a;this._uniqueId=b};Sys._Application.prototype.setServerState=function(a){this._ensureHistory();this._state.__s=a;this._updateHiddenField(a)};Sys._Application.prototype._deserializeState=function(a){var e={};a=a||"";var b=a.indexOf("&&");if(b!==-1&&b+2<a.length){e.__s=a.substr(b+2);a=a.substr(0,b)}var g=a.split("&");for(var f=0,j=g.length;f<j;f++){var d=g[f],c=d.indexOf("=");if(c!==-1&&c+1<d.length){var i=d.substr(0,c),h=d.substr(c+1);e[i]=decodeURIComponent(h)}}return e};Sys._Application.prototype._enableHistoryInScriptManager=function(){this._enableHistory=true};Sys._Application.prototype._ensureHistory=function(){if(!this._historyInitialized&&this._enableHistory){if(Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.documentMode<8){this._historyFrame=document.getElementById("__historyFrame");this._ignoreIFrame=true}this._timerHandler=Function.createDelegate(this,this._onIdle);this._timerCookie=window.setTimeout(this._timerHandler,100);try{this._initialState=this._deserializeState(this.get_stateString())}catch(a){}this._historyInitialized=true}};Sys._Application.prototype._navigate=function(c){this._ensureHistory();var b=this._deserializeState(c);if(this._uniqueId){var d=this._state.__s||"",a=b.__s||"";if(a!==d){this._updateHiddenField(a);__doPostBack(this._uniqueId,a);this._state=b;return}}this._setState(c);this._state=b;this._raiseNavigate()};Sys._Application.prototype._onIdle=function(){delete this._timerCookie;var a=this.get_stateString();if(a!==this._currentEntry){if(!this._ignoreTimer){this._historyPointIsNew=false;this._navigate(a)}}else this._ignoreTimer=false;this._timerCookie=window.setTimeout(this._timerHandler,100)};Sys._Application.prototype._onIFrameLoad=function(a){this._ensureHistory();if(!this._ignoreIFrame){this._historyPointIsNew=false;this._navigate(a)}this._ignoreIFrame=false};Sys._Application.prototype._onPageRequestManagerBeginRequest=function(){this._ignoreTimer=true;this._originalTitle=document.title};Sys._Application.prototype._onPageRequestManagerEndRequest=function(g,f){var d=f.get_dataItems()[this._clientId],c=this._originalTitle;this._originalTitle=null;var b=document.getElementById("__EVENTTARGET");if(b&&b.value===this._uniqueId)b.value="";if(typeof d!=="undefined"){this.setServerState(d);this._historyPointIsNew=true}else this._ignoreTimer=false;var a=this._serializeState(this._state);if(a!==this._currentEntry){this._ignoreTimer=true;if(typeof c==="string"){if(Sys.Browser.agent!==Sys.Browser.InternetExplorer||Sys.Browser.version>7){var e=document.title;document.title=c;this._setState(a);document.title=e}else this._setState(a);this._raiseNavigate()}else{this._setState(a);this._raiseNavigate()}}};Sys._Application.prototype._raiseNavigate=function(){var d=this._historyPointIsNew,c=this.get_events().getHandler("navigate"),b={};for(var a in this._state)if(a!=="__s")b[a]=this._state[a];var e=new Sys.HistoryEventArgs(b);if(c)c(this,e);if(!d){var f;try{if(Sys.Browser.agent===Sys.Browser.Firefox&&window.location.hash&&(!window.frameElement||window.top.location.hash))Sys.Browser.version<3.5?window.history.go(0):(location.hash=this.get_stateString())}catch(g){}}};Sys._Application.prototype._serializeState=function(d){var b=[];for(var a in d){var e=d[a];if(a==="__s")var c=e;else b[b.length]=a+"="+encodeURIComponent(e)}return b.join("&")+(c?"&&"+c:"")};Sys._Application.prototype._setState=function(a,b){if(this._enableHistory){a=a||"";if(a!==this._currentEntry){if(window.theForm){var d=window.theForm.action,e=d.indexOf("#");window.theForm.action=(e!==-1?d.substring(0,e):d)+"#"+a}if(this._historyFrame&&this._historyPointIsNew){var f=document.createElement("div");f.appendChild(document.createTextNode(b||document.title));var g=f.innerHTML;this._ignoreIFrame=true;var c=this._historyFrame.contentWindow.document;c.open("javascript:'<html></html>'");c.write("<html><head><title>"+g+"</title><scri"+'pt type="text/javascript">parent.Sys.Application._onIFrameLoad('+Sys.Serialization.JavaScriptSerializer.serialize(a)+");</scri"+"pt></head><body></body></html>");c.close()}this._ignoreTimer=false;this._currentEntry=a;if(this._historyFrame||this._historyPointIsNew){var h=this.get_stateString();if(a!==h){window.location.hash=a;this._currentEntry=this.get_stateString();if(typeof b!=="undefined"&&b!==null)document.title=b}}this._historyPointIsNew=false}}};Sys._Application.prototype._updateHiddenField=function(b){if(this._clientId){var a=document.getElementById(this._clientId);if(a)a.value=b}};if(!window.XMLHttpRequest)window.XMLHttpRequest=function(){var b=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP"];for(var a=0,c=b.length;a<c;a++)try{return new ActiveXObject(b[a])}catch(d){}return null};Type.registerNamespace("Sys.Net");Sys.Net.WebRequestExecutor=function(){this._webRequest=null;this._resultObject=null};Sys.Net.WebRequestExecutor.prototype={get_webRequest:function(){return this._webRequest},_set_webRequest:function(a){this._webRequest=a},get_started:function(){throw Error.notImplemented()},get_responseAvailable:function(){throw Error.notImplemented()},get_timedOut:function(){throw Error.notImplemented()},get_aborted:function(){throw Error.notImplemented()},get_responseData:function(){throw Error.notImplemented()},get_statusCode:function(){throw Error.notImplemented()},get_statusText:function(){throw Error.notImplemented()},get_xml:function(){throw Error.notImplemented()},get_object:function(){if(!this._resultObject)this._resultObject=Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());return this._resultObject},executeRequest:function(){throw Error.notImplemented()},abort:function(){throw Error.notImplemented()},getResponseHeader:function(){throw Error.notImplemented()},getAllResponseHeaders:function(){throw Error.notImplemented()}};Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor");Sys.Net.XMLDOM=function(d){if(!window.DOMParser){var c=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];for(var b=0,f=c.length;b<f;b++)try{var a=new ActiveXObject(c[b]);a.async=false;a.loadXML(d);a.setProperty("SelectionLanguage","XPath");return a}catch(g){}}else try{var e=new window.DOMParser;return e.parseFromString(d,"text/xml")}catch(g){}return null};Sys.Net.XMLHttpExecutor=function(){Sys.Net.XMLHttpExecutor.initializeBase(this);var a=this;this._xmlHttpRequest=null;this._webRequest=null;this._responseAvailable=false;this._timedOut=false;this._timer=null;this._aborted=false;this._started=false;this._onReadyStateChange=function(){if(a._xmlHttpRequest.readyState===4){try{if(typeof a._xmlHttpRequest.status==="undefined")return}catch(b){return}a._clearTimer();a._responseAvailable=true;try{a._webRequest.completed(Sys.EventArgs.Empty)}finally{if(a._xmlHttpRequest!=null){a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest=null}}}};this._clearTimer=function(){if(a._timer!=null){window.clearTimeout(a._timer);a._timer=null}};this._onTimeout=function(){if(!a._responseAvailable){a._clearTimer();a._timedOut=true;a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest.abort();a._webRequest.completed(Sys.EventArgs.Empty);a._xmlHttpRequest=null}}};Sys.Net.XMLHttpExecutor.prototype={get_timedOut:function(){return this._timedOut},get_started:function(){return this._started},get_responseAvailable:function(){return this._responseAvailable},get_aborted:function(){return this._aborted},executeRequest:function(){this._webRequest=this.get_webRequest();var c=this._webRequest.get_body(),a=this._webRequest.get_headers();this._xmlHttpRequest=new XMLHttpRequest;this._xmlHttpRequest.onreadystatechange=this._onReadyStateChange;var e=this._webRequest.get_httpVerb();this._xmlHttpRequest.open(e,this._webRequest.getResolvedUrl(),true);this._xmlHttpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest");if(a)for(var b in a){var f=a[b];if(typeof f!=="function")this._xmlHttpRequest.setRequestHeader(b,f)}if(e.toLowerCase()==="post"){if(a===null||!a["Content-Type"])this._xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");if(!c)c=""}var d=this._webRequest.get_timeout();if(d>0)this._timer=window.setTimeout(Function.createDelegate(this,this._onTimeout),d);this._xmlHttpRequest.send(c);this._started=true},getResponseHeader:function(b){var a;try{a=this._xmlHttpRequest.getResponseHeader(b)}catch(c){}if(!a)a="";return a},getAllResponseHeaders:function(){return this._xmlHttpRequest.getAllResponseHeaders()},get_responseData:function(){return this._xmlHttpRequest.responseText},get_statusCode:function(){var a=0;try{a=this._xmlHttpRequest.status}catch(b){}return a},get_statusText:function(){return this._xmlHttpRequest.statusText},get_xml:function(){var a=this._xmlHttpRequest.responseXML;if(!a||!a.documentElement){a=Sys.Net.XMLDOM(this._xmlHttpRequest.responseText);if(!a||!a.documentElement)return null}else if(navigator.userAgent.indexOf("MSIE")!==-1&&typeof a.setProperty!="undefined")a.setProperty("SelectionLanguage","XPath");if(a.documentElement.namespaceURI==="http://www.mozilla.org/newlayout/xml/parsererror.xml"&&a.documentElement.tagName==="parsererror")return null;if(a.documentElement.firstChild&&a.documentElement.firstChild.tagName==="parsererror")return null;return a},abort:function(){if(this._aborted||this._responseAvailable||this._timedOut)return;this._aborted=true;this._clearTimer();if(this._xmlHttpRequest&&!this._responseAvailable){this._xmlHttpRequest.onreadystatechange=Function.emptyMethod;this._xmlHttpRequest.abort();this._xmlHttpRequest=null;this._webRequest.completed(Sys.EventArgs.Empty)}}};Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor",Sys.Net.WebRequestExecutor);Sys.Net._WebRequestManager=function(){this._defaultTimeout=0;this._defaultExecutorType="Sys.Net.XMLHttpExecutor"};Sys.Net._WebRequestManager.prototype={add_invokingRequest:function(a){this._get_eventHandlerList().addHandler("invokingRequest",a)},remove_invokingRequest:function(a){this._get_eventHandlerList().removeHandler("invokingRequest",a)},add_completedRequest:function(a){this._get_eventHandlerList().addHandler("completedRequest",a)},remove_completedRequest:function(a){this._get_eventHandlerList().removeHandler("completedRequest",a)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_defaultTimeout:function(){return this._defaultTimeout},set_defaultTimeout:function(a){this._defaultTimeout=a},get_defaultExecutorType:function(){return this._defaultExecutorType},set_defaultExecutorType:function(a){this._defaultExecutorType=a},executeRequest:function(webRequest){var executor=webRequest.get_executor();if(!executor){var failed=false;try{var executorType=eval(this._defaultExecutorType);executor=new executorType}catch(a){failed=true}webRequest.set_executor(executor)}if(executor.get_aborted())return;var evArgs=new Sys.Net.NetworkRequestEventArgs(webRequest),handler=this._get_eventHandlerList().getHandler("invokingRequest");if(handler)handler(this,evArgs);if(!evArgs.get_cancel())executor.executeRequest()}};Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager");Sys.Net.WebRequestManager=new Sys.Net._WebRequestManager;Sys.Net.NetworkRequestEventArgs=function(a){Sys.Net.NetworkRequestEventArgs.initializeBase(this);this._webRequest=a};Sys.Net.NetworkRequestEventArgs.prototype={get_webRequest:function(){return this._webRequest}};Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs",Sys.CancelEventArgs);Sys.Net.WebRequest=function(){this._url="";this._headers={};this._body=null;this._userContext=null;this._httpVerb=null;this._executor=null;this._invokeCalled=false;this._timeout=0};Sys.Net.WebRequest.prototype={add_completed:function(a){this._get_eventHandlerList().addHandler("completed",a)},remove_completed:function(a){this._get_eventHandlerList().removeHandler("completed",a)},completed:function(b){var a=Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");if(a)a(this._executor,b);a=this._get_eventHandlerList().getHandler("completed");if(a)a(this._executor,b)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_url:function(){return this._url},set_url:function(a){this._url=a},get_headers:function(){return this._headers},get_httpVerb:function(){if(this._httpVerb===null){if(this._body===null)return "GET";return "POST"}return this._httpVerb},set_httpVerb:function(a){this._httpVerb=a},get_body:function(){return this._body},set_body:function(a){this._body=a},get_userContext:function(){return this._userContext},set_userContext:function(a){this._userContext=a},get_executor:function(){return this._executor},set_executor:function(a){this._executor=a;this._executor._set_webRequest(this)},get_timeout:function(){if(this._timeout===0)return Sys.Net.WebRequestManager.get_defaultTimeout();return this._timeout},set_timeout:function(a){this._timeout=a},getResolvedUrl:function(){return Sys.Net.WebRequest._resolveUrl(this._url)},invoke:function(){Sys.Net.WebRequestManager.executeRequest(this);this._invokeCalled=true}};Sys.Net.WebRequest._resolveUrl=function(b,a){if(b&&b.indexOf("://")!==-1)return b;if(!a||a.length===0){var d=document.getElementsByTagName("base")[0];if(d&&d.href&&d.href.length>0)a=d.href;else a=document.URL}var c=a.indexOf("?");if(c!==-1)a=a.substr(0,c);c=a.indexOf("#");if(c!==-1)a=a.substr(0,c);a=a.substr(0,a.lastIndexOf("/")+1);if(!b||b.length===0)return a;if(b.charAt(0)==="/"){var e=a.indexOf("://"),g=a.indexOf("/",e+3);return a.substr(0,g)+b}else{var f=a.lastIndexOf("/");return a.substr(0,f+1)+b}};Sys.Net.WebRequest._createQueryString=function(c,b,f){b=b||encodeURIComponent;var h=0,e,g,d,a=new Sys.StringBuilder;if(c)for(d in c){e=c[d];if(typeof e==="function")continue;g=Sys.Serialization.JavaScriptSerializer.serialize(e);if(h++)a.append("&");a.append(d);a.append("=");a.append(b(g))}if(f){if(h)a.append("&");a.append(f)}return a.toString()};Sys.Net.WebRequest._createUrl=function(a,b,c){if(!b&&!c)return a;var d=Sys.Net.WebRequest._createQueryString(b,null,c);return d.length?a+(a&&a.indexOf("?")>=0?"&":"?")+d:a};Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest");Sys._ScriptLoaderTask=function(b,a){this._scriptElement=b;this._completedCallback=a};Sys._ScriptLoaderTask.prototype={get_scriptElement:function(){return this._scriptElement},dispose:function(){if(this._disposed)return;this._disposed=true;this._removeScriptElementHandlers();Sys._ScriptLoaderTask._clearScript(this._scriptElement);this._scriptElement=null},execute:function(){if(this._ensureReadyStateLoaded())this._executeInternal()},_executeInternal:function(){this._addScriptElementHandlers();document.getElementsByTagName("head")[0].appendChild(this._scriptElement)},_ensureReadyStateLoaded:function(){if(this._useReadyState()&&this._scriptElement.readyState!=="loaded"&&this._scriptElement.readyState!=="complete"){this._scriptDownloadDelegate=Function.createDelegate(this,this._executeInternal);$addHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);return false}return true},_addScriptElementHandlers:function(){if(this._scriptDownloadDelegate){$removeHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);this._scriptDownloadDelegate=null}this._scriptLoadDelegate=Function.createDelegate(this,this._scriptLoadHandler);if(this._useReadyState())$addHandler(this._scriptElement,"readystatechange",this._scriptLoadDelegate);else $addHandler(this._scriptElement,"load",this._scriptLoadDelegate);if(this._scriptElement.addEventListener){this._scriptErrorDelegate=Function.createDelegate(this,this._scriptErrorHandler);this._scriptElement.addEventListener("error",this._scriptErrorDelegate,false)}},_removeScriptElementHandlers:function(){if(this._scriptLoadDelegate){var a=this.get_scriptElement();if(this._scriptDownloadDelegate){$removeHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);this._scriptDownloadDelegate=null}if(this._useReadyState()&&this._scriptLoadDelegate)$removeHandler(a,"readystatechange",this._scriptLoadDelegate);else $removeHandler(a,"load",this._scriptLoadDelegate);if(this._scriptErrorDelegate){this._scriptElement.removeEventListener("error",this._scriptErrorDelegate,false);this._scriptErrorDelegate=null}this._scriptLoadDelegate=null}},_scriptErrorHandler:function(){if(this._disposed)return;this._completedCallback(this.get_scriptElement(),false)},_scriptLoadHandler:function(){if(this._disposed)return;var a=this.get_scriptElement();if(this._useReadyState()&&a.readyState!=="complete")return;this._completedCallback(a,true)},_useReadyState:function(){return Sys.Browser.agent===Sys.Browser.InternetExplorer&&(Sys.Browser.version<9||(document.documentMode||0)<9)}};Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask",null,Sys.IDisposable);Sys._ScriptLoaderTask._clearScript=function(a){if(!Sys.Debug.isDebug&&a.parentNode)a.parentNode.removeChild(a)};Type.registerNamespace("Sys.Net");Sys.Net.WebServiceProxy=function(){};Sys.Net.WebServiceProxy.prototype={get_timeout:function(){return this._timeout||0},set_timeout:function(a){if(a<0)throw Error.argumentOutOfRange("value",a,Sys.Res.invalidTimeout);this._timeout=a},get_defaultUserContext:function(){return typeof this._userContext==="undefined"?null:this._userContext},set_defaultUserContext:function(a){this._userContext=a},get_defaultSucceededCallback:function(){return this._succeeded||null},set_defaultSucceededCallback:function(a){this._succeeded=a},get_defaultFailedCallback:function(){return this._failed||null},set_defaultFailedCallback:function(a){this._failed=a},get_enableJsonp:function(){return !!this._jsonp},set_enableJsonp:function(a){this._jsonp=a},get_path:function(){return this._path||null},set_path:function(a){this._path=a},get_jsonpCallbackParameter:function(){return this._callbackParameter||"callback"},set_jsonpCallbackParameter:function(a){this._callbackParameter=a},_invoke:function(d,e,g,f,c,b,a){c=c||this.get_defaultSucceededCallback();b=b||this.get_defaultFailedCallback();if(a===null||typeof a==="undefined")a=this.get_defaultUserContext();return Sys.Net.WebServiceProxy.invoke(d,e,g,f,c,b,a,this.get_timeout(),this.get_enableJsonp(),this.get_jsonpCallbackParameter())}};Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy");Sys.Net.WebServiceProxy.invoke=function(q,a,m,l,j,b,g,e,w,p){var i=w!==false?Sys.Net.WebServiceProxy._xdomain.exec(q):null,c,n=i&&i.length===3&&(i[1]!==location.protocol||i[2]!==location.host);m=n||m;if(n){p=p||"callback";c="_jsonp"+Sys._jsonp++}if(!l)l={};var r=l;if(!m||!r)r={};var s,h,f=null,k,o=null,u=Sys.Net.WebRequest._createUrl(a?q+"/"+encodeURIComponent(a):q,r,n?p+"=Sys."+c:null);if(n){s=document.createElement("script");s.src=u;k=new Sys._ScriptLoaderTask(s,function(d,b){if(!b||c)t({Message:String.format(Sys.Res.webServiceFailedNoMsg,a)},-1)});function v(){if(f===null)return;f=null;h=new Sys.Net.WebServiceError(true,String.format(Sys.Res.webServiceTimedOut,a));k.dispose();delete Sys[c];if(b)b(h,g,a)}function t(d,e){if(f!==null){window.clearTimeout(f);f=null}k.dispose();delete Sys[c];c=null;if(typeof e!=="undefined"&&e!==200){if(b){h=new Sys.Net.WebServiceError(false,d.Message||String.format(Sys.Res.webServiceFailedNoMsg,a),d.StackTrace||null,d.ExceptionType||null,d);h._statusCode=e;b(h,g,a)}}else if(j)j(d,g,a)}Sys[c]=t;e=e||Sys.Net.WebRequestManager.get_defaultTimeout();if(e>0)f=window.setTimeout(v,e);k.execute();return null}var d=new Sys.Net.WebRequest;d.set_url(u);d.get_headers()["Content-Type"]="application/json; charset=utf-8";if(!m){o=Sys.Serialization.JavaScriptSerializer.serialize(l);if(o==="{}")o=""}d.set_body(o);d.add_completed(x);if(e&&e>0)d.set_timeout(e);d.invoke();function x(d){if(d.get_responseAvailable()){var f=d.get_statusCode(),c=null;try{var e=d.getResponseHeader("Content-Type");if(e.startsWith("application/json"))c=d.get_object();else if(e.startsWith("text/xml"))c=d.get_xml();else c=d.get_responseData()}catch(m){}var k=d.getResponseHeader("jsonerror"),h=k==="true";if(h){if(c)c=new Sys.Net.WebServiceError(false,c.Message,c.StackTrace,c.ExceptionType,c)}else if(e.startsWith("application/json"))c=!c||typeof c.d==="undefined"?c:c.d;if(f<200||f>=300||h){if(b){if(!c||!h)c=new Sys.Net.WebServiceError(false,String.format(Sys.Res.webServiceFailedNoMsg,a));c._statusCode=f;b(c,g,a)}}else if(j)j(c,g,a)}else{var i;if(d.get_timedOut())i=String.format(Sys.Res.webServiceTimedOut,a);else i=String.format(Sys.Res.webServiceFailedNoMsg,a);if(b)b(new Sys.Net.WebServiceError(d.get_timedOut(),i,"",""),g,a)}}return d};Sys.Net.WebServiceProxy._generateTypedConstructor=function(a){return function(b){if(b)for(var c in b)this[c]=b[c];this.__type=a}};Sys._jsonp=0;Sys.Net.WebServiceProxy._xdomain=/^\s*([a-zA-Z0-9\+\-\.]+\:)\/\/([^?#\/]+)/;Sys.Net.WebServiceError=function(d,e,c,a,b){this._timedOut=d;this._message=e;this._stackTrace=c;this._exceptionType=a;this._errorObject=b;this._statusCode=-1};Sys.Net.WebServiceError.prototype={get_timedOut:function(){return this._timedOut},get_statusCode:function(){return this._statusCode},get_message:function(){return this._message},get_stackTrace:function(){return this._stackTrace||""},get_exceptionType:function(){return this._exceptionType||""},get_errorObject:function(){return this._errorObject||null}};Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError");;
/*
* jQuery ifixpng plugin
* (previously known as pngfix)
* Version 2.1  (23/04/2008)
* @requires jQuery v1.1.3 or above
*
* Examples at: http://jquery.khurshid.com
* Copyright (c) 2007 Kush M.
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/

/**
*
* @example
*
* optional if location of pixel.gif if different to default which is images/pixel.gif
* $.ifixpng('media/pixel.gif');
*
* $('img[@src$=.png], #panel').ifixpng();
*
* @apply hack to all png images and #panel which icluded png img in its css
*
* @name ifixpng
* @type jQuery
* @cat Plugins/Image
* @return jQuery
* @author jQuery Community
*/

(function () {
  var matched, browser;

  // Use of jQuery.browser is frowned upon.
  // More details: http://api.jquery.com/jQuery.browser
  // jQuery.uaMatch maintained for back-compat
  jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
        [];

    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  };

  matched = jQuery.uaMatch(navigator.userAgent);
  browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  }

  // Chrome is Webkit, but Webkit is also Safari.
  if (browser.chrome) {
    browser.webkit = true;
  } else if (browser.webkit) {
    browser.safari = true;
  }

  jQuery.browser = browser;
})();

(function($) {

  /**
  * helper variables and function
  */
  $.ifixpng = function(customPixel) {
    $.ifixpng.pixel = customPixel;
  };

  $.ifixpng.getPixel = function() {
    return $.ifixpng.pixel || '/_media/image/pixel.gif';
  };

  var hack = {
    ltie7: $.browser.msie && $.browser.version < 7,
    filter: function(src) {
      return "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=crop,src='" + src + "')";
    }
  };

  /**
  * Applies ie png hack to selected dom elements
  *
  * $('img[@src$=.png]').ifixpng();
  * @desc apply hack to all images with png extensions
  *
  * $('#panel, img[@src$=.png]').ifixpng();
  * @desc apply hack to element #panel and all images with png extensions
  *
  * @name ifixpng
  */

  $.fn.ifixpng = hack.ltie7 ? function() {
    return this.each(function() {
      var $$ = $(this);
      // in case rewriting urls
      var base = $('base').attr('href');
      if (base) {
        // remove anything after the last '/'
        base = base.replace(/\/[^\/]+$/, '/');
      }
      if ($$.is('img') || $$.is('input')) { // hack image tags present in dom
        if ($$.attr('src') && $$.height() > 0) {
          if ($$.attr('src').match(/.*\.png([?].*)?$/i)) { // make sure it is png image
            // use source tag value if set 
            var source = (base && $$.attr('src').search(/^(\/|http:)/i)) ? base + $$.attr('src') : $$.attr('src');
            // apply filter
            $$.css({ filter: hack.filter(source), width: $$.width(), height: $$.height() })
						  .attr({ src: $.ifixpng.getPixel() })
						  .positionFix();
          }
        }
      } else { // hack png css properties present inside css
        var image = $$.css('backgroundImage');
        if (image != undefined) {
          if (image.match(/^url\(["']?(.*\.png([?].*)?)["']?\)$/i)) {
            image = RegExp.$1;
            image = (base && image.substring(0, 1) != '/') ? base + image : image;
            $$.css({ backgroundImage: 'none', filter: hack.filter(image) })
					  .children().children().positionFix();
          }
        }
      }
    });
  } : function() { return this; };

  /**
  * Removes any png hack that may have been applied previously
  *
  * $('img[@src$=.png]').iunfixpng();
  * @desc revert hack on all images with png extensions
  *
  * $('#panel, img[@src$=.png]').iunfixpng();
  * @desc revert hack on element #panel and all images with png extensions
  *
  * @name iunfixpng
  */

  $.fn.iunfixpng = hack.ltie7 ? function() {
    return this.each(function() {
      var $$ = $(this);
      var src = $$.css('filter');
      if (src.match(/src=["']?(.*\.png([?].*)?)["']?/i)) { // get img source from filter
        src = RegExp.$1;
        if ($$.is('img') || $$.is('input')) {
          $$.attr({ src: src }).css({ filter: '' });
        } else {
          $$.css({ filter: '', background: 'url(' + src + ')' });
        }
      }
    });
  } : function() { return this; };

  /**
  * positions selected item relatively
  */

  $.fn.positionFix = function() {
    return this.each(function() {
      var $$ = $(this);
      var position = $$.css('position');
      if (position != 'absolute' && position != 'relative') {
        $$.css({ position: 'relative' });
      }
    });
  };

})(jQuery);

;
/*
http://www.JSON.org/json2.js
2011-10-19

Public Domain.

NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

See http://www.JSON.org/js.html


This code should be minified before deployment.
See http://javascript.crockford.com/jsmin.html

USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
NOT CONTROL.


This file creates a global JSON object containing two methods: stringify
and parse.

JSON.stringify(value, replacer, space)
value       any JavaScript value, usually an object or array.

replacer    an optional parameter that determines how object
values are stringified for objects. It can be a
function or an array of strings.

space       an optional parameter that specifies the indentation
of nested structures. If it is omitted, the text will
be packed without extra whitespace. If it is a number,
it will specify the number of spaces to indent at each
level. If it is a string (such as '\t' or '&nbsp;'),
it contains the characters used to indent at each level.

This method produces a JSON text from a JavaScript value.

When an object value is found, if the object contains a toJSON
method, its toJSON method will be called and the result will be
stringified. A toJSON method does not serialize: it returns the
value represented by the name/value pair that should be serialized,
or undefined if nothing should be serialized. The toJSON method
will be passed the key associated with the value, and this will be
bound to the value

For example, this would serialize Dates as ISO strings.

Date.prototype.toJSON = function (key) {
function f(n) {
// Format integers to have at least two digits.
return n < 10 ? '0' + n : n;
}

return this.getUTCFullYear()   + '-' +
f(this.getUTCMonth() + 1) + '-' +
f(this.getUTCDate())      + 'T' +
f(this.getUTCHours())     + ':' +
f(this.getUTCMinutes())   + ':' +
f(this.getUTCSeconds())   + 'Z';
};

You can provide an optional replacer method. It will be passed the
key and value of each member, with this bound to the containing
object. The value that is returned from your method will be
serialized. If your method returns undefined, then the member will
be excluded from the serialization.

If the replacer parameter is an array of strings, then it will be
used to select the members to be serialized. It filters the results
such that only members with keys listed in the replacer array are
stringified.

Values that do not have JSON representations, such as undefined or
functions, will not be serialized. Such values in objects will be
dropped; in arrays they will be replaced with null. You can use
a replacer function to replace those with JSON values.
JSON.stringify(undefined) returns undefined.

The optional space parameter produces a stringification of the
value that is filled with line breaks and indentation to make it
easier to read.

If the space parameter is a non-empty string, then that string will
be used for indentation. If the space parameter is a number, then
the indentation will be that many spaces.

Example:

text = JSON.stringify(['e', {pluribus: 'unum'}]);
// text is '["e",{"pluribus":"unum"}]'


text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
// text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

text = JSON.stringify([new Date()], function (key, value) {
return this[key] instanceof Date ?
'Date(' + this[key] + ')' : value;
});
// text is '["Date(---current time---)"]'


JSON.parse(text, reviver)
This method parses a JSON text to produce an object or array.
It can throw a SyntaxError exception.

The optional reviver parameter is a function that can filter and
transform the results. It receives each of the keys and values,
and its return value is used instead of the original value.
If it returns what it received, then the structure is not modified.
If it returns undefined then the member is deleted.

Example:

// Parse the text. Values that look like ISO date strings will
// be converted to Date objects.

myData = JSON.parse(text, function (key, value) {
var a;
if (typeof value === 'string') {
a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
if (a) {
return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
+a[5], +a[6]));
}
}
return value;
});

myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
var d;
if (typeof value === 'string' &&
value.slice(0, 5) === 'Date(' &&
value.slice(-1) === ')') {
d = new Date(value.slice(5, -1));
if (d) {
return d;
}
}
return value;
});


This is a reference implementation. You are free to copy, modify, or
redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
lastIndex, length, parse, prototype, push, replace, slice, stringify,
test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
  JSON = {};
}

(function () {
  'use strict';

  function f(n) {
    // Format integers to have at least two digits.
    return n < 10 ? '0' + n : n;
  }

  if (typeof Date.prototype.toJSON !== 'function') {

    Date.prototype.toJSON = function (key) {

      return isFinite(this.valueOf())
                ? this.getUTCFullYear() + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate()) + 'T' +
                    f(this.getUTCHours()) + ':' +
                    f(this.getUTCMinutes()) + ':' +
                    f(this.getUTCSeconds()) + 'Z'
                : null;
    };

    String.prototype.toJSON =
            Number.prototype.toJSON =
            Boolean.prototype.toJSON = function (key) {
              return this.valueOf();
            };
  }

  var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
          '\b': '\\b',
          '\t': '\\t',
          '\n': '\\n',
          '\f': '\\f',
          '\r': '\\r',
          '"': '\\"',
          '\\': '\\\\'
        },
        rep;


  function quote(string) {

    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.

    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
      var c = meta[a];
      return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }


  function str(key, holder) {

    // Produce a string from holder[key].

    var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

    // If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
      value = value.toJSON(key);
    }

    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.

    if (typeof rep === 'function') {
      value = rep.call(holder, key, value);
    }

    // What happens next depends on the value's type.

    switch (typeof value) {
      case 'string':
        return quote(value);

      case 'number':

        // JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value) ? String(value) : 'null';

      case 'boolean':
      case 'null':

        // If the value is a boolean or null, convert it to a string. Note:
        // typeof null does not produce 'null'. The case is included here in
        // the remote chance that this gets fixed someday.

        return String(value);

        // If the type is 'object', we might be dealing with an object or an array or
        // null.

      case 'object':

        // Due to a specification blunder in ECMAScript, typeof null is 'object',
        // so watch out for that case.

        if (!value) {
          return 'null';
        }

        // Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

        // Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

          // The value is an array. Stringify every element. Use null as a placeholder
          // for non-JSON values.

          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || 'null';
          }

          // Join all of the elements together, separated with commas, and wrap them in
          // brackets.

          v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
          gap = mind;
          return v;
        }

        // If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            if (typeof rep[i] === 'string') {
              k = rep[i];
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        } else {

          // Otherwise, iterate through all of the keys in the object.

          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ': ' : ':') + v);
              }
            }
          }
        }

        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
  }

  // If the JSON object does not yet have a stringify method, give it one.

  if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function (value, replacer, space) {

      // The stringify method takes a value and an optional replacer, and an optional
      // space parameter, and returns a JSON text. The replacer can be a function
      // that can replace values, or an array of strings that will select the keys.
      // A default replacer method can be provided. Use of the space parameter can
      // produce text that is more easily readable.

      var i;
      gap = '';
      indent = '';

      // If the space parameter is a number, make an indent string containing that
      // many spaces.

      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        }

        // If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
        indent = space;
      }

      // If there is a replacer, it must be a function or an array.
      // Otherwise, throw an error.

      rep = replacer;
      if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
      }

      // Make a fake root object containing our value under the key of ''.
      // Return the result of stringifying the value.

      return str('', { '': value });
    };
  }


  // If the JSON object does not yet have a parse method, give it one.

  if (typeof JSON.parse !== 'function') {
    JSON.parse = function (text, reviver) {

      // The parse method takes a text and an optional reviver function, and returns
      // a JavaScript value if the text is a valid JSON text.

      var j;

      function walk(holder, key) {

        // The walk method is used to recursively walk the resulting structure so
        // that modifications can be made.

        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = walk(value, k);
              if (v !== undefined) {
                value[k] = v;
              } else {
                delete value[k];
              }
            }
          }
        }
        return reviver.call(holder, key, value);
      }


      // Parsing happens in four stages. In the first stage, we replace certain
      // Unicode characters with escape sequences. JavaScript handles many characters
      // incorrectly, either silently deleting them, or treating them as line endings.

      text = String(text);
      cx.lastIndex = 0;
      if (cx.test(text)) {
        text = text.replace(cx, function (a) {
          return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        });
      }

      // In the second stage, we run the text against regular expressions that look
      // for non-JSON patterns. We are especially concerned with '()' and 'new'
      // because they can cause invocation, and '=' because it can cause mutation.
      // But just to be safe, we want to reject all unexpected forms.

      // We split the second stage into 4 regexp operations in order to work around
      // crippling inefficiencies in IE's and Safari's regexp engines. First we
      // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
      // replace all simple value tokens with ']' characters. Third, we delete all
      // open brackets that follow a colon or comma or that begin the text. Finally,
      // we look to see that the remaining characters are only whitespace or ']' or
      // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

      if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        // In the third stage we use the eval function to compile the text into a
        // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
        // in JavaScript: it can begin a block or an object literal. We wrap the text
        // in parens to eliminate the ambiguity.

        j = eval('(' + text + ')');

        // In the optional fourth stage, we recursively walk the new structure, passing
        // each name/value pair to a reviver function for possible transformation.

        return typeof reviver === 'function'
                    ? walk({ '': j }, '')
                    : j;
      }

      // If the text is not JSON parseable, then a SyntaxError is thrown.

      throw new SyntaxError('JSON.parse');
    };
  }
} ());
;
(function ($) {
  $.fn.HighlightSelector = function (settings) {
    // settings du plugin.
    settings = $.extend({
      QueryHashKeyName: "qa",
      HighlightClass: "highlight"
    }, settings);

    var instance = this;

    // Détection du changement d'url
    $(window).bind('hashchange', QAHighlight);

    // Détection du chargement de la page
    $(document).ready(QAHighlight);

    function QAHighlight() {
      // Expression de QA
      var qaExpression = new RegExp("#" + settings.QueryHashKeyName + "+=[^&=]+");

      // Obtient le QA
      var qaMatch = qaExpression.exec(document.location.href);

      // Valide si le QA match existe
      if (qaMatch != null && qaMatch.length > 0) {
        // Récupère la valeur du QA
        var qaValue = qaMatch[0].split('=')[1];

        // Récupère les sélector
        var qaSelector = qaValue.split(';');

        $("." + settings.HighlightClass).removeClass(settings.HighlightClass);

        // Valide si les selector va etre présent
        if (qaSelector != null && qaSelector.length > 0) {
          // Parcours les sélector
          $(qaSelector).each(function () {
            $(this.toString()).addClass(settings.HighlightClass);          
          });
        }
      }
    }
  }
})(jQuery);
;
function NmsLoadingManagerClass() {
  // Field contenant le loadingZone
  this.__loadingZone = null;
  this.loadingRegistered = {};
  this.isLoading = false;
}

NmsLoadingManagerClass.prototype = {

  // Initialize le contrôle de chargement
  Initialize: function () {
    // Création du contrôle
    this.__loadingZone = $("<div class=\"nmsLoadingContainer\"><img src='/_images/loading.gif'/ class=\"NmsLoadingManager\"></div>");

    // Définit le css par défault
    $(this.__loadingZone).css({ background: "white", position: "fixed", top: "50%", left: "50%" })

    // Cache la zone de chargement
    $(this.__loadingZone).hide();

    // Ajoute la zone au body
    $('body').append(this.__loadingZone);
  },

  // Affiche le loading
  Start: function (id) {
    var registerName = this.GetLoadingId(id);

    if (this.isRegisterEmpty()) {
      // Initialize le contrôle
      this.Initialize();
    }

    if (!this.loadingRegistered.hasOwnProperty(registerName)) {
      this.loadingRegistered[registerName] = true;
    }

    $(this.__loadingZone).show();
    this.isLoading = true;
    $(document.body).addClass("nms_isLoading");
  },

  // Cache le loading
  Stop: function (id) {
    var registerName = this.GetLoadingId(id);

    if (this.loadingRegistered.hasOwnProperty(registerName)) {
      delete this.loadingRegistered[registerName];
    }

    if (this.isRegisterEmpty() && this.isLoading) {
      $(this.__loadingZone).hide();
      this.isLoading = false;
      $(document.body).removeClass("nms_isLoading");
    }
  },

  //Fallback du id si nécessaire
  GetLoadingId: function (id)
  {
    return (id || 'default');
  },

  //Si le dictionnaire est vide
  isRegisterEmpty : function () {
      for (var i in this.loadingRegistered) {
        return false;
    }
    return true;
  },

  //Arrête tout les loading
  StopAll: function ()
  {
    this.loadingRegistered = {};
    this.Stop();
  }
  
};

// Instancie le manager de loading
window.NmsLoadingManager = new NmsLoadingManagerClass();
;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true});
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '; path=/'; // NOTE (APR) : on a ajouter le path '/' par d�faut
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', options.raw ? value : encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;
//Required the .keys extension to know if the function added to namespace is used.
if (!Object.keys) {
  Object.keys = function (obj) {
    var keys = [],
        k;
    for (k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        keys.push(k);
      }
    }
    return keys;
  };
}



//If content is function, it pushes the namespace inside the "this".  So every property or 
//function added to "this." will be added to the namespace.
function namespace(namespace, content, isClass) {
  var splitedNamespaces = namespace.split(".");
  var lastStage = null;

  for (var namespaceIndex = 0; namespaceIndex < splitedNamespaces.length; namespaceIndex++) {
    var ns = splitedNamespaces[namespaceIndex];

    if (lastStage == null) {
      //First pass, put the stage to the registered
      lastStage = getNamespaceByRef(window, ns);
    }
    else {
      //next pass, drill down the objects.
      if (isClass && (namespaceIndex == splitedNamespaces.length - 1)) {
        lastStage = lastStage[ns] = content;

      }
      else {
        lastStage = getNamespaceByRef(lastStage, ns);
      }

    }
  }

  //Add all content in the namespace stage
  if (isFunction(content)) {
    var initialContentCount = Object.keys(lastStage).length;
    //Extent current namespace with content marked by "this.xxx" in the function.
    if (!isClass) {
      content.call(lastStage);
      if (initialContentCount == Object.keys(lastStage).length) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("A registered function into the namespace " + namespace + " doesn't add any public function or property.");
        }
      }
    }

  }
  else {
    //Extent namespace with object content
    for (var prop in content) {
      lastStage[prop] = content[prop];
    }
  }

  function getNamespaceByRef(namespaceObject, subNamespaceString, isClassToSet, content) {
    var subNameSpace = namespaceObject[subNamespaceString];
    if (subNameSpace == null) {
      namespaceObject[subNamespaceString] = {};
    }
    return namespaceObject[subNamespaceString];
  }

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
}
// �tend la fonction namespace.
(function (namespace) {
  /// retourne un objet a partir du namespace.
  namespace.getExisting = function (n) {
    var split = n.split(".");

    function down(obj) {
      var level = obj[split[0]];
      split.splice(0, 1);
      return (level) ? (!split.length) ? level : down(level) : null;
    }
    return down(window);
  };


})(namespace);


function namespaceCtor(_namespace, content) {
  namespace(_namespace, content, true);
}
;
(function () {
  namespace('nms.altitude.ContactSessionHelper', function (undefined) {
    var self = this,
        sessionGuidCookieName = "sessionGuid"; // NOTE (slaflamme) : Attention, si on modifie le nom, il doit aussi être modifié dans le SessionControl

    /// Retourne le session guid s'il existe déjà ou en crée un nouveau et le retourne
    self.getSessionGuid = function () {
      // Valide le cookie qui indique si c'est la première fois que l'on fait l'analytique
      if (!$.cookie(sessionGuidCookieName)) {

        var sessionGuid = newGuid();

        // Initialise le cookie
        $.cookie(sessionGuidCookieName, sessionGuid, { expires: 999 });
      }

      return $.cookie(sessionGuidCookieName);
    };

    // Génère aléatoirement quatre caractères d'un guid
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    // Retourne un nouveau guid
    function newGuid () {
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    /// Sauvegarde l'association entre un contact et une session
    self.saveContactSession = function (contactGuid) {
      AltitudeServices.ContactSessionService.SaveContactSession({ contactGuid: contactGuid, sessionGuid: self.getSessionGuid() }, function (result) {
      }, function (response, status, error) {
        throw "erreur de sauvegarde de la session";
      });
    }

  });

})();;
/*	
Watermark plugin for jQuery
Version: 3.0.6
http://jquery-watermark.googlecode.com/

Copyright (c) 2009-2010 Todd Northrop
http://www.speednet.biz/
	
June 21, 2010

Requires:  jQuery 1.2.3+
	
Dual licensed under the MIT or GPL Version 2 licenses.
See mit-license.txt and gpl2-license.txt in the project root for details.
------------------------------------------------------*/

(function($) {

  var 
  // Will speed up references to undefined
	undefined,

  // String constants for data names
	dataFlag = "watermark",
	dataClass = "watermarkClass",
	dataFocus = "watermarkFocus",
	dataFormSubmit = "watermarkSubmit",
	dataMaxLen = "watermarkMaxLength",
	dataPassword = "watermarkPassword",
	dataText = "watermarkText",

  // Includes only elements with watermark defined
	selWatermarkDefined = ":data(" + dataFlag + ")",

  // Includes only elements capable of having watermark
  selWatermarkAble = "input:text,input:password,input:search,textarea,input[type='color'],input[type='date'],input[type='datetime'],input[type='datetime-local'],input[type='email'],input[type='month'],input[type='number'],input[type='tel'],input[type='time'],input[type='url'],input[type='week']",

  // triggerFns:
  // Array of function names to look for in the global namespace.
  // Any such functions found will be hijacked to trigger a call to
  // hideAll() any time they are called.  The default value is the
  // ASP.NET function that validates the controls on the page
  // prior to a postback.
  // 
  // Am I missing other important trigger function(s) to look for?
  // Please leave me feedback:
  // http://code.google.com/p/jquery-watermark/issues/list
	triggerFns = [
		"Page_ClientValidate"
	],

  // Holds a value of true if a watermark was displayed since the last
  // hideAll() was executed. Avoids repeatedly calling hideAll().
	pageDirty = false;

  // Extends jQuery with a custom selector - ":data(...)"
  // :data(<name>)  Includes elements that have a specific name defined in the jQuery data collection. (Only the existence of the name is checked; the value is ignored.)
  // :data(<name>=<value>)  Includes elements that have a specific jQuery data name defined, with a specific value associated with it.
  // :data(<name>!=<value>)  Includes elements that have a specific jQuery data name defined, with a value that is not equal to the value specified.
  // :data(<name>^=<value>)  Includes elements that have a specific jQuery data name defined, with a value that starts with the value specified.
  // :data(<name>$=<value>)  Includes elements that have a specific jQuery data name defined, with a value that ends with the value specified.
  // :data(<name>*=<value>)  Includes elements that have a specific jQuery data name defined, with a value that contains the value specified.
  $.extend($.expr[":"], {
    "search": function(elem) {
      return "search" === (elem.type || "");
    },

    "data": function(element, index, matches, set) {
      var data, parts = /^((?:[^=!^$*]|[!^$*](?!=))+)(?:([!^$*]?=)(.*))?$/.exec(matches[3]);

      if (parts) {
        data = $(element).data(parts[1]);

        if (data !== undefined) {

          if (parts[2]) {
            data = "" + data;

            switch (parts[2]) {
              case "=":
                return (data == parts[3]);
              case "!=":
                return (data != parts[3]);
              case "^=":
                return (data.slice(0, parts[3].length) == parts[3]);
              case "$=":
                return (data.slice(-parts[3].length) == parts[3]);
              case "*=":
                return (data.indexOf(parts[3]) !== -1);
            }
          }

          return true;
        }
      }

      return false;
    }
  });

  $.watermark = {

    // Current version number of the plugin
    version: "3.0.6",

    // Default options used when watermarks are instantiated.
    // Can be changed to affect the default behavior for all
    // new or updated watermarks.
    // BREAKING CHANGE:  The $.watermark.className
    // property that was present prior to version 3.0.2 must
    // be changed to $.watermark.options.className
    options: {

      // Default class name for all watermarks
      className: "watermark",

      // If true, plugin will detect and use native browser support for
      // watermarks, if available. (e.g., WebKit's placeholder attribute.)
      useNative: true
    },

    // Hide one or more watermarks by specifying any selector type
    // i.e., DOM element, string selector, jQuery matched set, etc.
    hide: function(selector) {
      $(selector).filter(selWatermarkDefined).each(
			function() {
			  $.watermark._hide($(this));
			}
		);
    },

    // Internal use only.
    _hide: function($input, focus) {
      var inputVal = $input.val() || "",
			inputWm = $input.data(dataText) || "",
			maxLen = $input.data(dataMaxLen) || 0,
			className = $input.data(dataClass);

      if ((inputWm.length) && (inputVal == inputWm)) {
        $input.val("");

        // Password type?
        if ($input.data(dataPassword)) {

          if (($input.attr("type") || "") === "text") {
            var $pwd = $input.data(dataPassword) || [],
						$wrap = $input.parent() || [];

            if (($pwd.length) && ($wrap.length)) {
              $wrap[0].removeChild($input[0]); // Can't use jQuery methods, because they destroy data
              $wrap[0].appendChild($pwd[0]);
              $input = $pwd;
            }
          }
        }

        if (maxLen) {
          $input.attr("maxLength", maxLen);
          $input.removeData(dataMaxLen);
        }

        if (focus) {
          $input.attr("autocomplete", "off");  // Avoid NS_ERROR_XPC_JS_THREW_STRING error in Firefox

          window.setTimeout(
					function() {
					  $input.select();  // Fix missing cursor in IE
					}
				, 1);
        }
      }

      className && $input.removeClass(className);
    },

    // Display one or more watermarks by specifying any selector type
    // i.e., DOM element, string selector, jQuery matched set, etc.
    // If conditions are not right for displaying a watermark, ensures that watermark is not shown.
    show: function(selector) {
      $(selector).filter(selWatermarkDefined).each(
			function() {
			  $.watermark._show($(this));
			}
		);
    },

    // Internal use only.
    _show: function($input) {
      var val = $input.val() || "",
			text = $input.data(dataText) || "",
			type = $input.attr("type") || "",
			className = $input.data(dataClass);

      if (((val.length == 0) || (val == text)) && (!$input.data(dataFocus))) {
        pageDirty = true;

        // Password type?
        if ($input.data(dataPassword)) {

          if (type === "password") {
            var $pwd = $input.data(dataPassword) || [],
						$wrap = $input.parent() || [];

            if (($pwd.length) && ($wrap.length)) {
              $wrap[0].removeChild($input[0]); // Can't use jQuery methods, because they destroy data
              $wrap[0].appendChild($pwd[0]);
              $input = $pwd;
              $input.attr("maxLength", text.length);
            }
          }
        }

        // Ensure maxLength big enough to hold watermark (input of type="text" or type="search" only)
        if ((type === "text") || (type === "search")) {
          var maxLen = $input.attr("maxLength") || 0;

          if ((maxLen > 0) && (text.length > maxLen)) {
            $input.data(dataMaxLen, maxLen);
            $input.attr("maxLength", text.length);
          }
        }

        className && $input.addClass(className);
        $input.val(text);
      }
      else {
        $.watermark._hide($input);
      }
    },

    // Hides all watermarks on the current page.
    hideAll: function() {
      if (pageDirty) {
        $.watermark.hide(selWatermarkAble);
        pageDirty = false;
      }
    },

    // Displays all watermarks on the current page.
    showAll: function() {
      $.watermark.show(selWatermarkAble);
    }
  };

  $.fn.watermark = function(text, options) {
    ///	<summary>
    ///		Set watermark text and class name on all input elements of type="text/password/search" and
    /// 	textareas within the matched set. If className is not specified in options, the default is
    /// 	"watermark". Within the matched set, only input elements with type="text/password/search"
    /// 	and textareas are affected; all other elements are ignored.
    ///	</summary>
    ///	<returns type="jQuery">
    ///		Returns the original jQuery matched set (not just the input and texarea elements).
    /// </returns>
    ///	<param name="text" type="String">
    ///		Text to display as a watermark when the input or textarea element has an empty value and does not
    /// 	have focus. The first time watermark() is called on an element, if this argument is empty (or not
    /// 	a String type), then the watermark will have the net effect of only changing the class name when
    /// 	the input or textarea element's value is empty and it does not have focus.
    ///	</param>
    ///	<param name="options" type="Object" optional="true">
    ///		Provides the ability to override the default watermark options ($.watermark.options). For backward
    /// 	compatibility, if a string value is supplied, it is used as the class name that overrides the class
    /// 	name in $.watermark.options.className. Properties include:
    /// 		className: When the watermark is visible, the element will be styled using this class name.
    /// 		useNative (Boolean or Function): Specifies if native browser support for watermarks will supersede
    /// 			plugin functionality. If useNative is a function, the return value from the function will
    /// 			determine if native support is used. The function is passed one argument -- a jQuery object
    /// 			containing the element being tested as the only element in its matched set -- and the DOM
    /// 			element being tested is the object on which the function is invoked (the value of "this").
    ///	</param>
    /// <remarks>
    ///		The effect of changing the text and class name on an input element is called a watermark because
    ///		typically light gray text is used to provide a hint as to what type of input is required. However,
    ///		the appearance of the watermark can be something completely different: simply change the CSS style
    ///		pertaining to the supplied class name.
    ///		
    ///		The first time watermark() is called on an element, the watermark text and class name are initialized,
    ///		and the focus and blur events are hooked in order to control the display of the watermark.  Also, as
    /// 	of version 3.0, drag and drop events are hooked to guard against dropped text being appended to the
    /// 	watermark.  If native watermark support is provided by the browser, it is detected and used, unless
    /// 	the useNative option is set to false.
    ///		
    ///		Subsequently, watermark() can be called again on an element in order to change the watermark text
    ///		and/or class name, and it can also be called without any arguments in order to refresh the display.
    ///		
    ///		For example, after changing the value of the input or textarea element programmatically, watermark()
    /// 	should be called without any arguments to refresh the display, because the change event is only
    /// 	triggered by user actions, not by programmatic changes to an input or textarea element's value.
    /// 	
    /// 	The one exception to programmatic updates is for password input elements:  you are strongly cautioned
    /// 	against changing the value of a password input element programmatically (after the page loads).
    /// 	The reason is that some fairly hairy code is required behind the scenes to make the watermarks bypass
    /// 	IE security and switch back and forth between clear text (for watermarks) and obscured text (for
    /// 	passwords).  It is *possible* to make programmatic changes, but it must be done in a certain way, and
    /// 	overall it is not recommended.
    /// </remarks>

    if (!this.length) {
      return this;
    }

    var hasClass = false,
		hasText = (typeof (text) === "string");

    if (typeof (options) === "object") {
      hasClass = (typeof (options.className) === "string");
      options = $.extend({}, $.watermark.options, options);
    }
    else if (typeof (options) === "string") {
      hasClass = true;
      options = $.extend({}, $.watermark.options, { className: options });
    }
    else {
      options = $.watermark.options;
    }

    if (typeof (options.useNative) !== "function") {
      options.useNative = options.useNative ? function() { return true; } : function() { return false; };
    }

    return this.each(
		function() {
		  var $input = $(this);

		  if (!$input.is(selWatermarkAble)) {
		    return;
		  }

		  // Watermark already initialized?
		  if ($input.data(dataFlag)) {

		    // If re-defining text or class, first remove existing watermark, then make changes
		    if (hasText || hasClass) {
		      $.watermark._hide($input);

		      if (hasText) {
		        $input.data(dataText, text);
		      }

		      if (hasClass) {
		        $input.data(dataClass, options.className);
		      }
		    }
		  }
		  else {

		    // Detect and use native browser support, if enabled in options
		    if (typeof $input[0].placeholder != 'undefined') {
		      $input.attr("placeholder", text);
		      return;
		    }

		    $input.data(dataText, hasText ? text : "");
		    $input.data(dataClass, options.className);
		    $input.data(dataFlag, 1); // Flag indicates watermark was initialized

		    // Special processing for password type
		    if (($input.attr("type") || "") === "password") {
		      var $wrap = $input.wrap("<span>").parent(),
						$wm = $($wrap.html().replace(/type=["']?password["']?/i, 'type="text"'));

		      $wm.data(dataText, $input.data(dataText));
		      $wm.data(dataClass, $input.data(dataClass));
		      $wm.data(dataFlag, 1);
		      $wm.attr("maxLength", text.length);

		      $wm.focus(
						function() {
						  $.watermark._hide($wm, true);
						}
					).bind("dragenter",
						function() {
						  $.watermark._hide($wm);
						}
					).bind("dragend",
						function() {
						  window.setTimeout(function() { $wm.blur(); }, 1);
						}
					);
		      $input.blur(
						function() {
						  $.watermark._show($input);
						}
					).bind("dragleave",
						function() {
						  $.watermark._show($input);
						}
					);

		      $wm.data(dataPassword, $input);
		      $input.data(dataPassword, $wm);
		    }
		    else {

		      $input.focus(
						function() {
						  $input.data(dataFocus, 1);
						  $.watermark._hide($input, true);
						}
					).blur(
						function() {
						  $input.data(dataFocus, 0);
						  $.watermark._show($input);
						}
					).bind("dragenter",
						function() {
						  $.watermark._hide($input);
						}
					).bind("dragleave",
						function() {
						  $.watermark._show($input);
						}
					).bind("dragend",
						function() {
						  window.setTimeout(function() { $.watermark._show($input); }, 1);
						}
					).bind("drop",
		      // Firefox makes this lovely function necessary because the dropped text
		      // is merged with the watermark before the drop event is called.
						function(evt) {
						  var dropText = evt.originalEvent.dataTransfer.getData("Text");

						  if ($input.val().replace(dropText, "") === $input.data(dataText)) {
						    $input.val(dropText);
						  }

						  $input.focus();
						}
					);
		    }

		    // In order to reliably clear all watermarks before form submission,
		    // we need to replace the form's submit function with our own
		    // function.  Otherwise watermarks won't be cleared when the form
		    // is submitted programmatically.
		    /*if (this.form) {
		    var form = this.form,
		    $form = $(form);

		      if (!$form.data(dataFormSubmit)) {
		    $form.submit($.watermark.hideAll);

		        // form.submit exists for all browsers except Google Chrome
		    // (see "else" below for explanation)
		    if (form.submit) {
		    $form.data(dataFormSubmit, form.submit);

		          form.submit = (function(f, $f) {
		    return function() {
		    var nativeSubmit = $f.data(dataFormSubmit);

		              $.watermark.hideAll();

		              if (nativeSubmit.apply) {
		    nativeSubmit.apply(f, Array.prototype.slice.call(arguments));
		    }
		    else {
		    nativeSubmit();
		    }
		    };
		    })(form, $form);
		    }
		    else {
		    $form.data(dataFormSubmit, 1);

		          // This strangeness is due to the fact that Google Chrome's
		    // form.submit function is not visible to JavaScript (identifies
		    // as "undefined").  I had to invent a solution here because hours
		    // of Googling (ironically) for an answer did not turn up anything
		    // useful.  Within my own form.submit function I delete the form's
		    // submit function, and then call the non-existent function --
		    // which, in the world of Google Chrome, still exists.
		    form.submit = (function(f) {
		    return function() {
		    $.watermark.hideAll();
		    delete f.submit;
		    f.submit();
		    };
		    })(form);
		    }
		    }
		    }*/
		  }

		  $.watermark._show($input);
		}
	);
  };

  // Hijack any functions found in the triggerFns list
  if (triggerFns.length) {

    // Wait until DOM is ready before searching
    $(function() {
      var i, name, fn;

      for (i = triggerFns.length - 1; i >= 0; i--) {
        name = triggerFns[i];
        fn = window[name];

        if (typeof (fn) === "function") {
          window[name] = (function(origFn) {
            return function() {
              $.watermark.hideAll();
              return origFn.apply(null, Array.prototype.slice.call(arguments));
            };
          })(fn);
        }
      }
    });
  }

})(jQuery);
;
/*!
 * jQuery Form Plugin
 * version: 3.27.0-2013.02.06
 * @requires jQuery v1.5 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
/*global ActiveXObject alert */
; (function ($) {
  "use strict";

  /*
      Usage Note:
      -----------
      Do not use both ajaxSubmit and ajaxForm on the same form.  These
      functions are mutually exclusive.  Use ajaxSubmit if you want
      to bind your own submit handler to the form.  For example,
  
      $(document).ready(function() {
          $('#myForm').on('submit', function(e) {
              e.preventDefault(); // <-- important
              $(this).ajaxSubmit({
                  target: '#output'
              });
          });
      });
  
      Use ajaxForm when you want the plugin to manage all the event binding
      for you.  For example,
  
      $(document).ready(function() {
          $('#myForm').ajaxForm({
              target: '#output'
          });
      });
  
      You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
      form does not have to exist when you invoke ajaxForm:
  
      $('#myForm').ajaxForm({
          delegation: true,
          target: '#output'
      });
  
      When using ajaxForm, the ajaxSubmit function will be invoked for you
      at the appropriate time.
  */

  /**
   * Feature detection
   */
  var feature = {};
  feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
  feature.formdata = window.FormData !== undefined;

  /**
   * ajaxSubmit() provides a mechanism for immediately submitting
   * an HTML form using AJAX.
   */
  $.fn.ajaxSubmit = function (options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
      log('ajaxSubmit: skipping submit process - no element selected');
      return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
      options = { success: options };
    }

    method = this.attr('method');
    action = this.attr('action');
    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
      // clean url (don't include hash vaue)
      url = (url.match(/^([^#]+)/) || [])[1];
    }

    options = $.extend(true, {
      url: url,
      success: $.ajaxSettings.success,
      type: method || 'GET',
      iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
      log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
      return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
      log('ajaxSubmit: submit aborted via beforeSerialize callback');
      return this;
    }

    var traditional = options.traditional;
    if (traditional === undefined) {
      traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
      options.extraData = options.data;
      qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
      log('ajaxSubmit: submit aborted via beforeSubmit callback');
      return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
      log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
      return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
      q = (q ? (q + '&' + qx) : qx);
    }
    if (options.type.toUpperCase() == 'GET') {
      options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
      options.data = null;  // data is null for 'get'
    }
    else {
      options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
      callbacks.push(function () { $form.resetForm(); });
    }
    if (options.clearForm) {
      callbacks.push(function () { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
      var oldSuccess = options.success || function () { };
      callbacks.push(function (data) {
        var fn = options.replaceTarget ? 'replaceWith' : 'html';
        $(options.target)[fn](data).each(oldSuccess, arguments);
      });
    }
    else if (options.success) {
      callbacks.push(options.success);
    }

    options.success = function (data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
      var context = options.context || this;    // jQuery 1.4+ supports scope context
      for (var i = 0, max = callbacks.length; i < max; i++) {
        callbacks[i].apply(context, [data, status, xhr || $form, $form]);
      }
    };

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled[value!=""]', this);

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
      // hack to fix Safari hang (thanks to Tim Molendijk for this)
      // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
      if (options.closeKeepAlive) {
        $.get(options.closeKeepAlive, function () {
          jqxhr = fileUploadIframe(a);
        });
      }
      else {
        jqxhr = fileUploadIframe(a);
      }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
      jqxhr = fileUploadXhr(a);
    }
    else {
      jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k = 0; k < elements.length; k++)
      elements[k] = null;

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData) {
      var serialized = $.param(extraData).split('&');
      var len = serialized.length;
      var result = [];
      var i, part;
      for (i = 0; i < len; i++) {
        // #252; undo param space replacement
        serialized[i] = serialized[i].replace(/\+/g, ' ');
        part = serialized[i].split('=');
        // #278; use array instead of object storage, favoring array serializations
        result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
      }
      return result;
    }

    // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
      var formdata = new FormData();

      for (var i = 0; i < a.length; i++) {
        formdata.append(a[i].name, a[i].value);
      }

      if (options.extraData) {
        var serializedData = deepSerialize(options.extraData);
        for (i = 0; i < serializedData.length; i++)
          if (serializedData[i])
            formdata.append(serializedData[i][0], serializedData[i][1]);
      }

      options.data = null;

      var s = $.extend(true, {}, $.ajaxSettings, options, {
        contentType: false,
        processData: false,
        cache: false,
        type: method || 'POST'
      });

      if (options.uploadProgress) {
        // workaround because jqXHR does not expose upload property
        s.xhr = function () {
          var xhr = jQuery.ajaxSettings.xhr();
          if (xhr.upload) {
            xhr.upload.addEventListener('progress', function (event) {
              var percent = 0;
              var position = event.loaded || event.position; /*event.position is deprecated*/
              var total = event.total;
              if (event.lengthComputable) {
                percent = Math.ceil(position / total * 100);
              }
              options.uploadProgress(event, position, total, percent);
            }, false);
          }
          return xhr;
        };
      }

      s.data = null;
      var beforeSend = s.beforeSend;
      s.beforeSend = function (xhr, o) {
        o.data = formdata;
        if (beforeSend)
          beforeSend.call(this, xhr, o);
      };
      return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
      var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
      var useProp = !!$.fn.prop;
      var deferred = $.Deferred();

      if (a) {
        // ensure that every serialized input is still enabled
        for (i = 0; i < elements.length; i++) {
          el = $(elements[i]);
          if (useProp)
            el.prop('disabled', false);
          else
            el.removeAttr('disabled');
        }
      }

      s = $.extend(true, {}, $.ajaxSettings, options);
      s.context = s.context || s;
      id = 'jqFormIO' + (new Date().getTime());
      if (s.iframeTarget) {
        $io = $(s.iframeTarget);
        n = $io.attr('name');
        if (!n)
          $io.attr('name', id);
        else
          id = n;
      }
      else {
        $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />');
        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
      }
      io = $io[0];


      xhr = { // mock object
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: 'n/a',
        getAllResponseHeaders: function () { },
        getResponseHeader: function () { },
        setRequestHeader: function () { },
        abort: function (status) {
          var e = (status === 'timeout' ? 'timeout' : 'aborted');
          log('aborting upload... ' + e);
          this.aborted = 1;

          try { // #214, #257
            if (io.contentWindow.document.execCommand) {
              io.contentWindow.document.execCommand('Stop');
            }
          }
          catch (ignore) { }

          $io.attr('src', s.iframeSrc); // abort op in progress
          xhr.error = e;
          if (s.error)
            s.error.call(s.context, xhr, e, status);
          if (g)
            $.event.trigger("ajaxError", [xhr, s, e]);
          if (s.complete)
            s.complete.call(s.context, xhr, e);
        }
      };

      g = s.global;
      // trigger ajax global events so that activity/block indicators work like normal
      if (g && 0 === $.active++) {
        $.event.trigger("ajaxStart");
      }
      if (g) {
        $.event.trigger("ajaxSend", [xhr, s]);
      }

      if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
        if (s.global) {
          $.active--;
        }
        deferred.reject();
        return deferred;
      }
      if (xhr.aborted) {
        deferred.reject();
        return deferred;
      }

      // add submitting element to data if we know it
      sub = form.clk;
      if (sub) {
        n = sub.name;
        if (n && !sub.disabled) {
          s.extraData = s.extraData || {};
          s.extraData[n] = sub.value;
          if (sub.type == "image") {
            s.extraData[n + '.x'] = form.clk_x;
            s.extraData[n + '.y'] = form.clk_y;
          }
        }
      }

      var CLIENT_TIMEOUT_ABORT = 1;
      var SERVER_ABORT = 2;

      function getDoc(frame) {
        var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
        return doc;
      }

      // Rails CSRF hack (thanks to Yvan Barthelemy)
      var csrf_token = $('meta[name=csrf-token]').attr('content');
      var csrf_param = $('meta[name=csrf-param]').attr('content');
      if (csrf_param && csrf_token) {
        s.extraData = s.extraData || {};
        s.extraData[csrf_param] = csrf_token;
      }

      // take a breath so that pending repaints get some cpu time before the upload starts
      function doSubmit() {
        // make sure form attrs are set
        var t = $form.attr('target'), a = $form.attr('action');

        // update form attrs in IE friendly way
        form.setAttribute('target', id);
        if (!method) {
          form.setAttribute('method', 'POST');
        }
        if (a != s.url) {
          form.setAttribute('action', s.url);
        }

        // ie borks in some cases when setting encoding
        if (!s.skipEncodingOverride && (!method || /post/i.test(method))) {
          $form.attr({
            encoding: 'multipart/form-data',
            enctype: 'multipart/form-data'
          });
        }

        // support timout
        if (s.timeout) {
          timeoutHandle = setTimeout(function () { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
        }

        // look for server aborts
        function checkState() {
          try {
            var state = getDoc(io).readyState;
            log('state = ' + state);
            if (state && state.toLowerCase() == 'uninitialized')
              setTimeout(checkState, 50);
          }
          catch (e) {
            log('Server abort: ', e, ' (', e.name, ')');
            cb(SERVER_ABORT);
            if (timeoutHandle)
              clearTimeout(timeoutHandle);
            timeoutHandle = undefined;
          }
        }

        // add "extra" data to form if provided in options
        var extraInputs = [];
        try {
          if (s.extraData) {
            for (var n in s.extraData) {
              if (s.extraData.hasOwnProperty(n)) {
                // if using the $.param format that allows for multiple values with the same name
                if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                  extraInputs.push(
                  $('<input type="hidden" name="' + s.extraData[n].name + '">').val(s.extraData[n].value)
                      .appendTo(form)[0]);
                } else {
                  extraInputs.push(
                  $('<input type="hidden" name="' + n + '">').val(s.extraData[n])
                      .appendTo(form)[0]);
                }
              }
            }
          }

          if (!s.iframeTarget) {
            // add iframe to doc and submit the form
            $io.appendTo('body');
            if (io.attachEvent)
              io.attachEvent('onload', cb);
            else
              io.addEventListener('load', cb, false);
          }
          setTimeout(checkState, 15);
          // just in case form has element with name/id of 'submit'
          var submitFn = document.createElement('form').submit;
          submitFn.apply(form);
        }
        finally {
          // reset attrs and remove "extra" input elements
          form.setAttribute('action', a);
          if (t) {
            form.setAttribute('target', t);
          } else {
            $form.removeAttr('target');
          }
          $(extraInputs).remove();
        }
      }

      if (s.forceSync) {
        doSubmit();
      }
      else {
        setTimeout(doSubmit, 10); // this lets dom updates render
      }

      var data, doc, domCheckCount = 50, callbackProcessed;

      function cb(e) {
        if (xhr.aborted || callbackProcessed) {
          return;
        }
        try {
          doc = getDoc(io);
        }
        catch (ex) {
          log('cannot access response document: ', ex);
          e = SERVER_ABORT;
        }
        if (e === CLIENT_TIMEOUT_ABORT && xhr) {
          xhr.abort('timeout');
          deferred.reject(xhr, 'timeout');
          return;
        }
        else if (e == SERVER_ABORT && xhr) {
          xhr.abort('server abort');
          deferred.reject(xhr, 'error', 'server abort');
          return;
        }

        if (!doc || doc.location.href == s.iframeSrc) {
          // response not received yet
          if (!timedOut)
            return;
        }
        if (io.detachEvent)
          io.detachEvent('onload', cb);
        else
          io.removeEventListener('load', cb, false);

        var status = 'success', errMsg;
        try {
          if (timedOut) {
            throw 'timeout';
          }

          var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
          log('isXml=' + isXml);
          if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
            if (--domCheckCount) {
              // in some browsers (Opera) the iframe DOM is not always traversable when
              // the onload callback fires, so we loop a bit to accommodate
              log('requeing onLoad callback, DOM not available');
              setTimeout(cb, 250);
              return;
            }
            // let this fall through because server response could be an empty document
            //log('Could not access iframe DOM after mutiple tries.');
            //throw 'DOMException: not available';
          }

          //log('response detected');
          var docRoot = doc.body ? doc.body : doc.documentElement;
          xhr.responseText = docRoot ? docRoot.innerHTML : null;
          xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
          if (isXml)
            s.dataType = 'xml';
          xhr.getResponseHeader = function (header) {
            var headers = { 'content-type': s.dataType };
            return headers[header];
          };
          // support for XHR 'status' & 'statusText' emulation :
          if (docRoot) {
            xhr.status = Number(docRoot.getAttribute('status')) || xhr.status;
            xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
          }

          var dt = (s.dataType || '').toLowerCase();
          var scr = /(json|script|text)/.test(dt);
          if (scr || s.textarea) {
            // see if user embedded response in textarea
            var ta = doc.getElementsByTagName('textarea')[0];
            if (ta) {
              xhr.responseText = ta.value;
              // support for XHR 'status' & 'statusText' emulation :
              xhr.status = Number(ta.getAttribute('status')) || xhr.status;
              xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
            }
            else if (scr) {
              // account for browsers injecting pre around json response
              var pre = doc.getElementsByTagName('pre')[0];
              var b = doc.getElementsByTagName('body')[0];
              if (pre) {
                xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
              }
              else if (b) {
                xhr.responseText = b.textContent ? b.textContent : b.innerText;
              }
            }
          }
          else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
            xhr.responseXML = toXml(xhr.responseText);
          }

          try {
            data = httpData(xhr, dt, s);
          }
          catch (e) {
            status = 'parsererror';
            xhr.error = errMsg = (e || status);
          }
        }
        catch (e) {
          log('error caught: ', e);
          status = 'error';
          xhr.error = errMsg = (e || status);
        }

        if (xhr.aborted) {
          log('upload aborted');
          status = null;
        }

        if (xhr.status) { // we've set xhr.status
          status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
        }

        // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
        if (status === 'success') {
          if (s.success)
            s.success.call(s.context, data, 'success', xhr);
          deferred.resolve(xhr.responseText, 'success', xhr);
          if (g)
            $.event.trigger("ajaxSuccess", [xhr, s]);
        }
        else if (status) {
          if (errMsg === undefined)
            errMsg = xhr.statusText;
          if (s.error)
            s.error.call(s.context, xhr, status, errMsg);
          deferred.reject(xhr, 'error', errMsg);
          if (g)
            $.event.trigger("ajaxError", [xhr, s, errMsg]);
        }

        if (g)
          $.event.trigger("ajaxComplete", [xhr, s]);

        if (g && ! --$.active) {
          $.event.trigger("ajaxStop");
        }

        if (s.complete)
          s.complete.call(s.context, xhr, status);

        callbackProcessed = true;
        if (s.timeout)
          clearTimeout(timeoutHandle);

        // clean up
        setTimeout(function () {
          if (!s.iframeTarget)
            $io.remove();
          xhr.responseXML = null;
        }, 100);
      }

      var toXml = $.parseXML || function (s, doc) { // use parseXML if available (jQuery 1.5+)
        if (window.ActiveXObject) {
          doc = new ActiveXObject('Microsoft.XMLDOM');
          doc.async = 'false';
          doc.loadXML(s);
        }
        else {
          doc = (new DOMParser()).parseFromString(s, 'text/xml');
        }
        return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
      };
      var parseJSON = $.parseJSON || function (s) {
        /*jslint evil:true */
        return window['eval']('(' + s + ')');
      };

      var httpData = function (xhr, type, s) { // mostly lifted from jq1.4.4

        var ct = xhr.getResponseHeader('content-type') || '',
            xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
            data = xml ? xhr.responseXML : xhr.responseText;

        if (xml && data.documentElement.nodeName === 'parsererror') {
          if ($.error)
            $.error('parsererror');
        }
        if (s && s.dataFilter) {
          data = s.dataFilter(data, type);
        }
        if (typeof data === 'string') {
          if (type === 'json' || !type && ct.indexOf('json') >= 0) {
            data = parseJSON(data);
          } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
            $.globalEval(data);
          }
        }
        return data;
      };

      return deferred;
    }
  };

  /**
   * ajaxForm() provides a mechanism for fully automating form submission.
   *
   * The advantages of using this method instead of ajaxSubmit() are:
   *
   * 1: This method will include coordinates for <input type="image" /> elements (if the element
   *    is used to submit the form).
   * 2. This method will include the submit element's name/value data (for the element that was
   *    used to submit the form).
   * 3. This method binds the submit() method to the form for you.
   *
   * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
   * passes the options argument along after properly binding events for submit elements and
   * the form itself.
   */
  $.fn.ajaxForm = function (options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
      var o = { s: this.selector, c: this.context };
      if (!$.isReady && o.s) {
        log('DOM not ready, queuing ajaxForm');
        $(function () {
          $(o.s, o.c).ajaxForm(options);
        });
        return this;
      }
      // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
      log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
      return this;
    }

    if (options.delegation) {
      $(document)
          .off('submit.form-plugin', this.selector, doAjaxSubmit)
          .off('click.form-plugin', this.selector, captureSubmittingElement)
          .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
          .on('click.form-plugin', this.selector, options, captureSubmittingElement);
      return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
  };

  // private event handlers
  function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
      e.preventDefault();
      $(this).ajaxSubmit(options);
    }
  }

  function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
      // is this a child element of the submit el?  (ex: a span within a button)
      var t = $el.closest('[type=submit]');
      if (t.length === 0) {
        return;
      }
      target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
      if (e.offsetX !== undefined) {
        form.clk_x = e.offsetX;
        form.clk_y = e.offsetY;
      } else if (typeof $.fn.offset == 'function') {
        var offset = $el.offset();
        form.clk_x = e.pageX - offset.left;
        form.clk_y = e.pageY - offset.top;
      } else {
        form.clk_x = e.pageX - target.offsetLeft;
        form.clk_y = e.pageY - target.offsetTop;
      }
    }
    // clear form vars
    setTimeout(function () { form.clk = form.clk_x = form.clk_y = null; }, 100);
  }


  // ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
  $.fn.ajaxFormUnbind = function () {
    return this.unbind('submit.form-plugin click.form-plugin');
  };

  /**
   * formToArray() gathers form element data into an array of objects that can
   * be passed to any of the following ajax functions: $.get, $.post, or load.
   * Each object in the array has both a 'name' and 'value' property.  An example of
   * an array for a simple login form might be:
   *
   * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
   *
   * It is this array that is passed to pre-submit callback functions provided to the
   * ajaxSubmit() and ajaxForm() methods.
   */
  $.fn.formToArray = function (semantic, elements) {
    var a = [];
    if (this.length === 0) {
      return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
      return a;
    }

    var i, j, n, v, el, max, jmax;
    for (i = 0, max = els.length; i < max; i++) {
      el = els[i];
      n = el.name;
      if (!n) {
        continue;
      }

      if (semantic && form.clk && el.type == "image") {
        // handle image inputs on the fly when semantic == true
        if (!el.disabled && form.clk == el) {
          a.push({ name: n, value: $(el).val(), type: el.type });
          a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
        }
        continue;
      }

      v = $.fieldValue(el, true);
      if (v && v.constructor == Array) {
        if (elements)
          elements.push(el);
        for (j = 0, jmax = v.length; j < jmax; j++) {
          a.push({ name: n, value: v[j] });
        }
      }
      else if (feature.fileapi && el.type == 'file' && !el.disabled) {
        if (elements)
          elements.push(el);
        var files = el.files;
        if (files.length) {
          for (j = 0; j < files.length; j++) {
            a.push({ name: n, value: files[j], type: el.type });
          }
        }
        else {
          // #180
          a.push({ name: n, value: '', type: el.type });
        }
      }
      else if (v !== null && typeof v != 'undefined') {
        if (elements)
          elements.push(el);
        a.push({ name: n, value: v, type: el.type, required: el.required });
      }
    }

    if (!semantic && form.clk) {
      // input type=='image' are not found in elements array! handle it here
      var $input = $(form.clk), input = $input[0];
      n = input.name;
      if (n && !input.disabled && input.type == 'image') {
        a.push({ name: n, value: $input.val() });
        a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y });
      }
    }
    return a;
  };

  /**
   * Serializes form data into a 'submittable' string. This method will return a string
   * in the format: name1=value1&amp;name2=value2
   */
  $.fn.formSerialize = function (semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
  };

  /**
   * Serializes all field elements in the jQuery object into a query string.
   * This method will return a string in the format: name1=value1&amp;name2=value2
   */
  $.fn.fieldSerialize = function (successful) {
    var a = [];
    this.each(function () {
      var n = this.name;
      if (!n) {
        return;
      }
      var v = $.fieldValue(this, successful);
      if (v && v.constructor == Array) {
        for (var i = 0, max = v.length; i < max; i++) {
          a.push({ name: n, value: v[i] });
        }
      }
      else if (v !== null && typeof v != 'undefined') {
        a.push({ name: this.name, value: v });
      }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
  };

  /**
   * Returns the value(s) of the element in the matched set.  For example, consider the following form:
   *
   *  <form><fieldset>
   *      <input name="A" type="text" />
   *      <input name="A" type="text" />
   *      <input name="B" type="checkbox" value="B1" />
   *      <input name="B" type="checkbox" value="B2"/>
   *      <input name="C" type="radio" value="C1" />
   *      <input name="C" type="radio" value="C2" />
   *  </fieldset></form>
   *
   *  var v = $('input[type=text]').fieldValue();
   *  // if no values are entered into the text inputs
   *  v == ['','']
   *  // if values entered into the text inputs are 'foo' and 'bar'
   *  v == ['foo','bar']
   *
   *  var v = $('input[type=checkbox]').fieldValue();
   *  // if neither checkbox is checked
   *  v === undefined
   *  // if both checkboxes are checked
   *  v == ['B1', 'B2']
   *
   *  var v = $('input[type=radio]').fieldValue();
   *  // if neither radio is checked
   *  v === undefined
   *  // if first radio is checked
   *  v == ['C1']
   *
   * The successful argument controls whether or not the field element must be 'successful'
   * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
   * The default value of the successful argument is true.  If this value is false the value(s)
   * for each element is returned.
   *
   * Note: This method *always* returns an array.  If no valid value can be determined the
   *    array will be empty, otherwise it will contain one or more values.
   */
  $.fn.fieldValue = function (successful) {
    for (var val = [], i = 0, max = this.length; i < max; i++) {
      var el = this[i];
      var v = $.fieldValue(el, successful);
      if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
        continue;
      }
      if (v.constructor == Array)
        $.merge(val, v);
      else
        val.push(v);
    }
    return val;
  };

  /**
   * Returns the value of the field element.
   */
  $.fieldValue = function (el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
      successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
      return null;
    }

    if (tag == 'select') {
      var index = el.selectedIndex;
      if (index < 0) {
        return null;
      }
      var a = [], ops = el.options;
      var one = (t == 'select-one');
      var max = (one ? index + 1 : ops.length);
      for (var i = (one ? index : 0) ; i < max; i++) {
        var op = ops[i];
        if (op.selected) {
          var v = op.value;
          if (!v) { // extra pain for IE...
            v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
          }
          if (one) {
            return v;
          }
          a.push(v);
        }
      }
      return a;
    }
    return $(el).val();
  };

  /**
   * Clears the form data.  Takes the following actions on the form's input fields:
   *  - input text fields will have their 'value' property set to the empty string
   *  - select elements will have their 'selectedIndex' property set to -1
   *  - checkbox and radio inputs will have their 'checked' property set to false
   *  - inputs of type submit, button, reset, and hidden will *not* be effected
   *  - button elements will *not* be effected
   */
  $.fn.clearForm = function (includeHidden) {
    return this.each(function () {
      $('input,select,textarea', this).clearFields(includeHidden);
    });
  };

  /**
   * Clears the selected form elements.
   */
  $.fn.clearFields = $.fn.clearInputs = function (includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function () {
      var t = this.type, tag = this.tagName.toLowerCase();
      if (re.test(t) || tag == 'textarea') {
        this.value = '';
      }
      else if (t == 'checkbox' || t == 'radio') {
        this.checked = false;
      }
      else if (tag == 'select') {
        this.selectedIndex = -1;
      }
      else if (t == "file") {
        if (/MSIE/.test(navigator.userAgent)) {
          $(this).replaceWith($(this).clone());
        } else {
          $(this).val('');
        }
      }
      else if (includeHidden) {
        // includeHidden can be the value true, or it can be a selector string
        // indicating a special test; for example:
        //  $('#myForm').clearForm('.special:hidden')
        // the above would clean hidden inputs that have the class of 'special'
        if ((includeHidden === true && /hidden/.test(t)) ||
             (typeof includeHidden == 'string' && $(this).is(includeHidden)))
          this.value = '';
      }
    });
  };

  /**
   * Resets the form data.  Causes all form elements to be reset to their original value.
   */
  $.fn.resetForm = function () {
    return this.each(function () {
      // guard against an input with the name of 'reset'
      // note that IE reports the reset function as an 'object'
      if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
        this.reset();
      }
    });
  };

  /**
   * Enables or disables any matching elements.
   */
  $.fn.enable = function (b) {
    if (b === undefined) {
      b = true;
    }
    return this.each(function () {
      this.disabled = !b;
    });
  };

  /**
   * Checks/unchecks any matching checkboxes or radio buttons and
   * selects/deselects and matching option elements.
   */
  $.fn.selected = function (select) {
    if (select === undefined) {
      select = true;
    }
    return this.each(function () {
      var t = this.type;
      if (t == 'checkbox' || t == 'radio') {
        this.checked = select;
      }
      else if (this.tagName.toLowerCase() == 'option') {
        var $sel = $(this).parent('select');
        if (select && $sel[0] && $sel[0].type == 'select-one') {
          // deselect all other options
          $sel.find('option').selected(false);
        }
        this.selected = select;
      }
    });
  };

  // expose debug var
  $.fn.ajaxSubmit.debug = false;

  // helper fn for console logging
  function log() {
    if (!$.fn.ajaxSubmit.debug)
      return;
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
    if (window.console && window.console.log) {
      window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
      window.opera.postError(msg);
    }
  }

})(jQuery);;
// Expression de recherche
var __searchWordExpression = new RegExp("(#|&|_)keyword=[^&=]*($|&|=)");
var __searchForProductWordExpression = new RegExp("(#|&|_)Search=[^&=]*($|&|=)");

// Constructeur d'un nouveau BrokerManager
BrokerManagerClass = function () {
  // Instancie un nouveau vecteur de Brokers
  this.Brokers = new Array();
  this.BrokersToUpdateBeforeSubmit = new Array();
  // Exemple de chose à ajouter dans le brokers to update before submit : 
  /*
  {
    BrokerName : "NomDuBroker",
    ID : "12589658463175616"
  }
  */
}

BrokerManagerClass.prototype = {
  /// indique si l'élément est une date.
  isDate: function (date) {
    return ((date instanceof Date && !isNaN(date.valueOf()))
            || (!/^\d+$/.test(date) && !isNaN(new Date(date))));
  },

  // Définit un broker
  SetBroker: function (brokerName, brokerValue) {

    // Valide le nom
    if (brokerName != null) {
      var brokerList = $("[brokeridentifier='" + brokerName + "']");
      this.ChangeBrokerText(brokerList, brokerValue);
    }

    for (i = 0; i < this.Brokers.length; i++) {
      if (this.Brokers[i].BrokerName == brokerName) {
        // Définit la valeur
        this.Brokers[i].BrokerValue = brokerValue;
        return;
      }
    }

    // Définit un nouveau broker
    this.Brokers.push(new Broker(brokerName, brokerValue));
  },

  SetBrokerToUpdate: function (brokerName, brokerId) {
    var brokerToAdd = {
      BrokerName: brokerName,
      ID: brokerId
    }

    this.BrokersToUpdateBeforeSubmit.push(brokerToAdd);
  },

  UpdateBrokers: function () {
    var self = this;
    $.each(this.BrokersToUpdateBeforeSubmit, function (index, item) {
      self.SetBroker(item.BrokerName, $('#' + item.ID).val());
    });
  },
  // Obtient un broker
  GetBroker: function (brokerName) {
    for (i = 0; i < this.Brokers.length; i++) {
      if (this.Brokers[i].BrokerName == brokerName) {
        // Obtient la valeur
        return this.Brokers[i].BrokerValue;
      }
    }
    // Retourne chaine vide
    return "";
  },

  ChangeBrokerText: function (brokerList, brokerValue) {
    try {
      var format,
        formattedValue = "",
        brokerTextChildClass = null;

      for (var i = 0; i < brokerList.length; i++) {
        format = $(brokerList[i]).attr("data-format");
        if (format) {
          // format de date
          if (this.isDate(brokerValue)) {
            formattedValue = new Date(brokerValue).toString(format);
          }
        }

        // On vérifie si on a la propriété indiquant que c'est un enfant que l'on doit modifier
        brokerTextChildClass = $(brokerList[i]).attr("data-brokerTextChildClass");

        if (brokerTextChildClass) {
          // on modifie la classe enfant demandée
          $(brokerList[i]).find('.' + brokerTextChildClass).text(formattedValue == "" ? brokerValue : formattedValue);
        } else {
          if (brokerList[i].tagName === 'INPUT') {
            $(brokerList[i]).val(formattedValue == "" ? brokerValue : formattedValue);
          } else {
            // Met à jour le broker
            $(brokerList[i]).text(formattedValue == "" ? brokerValue : formattedValue);
          }
        }

        formattedValue = "";
      }
    }
    catch (e) {
    }
  },

  // Obtient la date en cours
  GetDateTimeNow: function (format, cultureID, resultDelegate) {
    $.ajax({
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: '/Service/DateTimeService.asmx/GetDateTimeNow',
      data: "{'format': '" + format + "', 'cultureID': '" + cultureID + "'}",
      success: function (result) {
        resultDelegate(result.d);
      },
      error: function (exception) {

      }
    });
  }
}

// Constructeur d'un nouveau broker
Broker = function (brokerName, brokerValue) {
  this.BrokerName = brokerName;
  this.BrokerValue = brokerValue;
}

// Instancie un BrokerManager
var BrokerManager = new BrokerManagerClass();

(function () {
  // Todo(Slepine) : Dès que les Namespace seront supporté, mettre le code ci-dessous dans le Namespace
  function GetWordFromHash() {
    // Obtient la recherche
    var qaMatch = __searchWordExpression.exec(document.location.href);

    // Si on obtient pas de résultats avec la regex de 'keyword' on regarde avec la regex de 'Search'
    if (qaMatch == null) {
      qaMatch = __searchForProductWordExpression.exec(document.location.href);
    }

    // Valide si la recherche match existe
    if (qaMatch != null && qaMatch.length > 0) {
      // Récupère la valeur du QA
      var qaValue = qaMatch[0].split('=')[1];
      // On valide que le dernier charactère n'est pas "&" car il va le chercher dans le cas d'un keyword provenant d'une conversion Urlon
      var lastChar = qaValue.substr(qaValue.length - 1);
      if (lastChar == '&') {
        qaValue = qaValue.substr(0, qaValue.length - 1);
      }
      return decodeURIComponent(qaValue);
    }

    return "";
  };

  $(document).ready(function () {
    // Ajoute le HostName
    BrokerManager.SetBroker("SiteUri", window.location.hostname);

    // Ajoute l'url complet
    BrokerManager.SetBroker("FullUri", window.location.href);

    // Ajoute le titre
    BrokerManager.SetBroker("PageTitle", window.document.title);

    var Brokers = BrokerManager.Brokers;

    for (i = 0; i < Brokers.length; i++) {
      var brokerElement = $("[brokeridentifier='" + Brokers[i].BrokerName + "']");

      if (brokerElement && !brokerElement.text() && Brokers[i].BrokerValue) {
        BrokerManager.ChangeBrokerText(brokerElement, Brokers[i].BrokerValue);
      }
    }

    // Définit le broker de recherche
    BrokerManager.SetBroker("nms_sysbroker_researchwords", GetWordFromHash());
  });

  // Détection du changement d'url
  $(window).bind('hashchange', function () {
    // Obtient la recherche
    var searchWord = GetWordFromHash(),
        previousSearchWord = BrokerManager.GetBroker("nms_sysbroker_researchwords");

    // On effectue le reload seulement sur le chargement de recherche
    if (searchWord != null && searchWord !== previousSearchWord) {
      window.location.reload();
    }
  });

})();;
$(document).ready(function () {
  (function () {
    var _origParse = JSON.parse;
    var dateRegex = /\/Date\([-0-9]{10,}\)/i;

    JSON.parse = function (text) {
      var maxTryNb = 5;
      var nbTry = 0;
      var result = null;

      while (nbTry < maxTryNb && result == null) {
        // Note(mlampron) : À son dernier essai, on tente de stringify text.
        //                  Le script de FacebookComment (all.js) est en cause, c'est pourquoi il est nécessaire de faire ça ici.                    
        if (nbTry == 4) {
          text = JSON.stringify(text);
        }
        result = _tryParse(text);
        nbTry++;
      }

      if (result == null) {
        // Valide si le navigateur est IE8
        if (IsIE8Browser()) {
          // Note(Slepine) : Dans le cas de IE8 WinXP Non Patché, le reviver n'est pas supporté
          //                 KB:976662 - Problème de parser JSON natif sous IE8
          alert('La version du navigateur que vous utilisez doit être mise à jour afin de fonctionner correctement. Il est nécessaire que vous procédiez à une "mise à jour Windows" pour accéder à certaines fonctionnalités de ce site.\r\nThe version of the browser you are currently using requires an update in order to work correctly. You must complete a "Windows Update" in order to properly access certain features on this site.');
        }
      }

      function _tryParse(textToParse) {
        try {
          return _origParse(textToParse, function (key, value) {
            if (typeof value === 'string' && value.length > 8 && value[0] === '/' && dateRegex.test(value)) {
              return eval(value);
            }
            return value;
          });
        }
        catch (ex) {
          return null;
        }
      }

      return result;
    }
  })();
});

// Constructeur du client permettant de manager les formulaires
FormManagerClient = function (nmsSubmitButton, siteGuid, associatedFormGuid, clientRedirectionUrl, associatedItemIdentifierGuid, associatedItemIdentifierType, isUpdate, needApproval, submittingHandler, sendCompleteHandler, errorHandler, cultureID, creditCardPlaceholder, expirationPlaceholder, cvvPlaceholder) {

  var self = this, submitCheckoutConfiguration;

  // Définit les inputsControl enregistrer pour le formulaire
  this.InputControls = new Array();

  // Définit les paramètres du Formulaire
  this.AssociatedFormGuid = associatedFormGuid;
  this.AssociatedItemIdentifierGuid = associatedItemIdentifierGuid;
  this.AssociatedItemIdentifierType = associatedItemIdentifierType;
  this.IsUpdate = isUpdate;
  this.NeedApproval = needApproval;
  this.CultureID = cultureID;

  // Définit les actions
  this.SubmittingHandler = submittingHandler;
  this.SendCompleteHandler = sendCompleteHandler;
  this.ErrorHandler = errorHandler;

  // Définit le bouton de soumission
  this.SubmitButton = nmsSubmitButton;

  // Définit si le formulaire est activé
  this.__enable = true;

  // Définit l'instance du captcha
  this.CaptchaInstance = null;

  // Définit l'entité de SubmitForm
  this.SubmitFormEntity = null;

  this.ValidationConfig = null;

  // Définit les adresses courriel supplémentaires.
  this.EmailTo = [];

  // Définit l'url de redirection
  this.ClientRedirectionUrl = clientRedirectionUrl;

  // Définit l'instance du token
  this.Token = null;

  // Définit l'identifiant du site
  this.SiteGuid = siteGuid;

  // Définit l'ID des données. Si l'ID est 0, on est en mode ajout, sinon, on est en mode modification
  this.FormDataID = 0;

  submitCheckoutConfiguration = $(this.SubmitButton).attr("data-NmsSubmitCheckoutButtonClientConfiguration");
  submitCheckoutConfiguration = typeof (submitCheckoutConfiguration) != 'undefined' ? JSON.parse(submitCheckoutConfiguration) : null;

  this.paymentManager = null;
  if (submitCheckoutConfiguration) {
    // todo : plusieurs provider?
    this.paymentManager = nms.altitude.paymentManager.getPaymentManager(submitCheckoutConfiguration.PaymentProviderType, submitCheckoutConfiguration.PaymentConfigurations[submitCheckoutConfiguration.PaymentProviderType], creditCardPlaceholder, expirationPlaceholder, cvvPlaceholder)
  }

  // Désactive les validation sur la soumission
  $("form").validate({
    onsubmit: false,
    errorPlacement: function (error, element) {
      if (element.is("input[type='file']")) {
        var replacement = element.parent(".ReplacementButton");
        if (replacement.length) {
          replacement.addClass("error");
          error.insertAfter(replacement);
        }
        else {
          error.insertAfter(element); // <- the default
        }
      } else {
        error.insertAfter(element); // <- the default
      }
    }
  });

  // Obtient les information d'authentification
  this.GetFormAuthentification();

  // Obtient les donnees de formulaire si un hash est present
  if (window.location.hash != '' && typeof SecurityManager != 'undefined' && SecurityManager.User != null && typeof SecurityManager.User.ContactGuid != 'undefined') {
    var hash = window.location.hash;
    hash = hash.substring(hash.indexOf('#') + 1);
    hash = hash.substring(hash.indexOf('=') + 1);
    this.GetFormData(SecurityManager.User.ContactGuid, hash);
  }

  
  //Prendre en compte le back sur safari sur iOS qui rend le formulaire disabled
  if (/iphone|ipod|ipad.*os 5/gi.test(navigator.userAgent)) {
    window.addEventListener('pagehide', function (e) {
      var $body = $(document.body);
      $body.children().remove();

      //on ajoute le reload qui sera fait si on fait back sur la page
      setTimeout(function () {
        $body.append("<script type='text/javascript'>window.location.reload();<\/script>");
      });
    });
  }

}

// Définit les méthode du FormManager
FormManagerClient.prototype = {
  // Enregistre un contrôle Input
  RegisterInputControl: function (fieldIdentifierGuid, inputControlClient, isCaptcha) {

    // Valide si le contrôle est de type captcha
    if (isCaptcha) {
      // Définit l'instance du captcha
      this.CaptchaInstance = inputControlClient;
    }
    else {
      // Instancie un mappage
      var formMapping = new FormFieldMapping(fieldIdentifierGuid, inputControlClient);

      // Ajoute le contrôle input dans le vecteur
      this.InputControls.push(formMapping);
    }
  },

  // Initialize les InputControls
  InitializeInputControls: function (tokenData) {
    for (var i = 0; i < this.InputControls.length; i++) {
      // Initialize le champs
      var fieldValid = this.InputControls[i].InputControlClient.Initialize(tokenData);
    }
  },

  // Évènement sur le changement d'état d'un upload
  NmsFileUploadChanged: function (uploadManager) {
    // Valide s'il y a un upload
    if (uploadManager.IsUploading()) {
      // Désactive le formulaire
      this.Disable();
    }
    else {
      // Réactive le formulaire
      this.Enable();
    }
  },

  SetSubmitFormData: function (data, validationConfig) {
    // Définit les données du formulaire
    this.SubmitFormEntity = eval(data);
    this.ValidationConfig = validationConfig;
  },

  AddEmailTo: function (idGuid) {
    this.EmailTo.push(idGuid);
  },

  GetFormAuthentification: function () {
    // Contient l'instance actuel
    var instance = this;

    AltitudeServices.Form.GetAuthorizationToken({
      siteGuid: instance.SiteGuid
    },
    function (result) {
      instance.Token = result;
      instance.InitializeInputControls(instance.Token);
    },
    function (exception) {
      instance.OnError(exception);
    });
  },

  // Obtient les donnees du webservice selon un contactguid et du hash dans l'url
  GetFormData: function (contactGuid, hash) {
    var self = this;

    $.ajax({
      url: '/Service/FormManagerService.asmx/GetFormDataEntityByContactGuid',
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify({ contactGuid: contactGuid, formDataID: hash }),
      success: function (result) {
        if (result.d == null) {
          return;
        }
        $.each(self.InputControls, function (controlIndex, control) {
          $.each(result.d.DataFieldValues, function (valueIndex, value) {
            if (value.DataFieldIdentifierGuid == control.FieldIdentifierGuid) {
              switch (value.DataType) {
                // Si c'est un fichier           
                case 5:
                  $.each(value.FormBinaryData, function (index, value) {
                    $(control.InputControlClient.InputControlElement).val(value.IdentifierGuid + ';' + value.FileName);
                  });
                  break;
                default:
                  $(control.InputControlClient.InputControlElement).val(value.Value);
                  break;
              }
            }
          });
        });
        self.IsUpdate = true;
        self.FormDataID = result.d.FormDataID;
      }
    });
  },

  Submit: function () {
    var self = this,
      submitCheckoutConfiguration = $(this.SubmitButton).attr("data-NmsSubmitCheckoutButtonClientConfiguration"),
      submitFail = false;
    submitCheckoutConfiguration = typeof (submitCheckoutConfiguration) != 'undefined' ? JSON.parse(submitCheckoutConfiguration) : null;

    window.BrokerManager.UpdateBrokers();

    // Valide si le formulaire est activé
    if (this.__enable) {
      // Vecteur de données du formulaire
      var lstField = new Array();

      // Détermine si le formulaire est valide
      var invalidCount = 0;
      var isValid = true;

      // Lance la validation du Captcha
      if (this.CaptchaInstance != null && this.CaptchaInstance != "undefined" && (!this.CaptchaInstance.InputControlClient.Valid())) {
        // Indique que le formulaire n'est pas valid
        isValid = false;
        invalidCount++;
      }

      //Enlève les watermark pour que la validation se fasse correctement sur IE et firefox sinon le watermark est considéré comme la valeur
      //NOTE(mablain): Si aucun champ texte présent dans le formulaire, le watermark n'est pas présent
      if (typeof $.watermark != "undefined") {
        $.watermark.hideAll();
      }

      // Parcours les inputControls enregistrer au niveau du formulaire
      for (var i = 0; i < this.InputControls.length; i++) {

        // Valide le champs
        var fieldValid = this.InputControls[i].InputControlClient.Valid();

        // Si invalide
        if (!fieldValid) {
          // Définit que la validation n'a pas fonctionné
          isValid = false;
          invalidCount++;
        }

        // Instancie le wrapper permettant d'envoyé les données au WebService
        var newField = new FormDataField(this.InputControls[i].FieldIdentifierGuid, this.InputControls[i].InputControlClient.GetValue());

        // Ajoute la données dans le vecteur d'informations
        lstField.push(newField);
      }

      //Remet les watermark après avoir fait la validation
      //NOTE(mablain): Si aucun champ texte présent dans le formulaire, le watermark n'est pas présent
      if (typeof $.watermark != "undefined") {
        $.watermark.showAll();
      }

      // Récupère l'instance en cours
      var instance = this;
      if (this.loadingImgDiv == null || this.loadingImgDiv == "undefined") {
        this.loadingImgDiv = $("#" + this.SubmitButton.id + "LoadingImgDiv");
      }

      // Définit le texte du catpcha
      var captchaWord = "";

      // Valide si l'instance du catpcha est présente
      if (this.CaptchaInstance != null) {
        // Obtient la valeur du catpcha
        captchaWord = this.CaptchaInstance.InputControlClient.GetValue();
      }

      // Valide si le formulaire est prêt pour l'envoie
      if (isValid) {
        $("[ItemID='" + this.ValidationConfig.ValidationErrorZoneItemID + "']").hide();
        // Valide si le token est instancié
        if (this.Token != null) {

          // Convertit correctement les dates dans le bon format
          this.SubmitFormEntity = JSON.parse(JSON.stringify(this.SubmitFormEntity));

          // Valide s'il y a une instance du captcha
          if (this.CaptchaInstance != null && this.CaptchaInstance != "undefined") {
            // Obtient le token du Captcha
            this.Token.CaptchaInformation = this.CaptchaInstance.GetToken();
            this.Token.CaptchaInformation.InsertDate = eval(this.Token.CaptchaInformation.InsertDate);
          }

          // S'assure que la date est du bon format
          this.Token.InsertDate = eval(this.Token.InsertDate);

          // Lance la soumission
          var data = {
            token: this.Token,
            associatedFormGuid: this.AssociatedFormGuid,
            associatedItemIdentifierGuid: this.AssociatedItemIdentifierGuid,
            associatedItemIdentifierType: this.AssociatedItemIdentifierType,
            isUpdate: this.IsUpdate,
            needApproval: this.NeedApproval,
            formData: lstField,
            submitEntity: this.SubmitFormEntity,
            captchaWord: captchaWord,
            brokers: BrokerManager.Brokers,
            formDataID: this.FormDataID,
            emailTo: this.EmailTo,
            cultureID: this.CultureID

          };

          if (typeof SecurityManager != 'undefined' && SecurityManager.User != null && typeof SecurityManager.User.ContactGuid != 'undefined') {
            data.contactGuid = SecurityManager.User.ContactGuid;
          } else {
            data.contactGuid = null;
          }

          if (submitCheckoutConfiguration && submitCheckoutConfiguration.ConfirmationZoneHierarchyUrl) {
            var confirmationUrl = window.location.protocol + '//' + window.location.host + submitCheckoutConfiguration.ConfirmationZoneHierarchyUrl;
            if (nms.altitude.PaymentInformations.validatePaymentInformations()) {
              var args = {
                PaymentProvider: submitCheckoutConfiguration.PaymentProviderType
              };
              nms.altitude.PaymentInformations.FillCheckoutArgs(args);
              SubmitFormInDataBaseAndCheckout(data, submitCheckoutConfiguration, confirmationUrl, instance, args, true);
              // Indique que l'on soumet le formulaire
              instance.OnSubmitting();
              // Désactive les contrôle dans le formulaire
              instance.Disable();
              //Affiche le chargement
              instance.loadingImgDiv.show();
            }
            if (submitFail) {
              return false;
            }
          } else {
            $.ajax({
              type: "post",
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              url: '/Service/FormManagerService.asmx/SubmitFormInDataBase',
              data: JSON.stringify(data),
              success: function (result) {
                instance.loadingImgDiv.hide();
                instance.OnResult(result.d);
              },
              error: function (exception) {
                instance.loadingImgDiv.hide();
                instance.OnError(exception);
              }
            });

            // Indique que l'on soumet le formulaire
            this.OnSubmitting();

            // Désactive les contrôle dans le formulaire
            this.Disable();
            //Affiche le chargement
            this.loadingImgDiv.show();
          }
        }
      }
      else
      {
        //Obtenir le input en erreur parmi les input a valider
        var errorInput = this.InputControls.filter(function (e) { return $(e.InputControlClient.InputControlElement).hasClass('error'); })[0];
        if (errorInput)
        {
          $(errorInput.InputControlClient.InputControlElement).focus();
        }

        $("[ItemID='" + this.ValidationConfig.ValidationErrorZoneItemID + "']").html(this.ValidationConfig.ValidationErrorMessage.replace("{0}", invalidCount)).show();
      }
    }

    function SubmitFormInDataBaseAndCheckout(data, submitCheckoutConfiguration, confirmationUrl, instance, args, removeFromCartOnSuccess) {
      // On vérifie que le panier n'est pas vide
      if (!nms.altitude.nmsAltitudeCartManager.isInstanceEmpty() && (!submitCheckoutConfiguration.IsShippingRequired || (nms.altitude.ShippingSelector && nms.altitude.ShippingSelector.selectedShipping))) {
        nms.altitude.currencyManager.getCurrentCurrency().done(function (currency) {
          $.ajax({
            type: "post",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: '/Service/FormManagerService.asmx/SubmitFormInDataBaseAndCheckout',
            data: JSON.stringify({
              args: {
                SubmitFormInDataBaseArgs: data,
                ProceedToCheckoutArgs: {
                  OrderGuid: nms.altitude.PaymentInformations ? nms.altitude.PaymentInformations.getOrderGuid() : nms.guidHelper.empty(),
                  ProductQuantities: nms.altitude.nmsAltitudeCartManager.getCartInstance(),
                  IsoCode: (currency ? currency.IsoCode : null),
                  ShippingRuleGuid: nms.altitude.ShippingSelector && nms.altitude.ShippingSelector.selectedShipping ? nms.altitude.ShippingSelector.selectedShipping : nms.guidHelper.empty(),
                  LocationString: nms.altitude.ShippingSelector && nms.altitude.ShippingSelector.lastSearch ? nms.altitude.ShippingSelector.lastSearch : '',
                  CultureID: Altitude3_LongCultureID,
                  CancelUrl: window.location.protocol + '//' + window.location.host + submitCheckoutConfiguration.CancelZoneHierarchyUrl,
                  ConfirmationUrl: confirmationUrl,
                  TransactionDescription: submitCheckoutConfiguration.TransactionDescription,
                  PromoCode: nms.altitude.PromoCodeSelector && nms.altitude.PromoCodeSelector.selectedPromoCode ? nms.altitude.PromoCodeSelector.selectedPromoCode : null,
                  PaymentProviderCheckoutArgs: $.isEmptyObject(args) ? null : args
                }
              }
            }),
            success: function (result) {
              instance.loadingImgDiv.hide();

              // Note(sjoyal) : Comportement par défaut du bouton de formulaire en commentaire pour faire actuellement uniquement le processus de retour du checkout. A changer au besoin.
              //instance.OnResult(result.d.SubmitFormInDataBaseResponse);

              if (result.d.ProceedToCheckoutResponse != null) {
                if (removeFromCartOnSuccess) {
                  nms.altitude.nmsAltitudeCartManager.clearCart();
                }
                // Enregistre les cookies et redirige vers l'url de paiement
                $.cookie(result.d.ProceedToCheckoutResponse.PaymentId + '_OrderGuid', result.d.ProceedToCheckoutResponse.OrderGuid, { expires: 1 });
                
                if (typeof (window.CheckoutSuccess) != "undefined") {
                  window.CheckoutSuccess(result.d.ProceedToCheckoutResponse.OrderGuid).done(function () {
                    window.location.href = result.d.ProceedToCheckoutResponse.PaymentUrl;
                  });
                } else {
                  window.location.href = result.d.ProceedToCheckoutResponse.PaymentUrl;
                }
              }
            },
            error: function (exception) {
              instance.Enable();
              instance.loadingImgDiv.hide();

              // Note(sjoyal) : Comportement par défaut du bouton de formulaire en commentaire pour faire actuellement uniquement le processus de retour du checkout. A changer au besoin.
              //instance.OnError(exception);

              var errorContent = JSON.parse(exception.responseText)
              $(document).trigger(jQuery.Event("onProceedCheckoutError", {
                errorType: errorContent.ExceptionType,
                message: errorContent.Message
              }));
            }
          });
        });
      } else {
        instance.loadingImgDiv.hide();
        submitFail = true;
      }
    }
  },

  // Évènement lorsque le résultat arrive
  OnResult: function (result) {
    // Valide si le formulaire a été envoyé avec Succes
    if (result.Success) {

      // On trigger la success de soumission du formulaire
      $(document).trigger(jQuery.Event("onSubmitSuccess", {
        'result': result
      }));

      // Valide s'il y a un handler pour l'envoie avec succès
      if (this.SendCompleteHandler != null) {
        // Fait appelle à la méthode
        this.SendCompleteHandler();
      }

      // Valide s'il y a du balisage personnalisé
      if (result.CustomHtml != null && result.CustomHtml != "undefined" && result.CustomHtml != "") {
        // Ajoute le balisage HTML personnalisé
        $(document).append(result.CustomHtml);
      }

      // Valide s'il y a une redirection
      if (this.ClientRedirectionUrl != null && this.ClientRedirectionUrl != "undefined" && this.ClientRedirectionUrl != "") {
        // Définit la redirection
        window.location.href = this.ClientRedirectionUrl;
      }
    }
    else {
      // Valide si le captcha est valide
      if (!result.IsCaptchaValid && this.CaptchaInstance != null) {
        // Indique que la validation a échoué
        this.CaptchaInstance.InputControlClient.ValidationFail(this.CaptchaInstance);
      }

      // Appelle la méthode d'erreur    
      this.OnError();

      // Réactive le formulaire
      this.Enable();
    }
  },

  // Évènement lorsque le formulaire est sousmis
  OnSubmitting: function () {
    // Valide s'il y a un handler pour l'envoie en cours
    if (this.SubmittingHandler != null) {
      // Fait appelle à la méthode
      this.SubmittingHandler();
    }
  },

  // Évènement lorsque le formulaire est en error
  OnError: function (result) {
    // Valide s'il y a un handler pour l'envoie en erreur
    if (this.ErrorHandler != null) {
      // Fait appelle à la méthode
      this.ErrorHandler();
    }
  },

  // Désactive le formulaire
  Disable: function () {
    // Parcours les inputControls enregistrer au niveau du formulaire
    //for (var inputControl in this.InputControls) {
    for (var i = 0; i < this.InputControls.length; i++) {
      // Désactive le contrôle
      this.InputControls[i].InputControlClient.Disable();
    }

    // Désactive le contrôle
    this.SubmitButton.disabled = true;
    this.__enable = false;
  },

  // Active le formulaire
  Enable: function () {
    // Parcours les inputControls enregistrer au niveau du formulaire
    // for (var inputControl in this.InputControls) {
    for (var i = 0; i < this.InputControls.length; i++) {
      // Active le contrôle
      this.InputControls[i].InputControlClient.Enable();
    }

    // Active le contrôle
    this.SubmitButton.disabled = false;
    this.__enable = true;
  }
}

// Représente un objet d'informations de champs dans un formulaire
FormDataField = function (fieldIdentifierGuid, dataFieldValue) {
  this.FieldIdentifierGuid = fieldIdentifierGuid;
  this.DataFieldValue = dataFieldValue;
}

// Représente un objet d'information de mappage entre le SubmitButton et le contrôle client
FormFieldMapping = function (fieldIdentifierGuid, inputControlClient) {
  this.FieldIdentifierGuid = fieldIdentifierGuid;
  this.InputControlClient = inputControlClient;
}

// Constructeur du proxy client pour l'input contrôle
InputControlClient = function (inputControlElement, getValueHandler, disableHandler, enableHandler, validationFailHandler, initializationHandler, validationHandler) {


  // Définit l'instance du contrôle HTML
  this.InputControlElement = inputControlElement;


  $(inputControlElement).data("AssociatedForms", new Array());


  // Définit l'handler permettant d'obtenir la valeur
  this.__getValueHandler = getValueHandler;

  // Définit les évènements d'activation/désactivation du contrôle
  this.__disableHandler = disableHandler;
  this.__enableHandler = enableHandler;
  this.__validationFail = validationFailHandler;
  this.__initializationHandler = initializationHandler;
  this.__validationHandler = validationHandler;
}

InputControlClient.prototype = {

  Initialize: function (tokenData) {
    // Valide si l'évènement d'initialization est définit
    if (this.__initializationHandler != null) {

      // Récupère l'instance de la classe
      var instance = this;

      // Lance l'évènementc juste a
      this.__initializationHandler(tokenData, instance);
    }
  },

  // Obtient la valeur
  GetValue: function () {
    // Fait appel au handler permettant d'obtenir la valeur
    return this.__getValueHandler(this);
  },

  // Désactive le contrôle
  Disable: function () {
    // Valide s'il y a une méthode pour désactiver le contrôle
    if (this.__disableHandler != null && this.__disableHandler != "undefined") {
      // Appel la méthode
      this.__disableHandler(this);
    }
  },

  // Active le contrôle
  Enable: function () {
    // Valide s'il y a une méthode pour activer le contrôle
    if (this.__enableHandler != null && this.__enableHandler != "undefined") {
      // Appel la méthode
      this.__enableHandler(this);
    }
  },

  // Désactive le contrôle
  ValidationFail: function (message) {
    // Valide s'il y a une méthode pour désactiver le contrôle
    if (this.__validationFail != null && this.__validationFail != "undefined") {
      // Appel la méthode
      this.__validationFail(this, message);
    }
  },

  Valid: function () {
    // Valide s'il y a une méthode pour valider le contrôle
    if (this.__validationHandler != null && this.__validationHandler != "undefined") {
      // Appel la méthode
      return this.__validationHandler(this);
    }

    // Indique qu'il n'y aucune validatiobn
    return true;
  }

}

// Constructeur du NmsCaptchaClientInput
NmsCaptchaClientInput = function (inputControlElement, getValueHandler, disableHandler, enableHandler, validationFailHandler, initializationHandler, validationHandler) {

  // Instancie le contrôle Client
  this.InputControlClient = new InputControlClient(inputControlElement, getValueHandler, disableHandler, enableHandler, validationFailHandler, initializationHandler, validationHandler);

  // Définit une référence à la logique du Catpcha
  this.InputControlClient.CatpchaClient = this;

  // Instancie la liste des NmsSubmit Associée
  this.LinkedSubmitButton = new Array();

  // Instancie un token null
  this.Token = null;

  this.SiteGuid = null;
  this.CultureID = null;
  this.FormData = "";
}

NmsCaptchaClientInput.prototype = {

  // Initialization par le NmsSubmit
  Initialization: function (validationMessage) {
    // Remplace le doPostBack par le #
    $(this.InputControlClient.InputControlElement).find('a').attr('href', '#');

    // Définit l'instance du Captcha
    var instance = this;

    // Attache l'évènement de validation
    $(this.InputControlClient.InputControlElement).find('a').click(function (eventHandler) {
      instance.InitializeAuthorizationToken(false);
    })

    // S'assure que le champ est remplit
    $(this.InputControlClient.InputControlElement).find(':text:first').rules("add",
    {
      required: true,
      messages: {
        required: validationMessage
      }
    });
  },

  // Obtient les données du formulaire
  GetToken: function () {
    // Retourne les informations du formulaire
    var token = $(this.InputControlClient.InputControlElement).data("captchaData");
    if (token) {
      return token;
    }

    return this.Token;
  },

  // Enregistre le NmsSubmit sur le captcha
  RegisterNmsSubmit: function (nmsSubmitButtonFormManager) {
    // Ajoute le formulaire
    this.LinkedSubmitButton.push(nmsSubmitButtonFormManager);
  },

  // Intialize le contexte du captcha
  InitializeCaptchaContext: function (siteGuid, cultureID) {
    // Définit les paramètres nécessaire au context
    this.SiteGuid = siteGuid;
    this.CultureID = cultureID;

    // Parcours les SubmitButtons
    for (var i = 0; i < this.LinkedSubmitButton.length; i++) {
      // Ajoute l'identifiant du formulaire
      this.FormData += this.LinkedSubmitButton[i].AssociatedFormGuid + "|";

      if (this.InputControlClient != null && this.InputControlClient.InputControlElement != null) {
        $(this.InputControlClient.InputControlElement).data("AssociatedForms")[$(this.InputControlClient.InputControlElement).data("AssociatedForms").length] = this.LinkedSubmitButton[i].AssociatedFormGuid;
      }
    }



    // Initialize le token
    this.InitializeAuthorizationToken(true);
  },

  // Initialize le token d'authorization
  InitializeAuthorizationToken: function (initializeSubmitButton) {
    var inst = this;
    // Valide si nous avons les information du FormData
    if (this.FormData != null && this.FormData != "undefined" && this.FormData != "") {
      // Variable d'instance pour le delegate
      var instance = this;
      function LoadCaptcha() {
        AltitudeServices.Form.GetCaptchaInfo({
          cultureID: instance.CultureID,
          siteGuid: instance.SiteGuid,
          formIdentification: instance.FormData
        },
        function (data) {
          // Obtient le Token
          instance.Token = data;
          $(instance.InputControlClient.InputControlElement).data("captchaData", instance.Token);
          // Définit l'url de l'image
          $(instance.InputControlClient.InputControlElement).find("img").attr("src", instance.Token.CaptchaUrl);
          //$(instance.InputControlClient.InputControlElement).find("a").unbind("click");

          // Valide si on initialize les enfants
          if (initializeSubmitButton) {
            // Initialize le contrôle
            instance.InputControlClient.Initialize(instance.Token);

            // Parcours les bouton de formulaire
            /*for (var i = 0; i < instance.LinkedSubmitButton.length; i++) {
            // Initialize les contrôles du formulaires
            instance.LinkedSubmitButton[i].InitializeInputControls(instance.Token);
            }*/
          }
        });
      }
      LoadCaptcha();
      $(instance.InputControlClient.InputControlElement).find("a").click(LoadCaptcha);
    }
    else {
      alert("NmsCaptchaClientInput_InitializeAuthorizationToken : Impossible d'initializer le contexte du Captcha");
    }
  },

  // Méthode de validation
  Validate: function () {
    // S'assure que le champ est valide
    return $(this.InputControlClient.InputControlElement).find(':text:first').valid();
  }
}



// Méthode d'initialization
NmsTextBoxInput_Initialization = function (inputControlClient, isRequired, validationRegEx, validationMessage) {
  // Définit que c'est un champ requis et courriel selon les paramètres
  /*  $(inputControlClient.InputControlElement).rules("add",
  {
  required: isRequired,
  regex: validationRegEx,
  messages: {
  required: validationMessage,
  email: validationMessage,
  regex: validationMessage
  }
  });*/
}

// Méthode de validation
NmsTextBoxInput_ValidateMethod = function (inputControlClient) {
  // Il semble y avoir une erreur avec la validation lorsque le textbox n'est pas requis.
  // Par exemple, si on a la validation "email" seulement, mais que le textbox est vide, il sera vu comme invalide.
  // Possiblement une erreur connue : https://github.com/jzaefferer/jquery-validation/issues/14
  if ((!$(inputControlClient.InputControlElement).hasClass("required")
      && (typeof ($(inputControlClient.InputControlElement).rules()) == "undefined" || !$(inputControlClient.InputControlElement).rules().required))
      && $(inputControlClient.InputControlElement).val() == "") {
    return true;
  }
  return $(inputControlClient.InputControlElement).valid();
}

// Méthode de validation
NmsCheckbox_ValidateMethod = function (inputControlClient) {
  if ($(inputControlClient.InputControlElement).valid) {
    return $(inputControlClient.InputControlElement).valid();
  }

  return true;
}


// Méthode d'initialization
NmsSelect_Initialization = function (inputControlClient, isRequired, validationMessage) {
  /*     // Définit que c'est un champ requis et courriel selon les paramètres
    $(inputControlClient.InputControlElement).rules("add",
    {
    required: isRequired,
    messages: {
    required: validationMessage
    }
    });*/
}

// Méthode de validation
NmsSelect_ValidateMethod = function (inputControlClient) {
  return $(inputControlClient.InputControlElement).valid();
}


NmsUserGroupPicker_Initialization = function (inputControlClient, isRequired) {
  // Définit si le champs est requis
  inputControlClient.IsRequired = isRequired;
}

NmsUserGroupPicker_ValidateMethod = function (inputControlClient, errorMessage) {
  // Valide s'il y a un élément sélectionné
  if (inputControlClient.IsRequired) {
    // Valide s'il y a un élément sélectionné
    var result = $(inputControlClient.InputControlElement).find("input:checked").length > 0;
    if (!result) {
      NmsUserGroupPicker_ValidationFailed(inputControlClient, errorMessage);
    }
    else {
      // Va chercher le label d'erreur pour le supprimer
      var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";
      $('[errorTag="' + errorLabelID + '"]').remove();
    }
    return result;
  }

  // Retourne que le contrôle est valide
  return true;
}

NmsUserGroupPicker_ValidationFailed = function (inputControlClient, errorMessage) {

  // Obtient le nom du label
  var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";

  // Tente de récupèré le label
  var errorLabel = $('[errorTag="' + errorLabelID + '"]');

  // Création d'un label d'erreur
  if (errorLabel.length == 0) {
    // Création du label d'erreur
    errorLabel = document.createElement("span");
    errorLabel.innerHTML = errorMessage;
    errorLabel.setAttribute("errorTag", errorLabelID);

    // Ajoute l'erreur
    $(inputControlClient.InputControlElement).after(errorLabel);
  }
}

NmsRating_Initialization = function (inputControlClient, isRequired) {
  // Définit si le champs est requis
  inputControlClient.IsRequired = isRequired;
}

NmsRating_ValidateMethod = function (inputControlClient, errorMessage) {
  // Valide s'il y a un élément sélectionné
  if (inputControlClient.IsRequired) {
    // Valide s'il y a un élément sélectionné
    var result = $(inputControlClient.InputControlElement).find("input:checked").length > 0;
    if (!result) {
      NmsRating_ValidationFailed(inputControlClient, errorMessage);
    }
    else {
      // Va chercher le label d'erreur pour le supprimer
      var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";
      $('[errorTag="' + errorLabelID + '"]').remove();
    }
    return result;
  }

  // Retourne que le contrôle est valide
  return true;
}

NmsRating_ValidationFailed = function (inputControlClient, errorMessage) {

  // Obtient le nom du label
  var errorLabelID = $(inputControlClient.InputControlElement)[0].className + "_ErrorLabel";

  // Tente de récupèré le label
  var errorLabel = $('[errorTag="' + errorLabelID + '"]');

  // Création d'un label d'erreur
  if (errorLabel.length == 0) {
    // Création du label d'erreur
    errorLabel = document.createElement("span");
    errorLabel.innerHTML = errorMessage;
    errorLabel.setAttribute("errorTag", errorLabelID);

    // Ajoute l'erreur
    $("span[class='" + $(inputControlClient.InputControlElement)[0].className + "']:last").after(errorLabel);
  }
}

// Méthode d'initialization
NmsRadio_Initialization = function (inputControlClient, isRequired) {
  // Définit si le champs est requis
  inputControlClient.IsRequired = isRequired;
}

// Méthode de validation du NmsRadio
NmsRadio_ValidateMethod = function (inputControlClient, errorMessage) {
  // Valide si le contrôle a besoin d'être requis
  if (inputControlClient.IsRequired) {
    // Valide s'il y a un élément sélectionné
    var result = $("input[name='" + inputControlClient.InputControlElement.name + "']:checked").length > 0;

    if (!result) {
      NmsRadio_ValidationFailed(inputControlClient, errorMessage);
    }
    else {
      // Va chercher le label d'erreur pour le supprimer
      var errorLabelID = inputControlClient.InputControlElement.name + "_ErrorLabel";
      $('[errorTag="' + errorLabelID + '"]').remove();
      $("input[name='" + inputControlClient.InputControlElement.name + "']").removeClass("error");
      $("input[name='" + inputControlClient.InputControlElement.name + "']").addClass("valid");
    }

    return result;
  }

  // Retourne que le contrôle est valide
  return true;
}

NmsRadio_ValidationFailed = function (inputControlClient, errorMessage) {

  // Obtient le nom du label
  var errorLabelID = inputControlClient.InputControlElement.name + "_ErrorLabel";

  // Tente de récupèré le label
  var errorLabel = $('[errorTag="' + errorLabelID + '"]');

  // Création d'un label d'erreur
  if (errorLabel.length == 0) {
    // Création du label d'erreur
    errorLabel = document.createElement("span");
    errorLabel.innerHTML = errorMessage;
    errorLabel.setAttribute("errorTag", errorLabelID);
    $(errorLabel).addClass("error");
    // Ajoute l'erreur
    $("input[name='" + inputControlClient.InputControlElement.name + "']:last").after(errorLabel);
  }

  $("input[name='" + inputControlClient.InputControlElement.name + "']").addClass("error");
  $("input[name='" + inputControlClient.InputControlElement.name + "']").removeClass("valid");
}

// Méthode d'initialization
NmsTextAreaInput_Initialization = function (inputControlClient, isRequired, validationMessage) {
  //  $(inputControlClient.InputControlElement).rules("add",
  //  {
  //    required: isRequired,
  //    messages: {
  //      required: validationMessage
  //    }
  //  });
}

// Méthode de validation du NmsTextAreaInput
NmsTextAreaInput_ValidateMethod = function (inputControlClient) {
  // Valide si le contrôle a besoin d'être requis
  if ((!$(inputControlClient.InputControlElement).hasClass("required")
      && (typeof ($(inputControlClient.InputControlElement).rules()) == "undefined" || !$(inputControlClient.InputControlElement).rules().required))
      && $(inputControlClient.InputControlElement).val() == "") {
    return true;
  }

  return $(inputControlClient.InputControlElement).valid();
}

function base64_encode(input) {
  var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;

  input = utf8_encode(input);

  while (i < input.length) {

    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

  }

  return output;
}

function base64_decode(data) {
  // Decodes string using MIME base64 algorithm  
  // 
  // version: 1109.2015
  // discuss at: http://phpjs.org/functions/base64_decode
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Thunder.m
  // +      input by: Aman Gupta
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // -    depends on: utf8_decode
  // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
  // *     returns 1: 'Kevin van Zonneveld'
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  //if (typeof this.window['btoa'] == 'function') {
  //    return btoa(data);
  //}
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        dec = "",
        tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');
  dec = utf8_decode(dec);

  return dec;
}

function utf8_encode(string) {
  string = string.replace(/\r\n/g, "\n");
  var utftext = "";

  for (var n = 0; n < string.length; n++) {

    var c = string.charCodeAt(n);

    if (c < 128) {
      utftext += String.fromCharCode(c);
    }
    else if ((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192);
      utftext += String.fromCharCode((c & 63) | 128);
    }
    else {
      utftext += String.fromCharCode((c >> 12) | 224);
      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
      utftext += String.fromCharCode((c & 63) | 128);
    }

  }

  return utftext;
}

// private method for UTF-8 decoding 
function utf8_decode(utftext) {
  var string = "";
  var i = 0;
  var c = 0, c1 = 0, c2 = 0;

  while (i < utftext.length) {

    c = utftext.charCodeAt(i);

    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    }
    else if ((c > 191) && (c < 224)) {
      c1 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
      i += 2;
    }
    else {
      c1 = utftext.charCodeAt(i + 1);
      c2 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
      i += 3;
    }

  }
  return string;
}

/// Fonction permettant de détecter si nous somme en IE8
function IsIE8Browser() {
  var rv = -1;
  var ua = navigator.userAgent;
  var re = new RegExp("Trident\/([0-9]{1,}[\.0-9]{0,})");
  if (re.exec(ua) != null) {
    rv = parseFloat(RegExp.$1);
  }
  return (rv == 4);
}



$(function () {
  if ($.validator && $.validator.methods) {
    var original = $.validator.methods.required;
    $.validator.methods.required =
      function (value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element))
          return "dependency-mismatch";
        if (element.nodeName.toLowerCase() == 'select' && $(element).val() == 'NotSet') {
          return false;
        }
        return original.apply(this, arguments);
      }
  }
});;
// Gestion des devises du site
(function () {
  namespace('nms.altitude.currencyManager', function (undefined) {
    var self = this,
        getSupportedCurrenciesDeferred = null,
        currencyCookie = function (value) {
          if (value == undefined) {
            return $.cookie("nmsCurrency");
          } else {
            $.cookie('nmsCurrency', value, { expires: 365 });
          }
        };

    self.supportedCurrencies = null; // Liste des devises supportées dans la culture en cours
    self.referenceCurrency = null; // Devise de référence du site

    // Obtient les devises disponibles
    self.getSupportedCurrencies = function () {
      if (getSupportedCurrenciesDeferred == null) {
        getSupportedCurrenciesDeferred = $.Deferred();

        if (self.supportedCurrencies) {
          getSupportedCurrenciesDeferred.resolve(self.supportedCurrencies);
        } else if(AltitudeServices.Inventory) {
          AltitudeServices.Inventory.GetSupportedCurrencies({
            args: {
              CultureId: Altitude3_LongCultureID
            }
          },
          function (result) {
            self.supportedCurrencies = result.Currencies;
            self.referenceCurrency = result.ReferenceCurrency;
            getSupportedCurrenciesDeferred.resolve(self.supportedCurrencies);
          });
        }
      }

      return getSupportedCurrenciesDeferred;
    };

    // Obtient la devise courante
    self.getCurrentCurrency = function () {
      var deferred = $.Deferred(), result = null;

      // obtient les devises disponibles
      self.getSupportedCurrencies().done(function (supportedCurrencies) {
        // Si on a une devise en cookie (sélectionnée), alors on s'ssure qu'elle est disponible et on l'utilise
        var savedCurrency = currencyCookie();
        if (savedCurrency) {
          for (var i = 0; i < supportedCurrencies.length; i++) {
            if (supportedCurrencies[i].IsoCode === savedCurrency) {
              result = supportedCurrencies[i];
              break;
            }
          }
        }

        // Si la devise du cookie est abasente ou invalide, on prend la devise de référence si possible sinon la première devise valide de la liste,
        // Si la devise de référence est dans la liste elle sera au début donc c'est elle qui est prit par défaut.
        if (!result && supportedCurrencies.length > 0) {
          result = supportedCurrencies[0];
        }

        // Si aucune devise n'est valide pour la culture actuelle on retourne la devise de référence du site
        if (!result && self.referenceCurrency != null) {
          result = self.referenceCurrency;
        }

        deferred.resolve(result);
      });

      return deferred
    };

    self.setCurrency = function (currencyIsoCode, onSuccess, onError) {
      self.getSupportedCurrencies().done(function (supportedCurrencies) {
        var currency = null;
        for (var i = 0; i < supportedCurrencies.length; i++) {
          if (supportedCurrencies[i].IsoCode === currencyIsoCode) {
            currency = supportedCurrencies[i];
            break;
          }
        }

        if (currency) {
          currencyCookie(currencyIsoCode);
          if (onSuccess) {
            onSuccess(currency);
          }

          // On trigger le changement de devise
          $(document).trigger(jQuery.Event("onCurrencyChange", {
            'currency': {
              iso: currency.IsoCode,
              id: currency.CurrencyId
            }
          }));

          if (nms.altitude.ProductBrokerHelper) {
            nms.altitude.ProductBrokerHelper.onCurrencyChange(currency.IsoCode, currency.CurrencyId, false);
          }
        } else {
          onError("currencyNotSupported");
        }
      });
    };
  });
})();;
/* SpryMenuBar.js - Revision: Spry Preview Release 1.4 */

// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

/*******************************************************************************

SpryMenuBar.js
This file handles the JavaScript for Spry Menu Bar.  You should have no need
to edit this file.  Some highlights of the MenuBar object is that timers are
used to keep submenus from showing up until the user has hovered over the parent
menu item for some time, as well as a timer for when they leave a submenu to keep
showing that submenu until the timer fires.

*******************************************************************************/

Menu = function (element, opts) {
  this.init(element, opts);
};

Menu.prototype.init = function (element, opts) {
  var self = this;
  this.element = this.getElement(element);
  this.currMenu = null;

  var isie = (typeof document.all != 'undefined' && typeof window.opera == 'undefined' && navigator.vendor != 'KDE');
  if (typeof document.getElementById == 'undefined' || (navigator.vendor == 'Apple Computer, Inc.' && typeof window.XMLHttpRequest == 'undefined') || (isie && typeof document.uniqueID == 'undefined')) {
    return;
  }

  if (opts) {
    for (var k in opts) {
      var rollover = new Image;
      rollover.src = opts[k];
    }
  }

  if (this.element) {
    this.currMenu = this.element;
    var items = this.element.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
      this.initialize(items[i], element, isie);
    }
  }
};

Menu.prototype.getElement = function (ele) {
  if (ele && typeof ele == "string")
    return document.getElementById(ele);
  return ele;
};

Menu.prototype.hasClassName = function (ele, className) {
  if (!ele || !className || !ele.className || ele.className.search(new RegExp("\\b" + className + "\\b")) == -1) {
    return false;
  }
  return true;
};

Menu.prototype.addClassName = function (ele, className) {
  if (!ele || !className || this.hasClassName(ele, className))
    return;
  ele.className += (ele.className ? " " : "") + className;
};

Menu.prototype.removeClassName = function (ele, className) {
  if (!ele || !className || !this.hasClassName(ele, className))
    return;
  ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Menu.prototype.addEventListener = function (element, eventType, handler, capture) {
  try {
    if (element.addEventListener) {
      element.addEventListener(eventType, handler, capture);
    }
    else if (element.attachEvent) {
      element.attachEvent('on' + eventType, handler);
    }
  }
  catch (e) { }
};

Menu.prototype.createIframeLayer = function (menu) {/*
    var layer = document.createElement('iframe');
    layer.tabIndex = '-1';
    layer.src = 'javascript:false;';
    menu.parentNode.appendChild(layer);

    layer.style.left = menu.offsetLeft + 'px';
    layer.style.top = menu.offsetTop + 'px';
    layer.style.width = menu.offsetWidth + 'px';
    layer.style.height = menu.offsetHeight + 'px';*/
};

Menu.prototype.removeIframeLayer = function (menu) {
  /*  var layers = menu.parentNode.getElementsByTagName('iframe');
    while (layers.length > 0) {
      layers[0].parentNode.removeChild(layers[0]);
    } */
};

Menu.prototype.clearMenus = function (root) {
  var menus = root.getElementsByTagName('div');
  for (var i = 0; i < menus.length; i++) {
    this.hideSubmenu(menus[i]);
  }
  this.removeClassName(this.element, "MenuBarActive");
};

Menu.prototype.bubbledTextEvent = function () {
  return (navigator.vendor == 'Apple Computer, Inc.' && (event.target == event.relatedTarget.parentNode || (event.eventPhase == 3 && event.target.parentNode == event.relatedTarget)));
};

Menu.prototype.showSubmenu = function (menu) {

  if (this.currMenu) {
    this.clearMenus(this.currMenu);
    this.currMenu = null;
  }

  if (menu) {
    this.addClassName(menu, "MenuBarSubmenuVisible");
    if (typeof document.uniqueID != "undefined") {
      this.createIframeLayer(menu);
    }
  }
  this.addClassName(this.element, "MenuBarActive");
};

Menu.prototype.hideSubmenu = function (menu) {
  if (menu) {
    this.removeClassName(menu, "MenuBarSubmenuVisible");
    if (typeof document.all != 'undefined' && typeof window.opera == 'undefined' && navigator.vendor != 'KDE') {
      menu.style.top = '';
      menu.style.left = '';
    }
    this.removeIframeLayer(menu);
  }
};

Menu.prototype.initialize = function (listitem, element, isie) {

  var opentime, closetime;
  var link = listitem.getElementsByTagName('a')[0];
  var submenus = listitem.getElementsByTagName('div');
  var menu = (submenus.length > 0 ? submenus[0] : null);

  var hasSubMenu = false;
  if (menu) {
    this.addClassName(link, "MenuBarItemSubmenu");
    hasSubMenu = true;
  }

  if (!isie) {
    // define a simple function that comes standard in IE to determine
    // if a node is within another node
    listitem.contains = function (testNode) {
      // this refers to the list item
      if (testNode == null) {
        return false;
      }
      if (testNode == this) {
        return true;
      }
      else {
        return this.contains(testNode.parentNode);
      }
    };
  }

  // need to save this for scope further down
  var self = this;
  if ((listitem.getAttribute("expansionmode") == "HoverExpansion") || (listitem.getAttribute("expansionmode") == "ClickDisabled")) {
    this.addEventListener(listitem, 'mouseover', function (e) {
      if (self.bubbledTextEvent()) {
        // ignore bubbled text events
        return;
      }
      clearTimeout(closetime);
      if (self.currMenu == listitem) {
        self.currMenu = null;
      }
      // show menu highlighting

      self.addClassName(link, hasSubMenu ? "MenuBarItemSubmenuHover" : "MenuBarItemHover");
      if (menu && !self.hasClassName(menu, "MenuBarSubmenuVisible")) {
        opentime = window.setTimeout(function () { self.showSubmenu(menu); }, 250);
      }
    }, false);
  }
  else if (listitem.getAttribute("expansionmode") == "ClickExpansion") {

    $($(listitem).children("a")[0]).click(function () {
      this.href = "javascript:return false;";
      var isSelected = self.hasClassName(this, "selected");
      var isSiblingSelected = self.hasClassName($(this).siblings("div")[0], "selected");



      $(this).parent().siblings().removeClass("nmsMenuExpanded").find(".nmsMenuExpanded").removeClass("nmsMenuExpanded");
      $(this).siblings().toggleClass("nmsMenuExpanded")

      if (isSelected) {

        $(this).removeClass("selected");

        var parent = $(this).parent()[0];

        if (self.hasClassName(parent, "MenuBar")) {
          parent == null;
        }
        while (parent != null) {
          $(parent).removeClass("selected");
          parent = $(parent).parent()[0];
          if (parent.tagName.toLowerCase() != "div") {
            parent = null;
          }

        }


        $(this).siblings("div").removeClass("selected");
        $(this).siblings("div").find(".selected").removeClass("selected");

      }
      else {

        $(self.element).find(".selected").removeClass("selected");

        $(this).addClass("selected");
        var parent = $(this).parent()[0];
        if (self.hasClassName(parent, "MenuBar")) {
          parent == null;
        }
        while (parent != null) {
          $(parent).addClass("selected");
          $(parent).siblings("a").addClass("selected");
          parent = $(parent).parent()[0];
          if (self.hasClassName(parent, "MenuBar")) {
            parent = null;
          }

        }

      }
      return false;
    });


  }

  if (listitem.getAttribute("expansionmode") != "ClickExpansion") {
    this.addEventListener(listitem, 'mouseout', function (e) {
      if (self.bubbledTextEvent()) {
        // ignore bubbled text events
        return;
      }

      var related = (typeof e.relatedTarget != 'undefined' ? e.relatedTarget : e.toElement);
      if (!listitem.contains(related)) {
        clearTimeout(opentime);
        self.currMenu = listitem;

        // remove menu highlighting
        self.removeClassName(link, hasSubMenu ? "MenuBarItemSubmenuHover" : "MenuBarItemHover");
        if (menu) {
          closetime = window.setTimeout(function () { self.hideSubmenu(menu); }, 600);
        }
      }
    }, false);
  }
};;
function SwapVisibleNmsZone(zoneContainerId, visibleZoneId) {
  $("#" + zoneContainerId).children().each(function () {
    this.parentNode.setAttribute("DisplayedZoneID", visibleZoneId);
    if (this.id == visibleZoneId) {
      $(this).show();
      if ($(this).attr("NmsMultiZoneContentScript") != null) {
        eval($(this).attr("NmsMultiZoneContentScript"));
        $(this).removeAttr("NmsMultiZoneContentScript");
      }
    }
    else {
      $(this).hide();
    }
  });
}

// Initialize la Multizone
function InitializeMultiZone(multiZone, selectedItemID) {
  // Note(Slepine) : J'utilise le sélecteur JQuery "contents" parce qu'il peut juste avoir du texte comme ToggleZone

  // Valide si la multiZone existe
  if (multiZone != null) {
    // Méthode permettant de trouvé la prochaine zone à afficher
    multiZone.FindNextVisibleZone = function (clientID) {
      // Valide si la zone est la zone affiché présentement
      if (clientID == selectedItemID) {
        // Parcours les enfants
        $(multiZone).contents().each(function (index) {
          // Valide si l'ItemID n'est pas le même que la zone sélectionné et qu'il possède des enfants
          if ($(this).attr("id") != selectedItemID && $(this).contents().length > 0) {
            // Affiche la zone
            $(this).css("display", "block");

            // Quitte la boucle
            return false;
          }
        });
      }
    };
  }
}

// Retourne vrai si la multizone est vide, sinon retourne faux. 
// La zone est considéré vide si elle ne contient pas de textes ni d'objet tels des images et des liens
// Si la zone ne contient que des "containers" tels des div et des span, elle est considéré vide
function IsEmpty(multiZone) {
  if ((Trim($(multiZone).text().trim()) != "") || ($(multiZone).find('img').length > 0)
    || ($(multiZone).find('a').length > 0) || ($(multiZone).find('OBJECT').length > 0)) {
    return false;
  }
  else {
    return true;
  }  
}

//Fonction pour trimmer les espaces textes et html
function Trim(myString) {
  var returnString = myString.replace(/^\s+|\s+$/g, '').replace(/^(\&nbsp\;)+|(\&nbsp\;)+$/g, '').split(" ").join('');
  return returnString;
} 
;
/*

Title:		jShowOff: a jQuery Content Rotator Plugin
Author:		Erik Kallevig
Version:	0.1.2
Website:	http://ekallevig.com/jshowoff
License: 	Dual licensed under the MIT and GPL licenses.

jShowOff Options

animatePause :		whether to use 'Pause' animation text when pausing [boolean, defaults to true]
autoPlay :			whether to start playing immediately [boolean, defaults to true]
changeSpeed :		speed of transition [integer, milliseconds, defaults to 600]
controls :			whether to create & display controls (Play/Pause, Previous, Next) [boolean, defaults to true]
controlText :		custom text for controls [object, 'play', 'pause', 'previous' and 'next' properties]
cssClass :			custom class to add to .jshowoff wrapper [string]
effect :			transition effect [string: 'fade', 'slideLeft' or 'none', defaults to 'fade']
hoverPause :		whether to pause on hover [boolean, defaults to true]
links :				whether to create & display numeric links to each slide [boolean, defaults to true]
speed :				time each slide is shown [integer, milliseconds, defaults to 3000]

*/

(function ($) {


  $.fn.jshowoff = function (settings) {

    // default global vars
    var config = {
      animatePause: true,
      autoPlay: true,
      changeSpeed: 600,
      controls: true,
      controlText: {
        play: 'Play',
        pause: 'Pause',
        next: 'Next',
        previous: 'Previous'
      },
      controlZone: { PlayPauseItemID: '', PreviousItemID: '', NextItemID: '' },
      effect: 'fade',
      hoverPause: true,
      links: true,
      speed: 3000
    };

    // merge default global variables with custom variables, modifying 'config'
    if (settings) $.extend(true, config, settings);

    // make sure speed is at least 20ms longer than changeSpeed
    if (config.speed < (config.changeSpeed + 20)) {
      alert('jShowOff: Make speed at least 20ms longer than changeSpeed; the fades aren\'t always right on time.');
      return this;
    };

    // create slideshow for each matching element invoked by .jshowoff()
    this.each(function (i) {

      // declare instance variables
      var $cont = $(this);
      var gallery = $(this).children().remove();
      var timer = '';
      var counter = 0;
      var preloadedImg = [];
      var howManyInstances = $('.jshowoff').length + 1;
      var uniqueClass = 'jshowoff-' + howManyInstances;
      var cssClass = config.cssClass != undefined ? config.cssClass : '';
      var fromButton = false;
      $(document).ready(function () {

        for (var i = 0; i < gallery.length; i++) {
          var multiZone = $("div[MultiZoneInnerId$='" + $(gallery[i]).attr("ItemID") + "']");
          if (multiZone.length > 0) {
            if ($cont.is("div[ItemID='" + multiZone.attr("MultiZoneId") + "']")) {
              multiZone.attr("customIdx", i);
              multiZone.click(function () {
                fromButton = true;
                goToAndPause(parseInt($(this).attr("customIdx")));
                fromButton = false;

              });

              if (i == 0) {
                jQuery.data(multiZone[0], "SwapFunction")();
              }
            }
          }

        }
      });

      // Note(Slepine) : J'ai enlever les positions relatives directement sur les 2 contr�les ci-dessous.
      //                 Ceci causait des probl�mes CSS lors des animations

      // set up wrapper
      $cont.wrap('<div class="jshowoff ' + uniqueClass + '" />');
      var $wrap = $('.' + uniqueClass);
      $wrap.addClass(cssClass);



      // add first slide to wrapper
      var firstClone = $(gallery[0]).clone();
      firstClone.appendTo($cont);
      if (firstClone[0].getAttribute("NmsMultiZoneContentScript") != null) {

        eval(firstClone[0].getAttribute("NmsMultiZoneContentScript"));
        firstClone.removeAttr("NmsMultiZoneContentScript");
      }
      // preload slide images into memory
      preloadImg();


      if (config.controlZone.PlayPauseItemID) {
        if (config.autoPlay) {
          $("[ItemID='" + config.controlZone.PlayPauseItemID + "']").addClass("isNmsPlay");
        }
        $("[ItemID='" + config.controlZone.PlayPauseItemID + "']").click(function () {

          if ($(this).hasClass("isNmsPlay")) {
            nmsPause();
            $(this).removeClass("isNmsPlay");

          }
          else {
            play();
            $(this).addClass("isNmsPlay");

          }
          return false;
        });
      }

      if (config.controlZone.PreviousItemID) {
        $("[ItemID='" + config.controlZone.PreviousItemID + "']").click(function () { previous(); return false; });
      }

      if (config.controlZone.NextItemID) {
        $("[ItemID='" + config.controlZone.NextItemID + "']").click(function () { next(); return false; });
      }

      // add controls
      if (config.controls) {
        addControls();
        if (config.autoPlay == false) {
          $('.' + uniqueClass + '-play').addClass(uniqueClass + '-paused jshowoff-paused').text(config.controlText.play);
        };
      };

      // add slide links
      if (config.links) {
        addSlideLinks();
        $('.' + uniqueClass + '-slidelinks a').eq(0).addClass(uniqueClass + '-active jshowoff-active');
      };

      // pause slide rotation on hover
      if (config.hoverPause) {
        $cont.hover(
                function () { if (isPlaying()) pause('hover'); },
                function () { if (isPlaying()) resumePlay('hover'); }
            );
      };

      // determine autoPlay
      if (config.autoPlay && gallery.length > 1) {
        //Ajout du setTimeout pour corriger un bug dans chrome version 25.xx.xx qui fesait rentr� en conflit 2 caroussel dans la meme page.
        setTimeout(function () {
          timer = setInterval(function () {
            play();
          }, config.speed);
        }, 100);
      };

      // display error message if no slides present
      if (gallery.length < 1) {
        $('.' + uniqueClass).append('<p>For jShowOff to work, the container element must have child elements.</p>');
      };


      // utility for loading slides
      function transitionTo(gallery, index) {


        var oldCounter = counter;
        if ((counter >= gallery.length) || (index >= gallery.length)) { counter = 0; var e2b = true; }
        else if ((counter < 0) || (index < 0)) { counter = gallery.length - 1; var b2e = true; }
        else { counter = index; }

        if (!fromButton) {
          var multiZone = $("div[MultiZoneInnerId$='" + $(gallery[counter]).attr("ItemID") + "']");
          if (multiZone.length > 0) {
            if ($cont.is("div[ItemID='" + multiZone.attr("MultiZoneId") + "']")) {

              jQuery.data(multiZone[0], "SwapFunction")();
            }
          }
        }
        var clone = $(gallery[counter]).clone();

        if (config.effect == 'slideLeft') {
          var newSlideDir, oldSlideDir;
          function slideDir(dir) {
            newSlideDir = dir == 'right' ? 'left' : 'right';
            oldSlideDir = dir == 'left' ? 'left' : 'right';
          };


          counter >= oldCounter ? slideDir('left') : slideDir('right');

          clone.appendTo($cont).slideIt({ direction: newSlideDir, changeSpeed: config.changeSpeed });
          if ($cont.children().length > 1) {
            $cont.children().eq(0).css('position', 'absolute').slideIt({ direction: oldSlideDir, showHide: 'hide', changeSpeed: config.changeSpeed }, function () { $(this).remove(); });
          };
        } else if (config.effect == 'fade') {

          clone.appendTo($cont).hide().fadeIn(config.changeSpeed, function () { if ($.browser.msie) this.style.removeAttribute('filter'); });
          if ($cont.children().length > 1) {
            $cont.children().eq(0).css('position', 'absolute').fadeOut(config.changeSpeed, function () { $(this).remove(); });
          };
        } else if (config.effect == 'none') {
          clone.appendTo($cont);

          if ($cont.children().length > 1) {
            $cont.children().eq(0).css('position', 'absolute').remove();
          };
        };
        if (clone[0].getAttribute("NmsMultiZoneContentScript") != null) {

          eval(clone[0].getAttribute("NmsMultiZoneContentScript"));
          clone.removeAttr("NmsMultiZoneContentScript");
        }

        // update active class on slide link
        if (config.links) {
          $('.' + uniqueClass + '-active').removeClass(uniqueClass + '-active jshowoff-active');
          $('.' + uniqueClass + '-slidelinks a').eq(counter).addClass(uniqueClass + '-active jshowoff-active');
        };
      };

      // is the rotator currently in 'play' mode
      function isPlaying() {
        if (config.controlZone.PlayPauseItemID != "") {
          if ($("[ItemID='" + config.controlZone.PlayPauseItemID + "']").hasClass("isNmsPlay")) {
            return true;
          }
          else {
            return false;
          }
        }
        else {
          return $('.' + uniqueClass + '-play').hasClass('jshowoff-paused') ? false : true;
        }

      };

      function resumePlay(src) {
        if (!isBusy()) {
          //NOTE (blefebvre) : Pour les caroussels qui ont l'option HoverPause, appeler transitionTo cause un bug  qui fait revenir la m�me slide � chaque fois qu'on mouseOut du caroussel (plus voyant avec slideLeft)
          //transitionTo(gallery, counter);
          if (src == 'hover' || !isPlaying()) {
            timer = setInterval(function () { play(); }, config.speed);
          }
          if (!isPlaying()) {
            $('.' + uniqueClass + '-play').text(config.controlText.pause).removeClass('jshowoff-paused ' + uniqueClass + '-paused');
          }
        };
      }

      // start slide rotation on specified interval
      function play(src) {

        if (!isBusy()) {
          counter++;
          transitionTo(gallery, counter);
          if (src == 'hover' || !isPlaying()) {
            timer = setInterval(function () { play(); }, config.speed);
          }
          if (!isPlaying()) {
            $('.' + uniqueClass + '-play').text(config.controlText.pause).removeClass('jshowoff-paused ' + uniqueClass + '-paused');
          }
        };
      };

      function nmsPause() {
        clearInterval(timer);
      }

      // stop slide rotation
      function pause(src) {
        clearInterval(timer);
        if (!src || src == 'playBtn') $('.' + uniqueClass + '-play').text(config.controlText.play).addClass('jshowoff-paused ' + uniqueClass + '-paused');
        if (config.animatePause && src == 'playBtn') {
          $('<p class="' + uniqueClass + '-pausetext jshowoff-pausetext">' + config.controlText.pause + '</p>').css({ fontSize: '62%', textAlign: 'center', position: 'absolute', top: '40%', lineHeight: '100%', width: '100%' }).appendTo($wrap).addClass(uniqueClass + 'pauseText').animate({ fontSize: '600%', top: '30%', opacity: 0 }, { duration: 500, complete: function () { $(this).remove(); } });
        }
      };

      // load the next slide
      function next() {
        goToAndPause(counter + 1);
      };

      // load the previous slide
      function previous() {
        goToAndPause(counter - 1);
      };

      // is the rotator in mid-transition
      function isBusy() {
        return $cont.children().length > 1 ? true : false;
      };

      // load a specific slide
      function goToAndPause(index) {
        $cont.children().stop(true, true);
        if ((counter != index) || ((counter == index) && isBusy())) {
          if (isBusy()) $cont.children().eq(0).remove();
          transitionTo(gallery, index);
          pause();
        };
      };

      // load images into memory
      function preloadImg() {
        $(gallery).each(function (i) {
          $(this).find('img').each(function (i) {
            preloadedImg[i] = $('<img>').attr('src', $(this).attr('src'));
          });
        });
      };

      // generate and add play/pause, prev, next controls
      function addControls() {
        $wrap.append('<p class="jshowoff-controls ' + uniqueClass + '-controls"><a class="jshowoff-play ' + uniqueClass + '-play" href="#null">' + config.controlText.pause + '</a> <a class="jshowoff-prev ' + uniqueClass + '-prev" href="#null">' + config.controlText.previous + '</a> <a class="jshowoff-next ' + uniqueClass + '-next" href="#null">' + config.controlText.next + '</a></p>');
        $('.' + uniqueClass + '-controls a').each(function () {
          if ($(this).hasClass('jshowoff-play')) $(this).click(function () { isPlaying() ? pause('playBtn') : play(); return false; });
          if ($(this).hasClass('jshowoff-prev')) $(this).click(function () { previous(); return false; });
          if ($(this).hasClass('jshowoff-next')) $(this).click(function () { next(); return false; });

        });
      };

      // generate and add slide links
      function addSlideLinks() {
        $wrap.append('<p class="jshowoff-slidelinks ' + uniqueClass + '-slidelinks"></p>');
        $.each(gallery, function (i, val) {
          var linktext = ($(this).attr('title') != '' && typeof ($(this).attr('title')) != 'undefined') ? $(this).attr('title') : i + 1;
          $('<a class="jshowoff-slidelink-' + i + ' ' + uniqueClass + '-slidelink-' + i + '" href="#null">' + linktext + '</a>').bind('click', { index: i }, function (e) { goToAndPause(e.data.index); return false; }).appendTo('.' + uniqueClass + '-slidelinks');
        });
      };


      // end .each
    });

    return this;

    // end .jshowoff
  };

  // end closure
})(jQuery);




(function ($) {

  $.fn.slideIt = function (settings, callback) {

    // default global vars
    var config = {
      direction: 'left',
      showHide: 'show',
      changeSpeed: 600
    };

    // merge default global variables with custom variables, modifying 'config'
    if (settings) $.extend(config, settings);

    this.each(function (i) {
      $(this).css({ left: 'auto', right: 'auto', top: 'auto', bottom: 'auto' });
      var measurement = (config.direction == 'left') || (config.direction == 'right') ? $(this).outerWidth() : $(this).outerHeight();
      var startStyle = {};
      startStyle['position'] = $(this).css('position') == 'static' ? 'relative' : $(this).css('position');
      startStyle[config.direction] = (config.showHide == 'show') ? '-' + measurement + 'px' : 0;
      var endStyle = {};
      endStyle[config.direction] = config.showHide == 'show' ? 0 : '-' + measurement + 'px';
      $(this).css(startStyle).animate(endStyle, config.changeSpeed, callback);
      // end .each
    });

    return this;

    // end .slideIt
  };

  // end closure
})(jQuery);
if (typeof (Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();;
function RegisterClick(item) {
    var guid = $(item).data("IdentifierGuid");
    var type = $(item).data("GuidType");

    if (typeof (guid) != "undefined" && typeof (type) != "undefined" && guid != "00000000-0000-0000-0000-000000000000" && type != null && guid != null) {
      $.ajax({
          type: "post",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          url: '/Service/FormManagerService.asmx/RegisterClick',
          data: "{'identifierGuid': '" + guid + "', 'guidType': '" + type + "'}"
      });
    }
};
