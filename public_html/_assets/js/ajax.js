//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjax.js
Function.__typeName="Function";Function.__class=true;Function.createCallback=function(b,a){return function(){var e=arguments.length;if(e>0){var d=[];for(var c=0;c<e;c++)d[c]=arguments[c];d[e]=a;return b.apply(this,d)}return b.call(this,a)}};Function.createDelegate=function(a,b){return function(){return b.apply(a,arguments)}};Function.emptyFunction=Function.emptyMethod=function(){};Function.validateParameters=function(c,b,a){return Function._validateParams(c,b,a)};Function._validateParams=function(g,e,c){var a,d=e.length;c=c||typeof c==="undefined";a=Function._validateParameterCount(g,e,c);if(a){a.popStackFrame();return a}for(var b=0,i=g.length;b<i;b++){var f=e[Math.min(b,d-1)],h=f.name;if(f.parameterArray)h+="["+(b-d+1)+"]";else if(!c&&b>=d)break;a=Function._validateParameter(g[b],f,h);if(a){a.popStackFrame();return a}}return null};Function._validateParameterCount=function(j,d,i){var a,c,b=d.length,e=j.length;if(e<b){var f=b;for(a=0;a<b;a++){var g=d[a];if(g.optional||g.parameterArray)f--}if(e<f)c=true}else if(i&&e>b){c=true;for(a=0;a<b;a++)if(d[a].parameterArray){c=false;break}}if(c){var h=Error.parameterCount();h.popStackFrame();return h}return null};Function._validateParameter=function(c,a,h){var b,g=a.type,l=!!a.integer,k=!!a.domElement,m=!!a.mayBeNull;b=Function._validateParameterType(c,g,l,k,m,h);if(b){b.popStackFrame();return b}var e=a.elementType,f=!!a.elementMayBeNull;if(g===Array&&typeof c!=="undefined"&&c!==null&&(e||!f)){var j=!!a.elementInteger,i=!!a.elementDomElement;for(var d=0;d<c.length;d++){var n=c[d];b=Function._validateParameterType(n,e,j,i,f,h+"["+d+"]");if(b){b.popStackFrame();return b}}}return null};Function._validateParameterType=function(b,c,k,j,h,d){var a,g;if(typeof b==="undefined")if(h)return null;else{a=Error.argumentUndefined(d);a.popStackFrame();return a}if(b===null)if(h)return null;else{a=Error.argumentNull(d);a.popStackFrame();return a}if(c&&c.__enum){if(typeof b!=="number"){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(b%1===0){var e=c.prototype;if(!c.__flags||b===0){for(g in e)if(e[g]===b)return null}else{var i=b;for(g in e){var f=e[g];if(f===0)continue;if((f&b)===f)i-=f;if(i===0)return null}}}a=Error.argumentOutOfRange(d,b,String.format(Sys.Res.enumInvalidValue,b,c.getName()));a.popStackFrame();return a}if(j&&(!Sys._isDomElement(b)||b.nodeType===3)){a=Error.argument(d,Sys.Res.argumentDomElement);a.popStackFrame();return a}if(c&&!Sys._isInstanceOfType(c,b)){a=Error.argumentType(d,Object.getType(b),c);a.popStackFrame();return a}if(c===Number&&k)if(b%1!==0){a=Error.argumentOutOfRange(d,b,Sys.Res.argumentInteger);a.popStackFrame();return a}return null};Error.__typeName="Error";Error.__class=true;Error.create=function(d,b){var a=new Error(d);a.message=d;if(b)for(var c in b)a[c]=b[c];a.popStackFrame();return a};Error.argument=function(a,c){var b="Sys.ArgumentException: "+(c?c:Sys.Res.argument);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentException",paramName:a});d.popStackFrame();return d};Error.argumentNull=function(a,c){var b="Sys.ArgumentNullException: "+(c?c:Sys.Res.argumentNull);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentNullException",paramName:a});d.popStackFrame();return d};Error.argumentOutOfRange=function(c,a,d){var b="Sys.ArgumentOutOfRangeException: "+(d?d:Sys.Res.argumentOutOfRange);if(c)b+="\n"+String.format(Sys.Res.paramName,c);if(typeof a!=="undefined"&&a!==null)b+="\n"+String.format(Sys.Res.actualValue,a);var e=Error.create(b,{name:"Sys.ArgumentOutOfRangeException",paramName:c,actualValue:a});e.popStackFrame();return e};Error.argumentType=function(d,c,b,e){var a="Sys.ArgumentTypeException: ";if(e)a+=e;else if(c&&b)a+=String.format(Sys.Res.argumentTypeWithTypes,c.getName(),b.getName());else a+=Sys.Res.argumentType;if(d)a+="\n"+String.format(Sys.Res.paramName,d);var f=Error.create(a,{name:"Sys.ArgumentTypeException",paramName:d,actualType:c,expectedType:b});f.popStackFrame();return f};Error.argumentUndefined=function(a,c){var b="Sys.ArgumentUndefinedException: "+(c?c:Sys.Res.argumentUndefined);if(a)b+="\n"+String.format(Sys.Res.paramName,a);var d=Error.create(b,{name:"Sys.ArgumentUndefinedException",paramName:a});d.popStackFrame();return d};Error.format=function(a){var c="Sys.FormatException: "+(a?a:Sys.Res.format),b=Error.create(c,{name:"Sys.FormatException"});b.popStackFrame();return b};Error.invalidOperation=function(a){var c="Sys.InvalidOperationException: "+(a?a:Sys.Res.invalidOperation),b=Error.create(c,{name:"Sys.InvalidOperationException"});b.popStackFrame();return b};Error.notImplemented=function(a){var c="Sys.NotImplementedException: "+(a?a:Sys.Res.notImplemented),b=Error.create(c,{name:"Sys.NotImplementedException"});b.popStackFrame();return b};Error.parameterCount=function(a){var c="Sys.ParameterCountException: "+(a?a:Sys.Res.parameterCount),b=Error.create(c,{name:"Sys.ParameterCountException"});b.popStackFrame();return b};Error.prototype.popStackFrame=function(){if(typeof this.stack==="undefined"||this.stack===null||typeof this.fileName==="undefined"||this.fileName===null||typeof this.lineNumber==="undefined"||this.lineNumber===null)return;var a=this.stack.split("\n"),c=a[0],e=this.fileName+":"+this.lineNumber;while(typeof c!=="undefined"&&c!==null&&c.indexOf(e)===-1){a.shift();c=a[0]}var d=a[1];if(typeof d==="undefined"||d===null)return;var b=d.match(/@(.*):(\d+)$/);if(typeof b==="undefined"||b===null)return;this.fileName=b[1];this.lineNumber=parseInt(b[2]);a.shift();this.stack=a.join("\n")};Object.__typeName="Object";Object.__class=true;Object.getType=function(b){var a=b.constructor;if(!a||typeof a!=="function"||!a.__typeName||a.__typeName==="Object")return Object;return a};Object.getTypeName=function(a){return Object.getType(a).getName()};String.__typeName="String";String.__class=true;String.prototype.endsWith=function(a){return this.substr(this.length-a.length)===a};String.prototype.startsWith=function(a){return this.substr(0,a.length)===a};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.trimEnd=function(){return this.replace(/\s+$/,"")};String.prototype.trimStart=function(){return this.replace(/^\s+/,"")};String.format=function(){return String._toFormattedString(false,arguments)};String._toFormattedString=function(l,j){var c="",e=j[0];for(var a=0;true;){var f=e.indexOf("{",a),d=e.indexOf("}",a);if(f<0&&d<0){c+=e.slice(a);break}if(d>0&&(d<f||f<0)){c+=e.slice(a,d+1);a=d+2;continue}c+=e.slice(a,f);a=f+1;if(e.charAt(a)==="{"){c+="{";a++;continue}if(d<0)break;var h=e.substring(a,d),g=h.indexOf(":"),k=parseInt(g<0?h:h.substring(0,g),10)+1,i=g<0?"":h.substring(g+1),b=j[k];if(typeof b==="undefined"||b===null)b="";if(b.toFormattedString)c+=b.toFormattedString(i);else if(l&&b.localeFormat)c+=b.localeFormat(i);else if(b.format)c+=b.format(i);else c+=b.toString();a=d+1}return c};Boolean.__typeName="Boolean";Boolean.__class=true;Boolean.parse=function(b){var a=b.trim().toLowerCase();if(a==="false")return false;if(a==="true")return true};Date.__typeName="Date";Date.__class=true;Number.__typeName="Number";Number.__class=true;RegExp.__typeName="RegExp";RegExp.__class=true;if(!window)this.window=this;window.Type=Function;Type.prototype.callBaseMethod=function(a,d,b){var c=Sys._getBaseMethod(this,a,d);if(!b)return c.apply(a);else return c.apply(a,b)};Type.prototype.getBaseMethod=function(a,b){return Sys._getBaseMethod(this,a,b)};Type.prototype.getBaseType=function(){return typeof this.__baseType==="undefined"?null:this.__baseType};Type.prototype.getInterfaces=function(){var a=[],b=this;while(b){var c=b.__interfaces;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Array.contains(a,e))a[a.length]=e}b=b.__baseType}return a};Type.prototype.getName=function(){return typeof this.__typeName==="undefined"?"":this.__typeName};Type.prototype.implementsInterface=function(d){this.resolveInheritance();var c=d.getName(),a=this.__interfaceCache;if(a){var e=a[c];if(typeof e!=="undefined")return e}else a=this.__interfaceCache={};var b=this;while(b){var f=b.__interfaces;if(f)if(Array.indexOf(f,d)!==-1)return a[c]=true;b=b.__baseType}return a[c]=false};Type.prototype.inheritsFrom=function(b){this.resolveInheritance();var a=this.__baseType;while(a){if(a===b)return true;a=a.__baseType}return false};Type.prototype.initializeBase=function(a,b){this.resolveInheritance();if(this.__baseType)if(!b)this.__baseType.apply(a);else this.__baseType.apply(a,b);return a};Type.prototype.isImplementedBy=function(a){if(typeof a==="undefined"||a===null)return false;var b=Object.getType(a);return !!(b.implementsInterface&&b.implementsInterface(this))};Type.prototype.isInstanceOfType=function(a){return Sys._isInstanceOfType(this,a)};Type.prototype.registerClass=function(c,b,d){this.prototype.constructor=this;this.__typeName=c;this.__class=true;if(b){this.__baseType=b;this.__basePrototypePending=true}Sys.__upperCaseTypes[c.toUpperCase()]=this;if(d){this.__interfaces=[];for(var a=2,f=arguments.length;a<f;a++){var e=arguments[a];this.__interfaces.push(e)}}return this};Type.prototype.registerInterface=function(a){Sys.__upperCaseTypes[a.toUpperCase()]=this;this.prototype.constructor=this;this.__typeName=a;this.__interface=true;return this};Type.prototype.resolveInheritance=function(){if(this.__basePrototypePending){var b=this.__baseType;b.resolveInheritance();for(var a in b.prototype){var c=b.prototype[a];if(!this.prototype[a])this.prototype[a]=c}delete this.__basePrototypePending}};Type.getRootNamespaces=function(){return Array.clone(Sys.__rootNamespaces)};Type.isClass=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__class};Type.isInterface=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__interface};Type.isNamespace=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__namespace};Type.parse=function(typeName,ns){var fn;if(ns){fn=Sys.__upperCaseTypes[ns.getName().toUpperCase()+"."+typeName.toUpperCase()];return fn||null}if(!typeName)return null;if(!Type.__htClasses)Type.__htClasses={};fn=Type.__htClasses[typeName];if(!fn){fn=eval(typeName);Type.__htClasses[typeName]=fn}return fn};Type.registerNamespace=function(e){var d=window,c=e.split(".");for(var b=0;b<c.length;b++){var f=c[b],a=d[f];if(!a)a=d[f]={};if(!a.__namespace){if(b===0&&e!=="Sys")Sys.__rootNamespaces[Sys.__rootNamespaces.length]=a;a.__namespace=true;a.__typeName=c.slice(0,b+1).join(".");a.getName=function(){return this.__typeName}}d=a}};Type._checkDependency=function(c,a){var d=Type._registerScript._scripts,b=d?!!d[c]:false;if(typeof a!=="undefined"&&!b)throw Error.invalidOperation(String.format(Sys.Res.requiredScriptReferenceNotIncluded,a,c));return b};Type._registerScript=function(a,c){var b=Type._registerScript._scripts;if(!b)Type._registerScript._scripts=b={};if(b[a])throw Error.invalidOperation(String.format(Sys.Res.scriptAlreadyLoaded,a));b[a]=true;if(c)for(var d=0,f=c.length;d<f;d++){var e=c[d];if(!Type._checkDependency(e))throw Error.invalidOperation(String.format(Sys.Res.scriptDependencyNotFound,a,e))}};Type.registerNamespace("Sys");Sys.__upperCaseTypes={};Sys.__rootNamespaces=[Sys];Sys._isInstanceOfType=function(c,b){if(typeof b==="undefined"||b===null)return false;if(b instanceof c)return true;var a=Object.getType(b);return !!(a===c)||a.inheritsFrom&&a.inheritsFrom(c)||a.implementsInterface&&a.implementsInterface(c)};Sys._getBaseMethod=function(d,e,c){var b=d.getBaseType();if(b){var a=b.prototype[c];return a instanceof Function?a:null}return null};Sys._isDomElement=function(a){var c=false;if(typeof a.nodeType!=="number"){var b=a.ownerDocument||a.document||a;if(b!=a){var d=b.defaultView||b.parentWindow;c=d!=a}else c=typeof b.body==="undefined"}return !c};Array.__typeName="Array";Array.__class=true;Array.add=Array.enqueue=function(a,b){a[a.length]=b};Array.addRange=function(a,b){a.push.apply(a,b)};Array.clear=function(a){a.length=0};Array.clone=function(a){if(a.length===1)return [a[0]];else return Array.apply(null,a)};Array.contains=function(a,b){return Sys._indexOf(a,b)>=0};Array.dequeue=function(a){return a.shift()};Array.forEach=function(b,e,d){for(var a=0,f=b.length;a<f;a++){var c=b[a];if(typeof c!=="undefined")e.call(d,c,a,b)}};Array.indexOf=function(a,c,b){return Sys._indexOf(a,c,b)};Array.insert=function(a,b,c){a.splice(b,0,c)};Array.parse=function(value){if(!value)return [];return eval(value)};Array.remove=function(b,c){var a=Sys._indexOf(b,c);if(a>=0)b.splice(a,1);return a>=0};Array.removeAt=function(a,b){a.splice(b,1)};Sys._indexOf=function(d,e,a){if(typeof e==="undefined")return -1;var c=d.length;if(c!==0){a=a-0;if(isNaN(a))a=0;else{if(isFinite(a))a=a-a%1;if(a<0)a=Math.max(0,c+a)}for(var b=a;b<c;b++)if(typeof d[b]!=="undefined"&&d[b]===e)return b}return -1};Type._registerScript._scripts={"MicrosoftAjaxCore.js":true,"MicrosoftAjaxGlobalization.js":true,"MicrosoftAjaxSerialization.js":true,"MicrosoftAjaxComponentModel.js":true,"MicrosoftAjaxHistory.js":true,"MicrosoftAjaxNetwork.js":true,"MicrosoftAjaxWebServices.js":true};Sys.IDisposable=function(){};Sys.IDisposable.prototype={};Sys.IDisposable.registerInterface("Sys.IDisposable");Sys.StringBuilder=function(a){this._parts=typeof a!=="undefined"&&a!==null&&a!==""?[a.toString()]:[];this._value={};this._len=0};Sys.StringBuilder.prototype={append:function(a){this._parts[this._parts.length]=a},appendLine:function(a){this._parts[this._parts.length]=typeof a==="undefined"||a===null||a===""?"\r\n":a+"\r\n"},clear:function(){this._parts=[];this._value={};this._len=0},isEmpty:function(){if(this._parts.length===0)return true;return this.toString()===""},toString:function(a){a=a||"";var b=this._parts;if(this._len!==b.length){this._value={};this._len=b.length}var d=this._value;if(typeof d[a]==="undefined"){if(a!=="")for(var c=0;c<b.length;)if(typeof b[c]==="undefined"||b[c]===""||b[c]===null)b.splice(c,1);else c++;d[a]=this._parts.join(a)}return d[a]}};Sys.StringBuilder.registerClass("Sys.StringBuilder");Sys.Browser={};Sys.Browser.InternetExplorer={};Sys.Browser.Firefox={};Sys.Browser.Safari={};Sys.Browser.Opera={};Sys.Browser.agent=null;Sys.Browser.hasDebuggerStatement=false;Sys.Browser.name=navigator.appName;Sys.Browser.version=parseFloat(navigator.appVersion);Sys.Browser.documentMode=0;if(navigator.userAgent.indexOf(" MSIE ")>-1){Sys.Browser.agent=Sys.Browser.InternetExplorer;Sys.Browser.version=parseFloat(navigator.userAgent.match(/MSIE (\d+\.\d+)/)[1]);if(Sys.Browser.version>=8)if(document.documentMode>=7)Sys.Browser.documentMode=document.documentMode;Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" Firefox/")>-1){Sys.Browser.agent=Sys.Browser.Firefox;Sys.Browser.version=parseFloat(navigator.userAgent.match(/Firefox\/(\d+\.\d+)/)[1]);Sys.Browser.name="Firefox";Sys.Browser.hasDebuggerStatement=true}else if(navigator.userAgent.indexOf(" AppleWebKit/")>-1){Sys.Browser.agent=Sys.Browser.Safari;Sys.Browser.version=parseFloat(navigator.userAgent.match(/AppleWebKit\/(\d+(\.\d+)?)/)[1]);Sys.Browser.name="Safari"}else if(navigator.userAgent.indexOf("Opera/")>-1)Sys.Browser.agent=Sys.Browser.Opera;Sys.EventArgs=function(){};Sys.EventArgs.registerClass("Sys.EventArgs");Sys.EventArgs.Empty=new Sys.EventArgs;Sys.CancelEventArgs=function(){Sys.CancelEventArgs.initializeBase(this);this._cancel=false};Sys.CancelEventArgs.prototype={get_cancel:function(){return this._cancel},set_cancel:function(a){this._cancel=a}};Sys.CancelEventArgs.registerClass("Sys.CancelEventArgs",Sys.EventArgs);Type.registerNamespace("Sys.UI");Sys._Debug=function(){};Sys._Debug.prototype={_appendConsole:function(a){if(typeof Debug!=="undefined"&&Debug.writeln)Debug.writeln(a);if(window.console&&window.console.log)window.console.log(a);if(window.opera)window.opera.postError(a);if(window.debugService)window.debugService.trace(a)},_appendTrace:function(b){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value+=b+"\n"},assert:function(c,a,b){if(!c){a=b&&this.assert.caller?String.format(Sys.Res.assertFailedCaller,a,this.assert.caller):String.format(Sys.Res.assertFailed,a);if(confirm(String.format(Sys.Res.breakIntoDebugger,a)))this.fail(a)}},clearTrace:function(){var a=document.getElementById("TraceConsole");if(a&&a.tagName.toUpperCase()==="TEXTAREA")a.value=""},fail:function(message){this._appendConsole(message);if(Sys.Browser.hasDebuggerStatement)eval("debugger")},trace:function(a){this._appendConsole(a);this._appendTrace(a)},traceDump:function(a,b){var c=this._traceDump(a,b,true)},_traceDump:function(a,c,f,b,d){c=c?c:"traceDump";b=b?b:"";if(a===null){this.trace(b+c+": null");return}switch(typeof a){case "undefined":this.trace(b+c+": Undefined");break;case "number":case "string":case "boolean":this.trace(b+c+": "+a);break;default:if(Date.isInstanceOfType(a)||RegExp.isInstanceOfType(a)){this.trace(b+c+": "+a.toString());break}if(!d)d=[];else if(Array.contains(d,a)){this.trace(b+c+": ...");return}Array.add(d,a);if(a==window||a===document||window.HTMLElement&&a instanceof HTMLElement||typeof a.nodeName==="string"){var k=a.tagName?a.tagName:"DomElement";if(a.id)k+=" - "+a.id;this.trace(b+c+" {"+k+"}")}else{var i=Object.getTypeName(a);this.trace(b+c+(typeof i==="string"?" {"+i+"}":""));if(b===""||f){b+="    ";var e,j,l,g,h;if(Array.isInstanceOfType(a)){j=a.length;for(e=0;e<j;e++)this._traceDump(a[e],"["+e+"]",f,b,d)}else for(g in a){h=a[g];if(!Function.isInstanceOfType(h))this._traceDump(h,g,f,b,d)}}}Array.remove(d,a)}}};Sys._Debug.registerClass("Sys._Debug");Sys.Debug=new Sys._Debug;Sys.Debug.isDebug=false;function Sys$Enum$parse(c,e){var a,b,i;if(e){a=this.__lowerCaseValues;if(!a){this.__lowerCaseValues=a={};var g=this.prototype;for(var f in g)a[f.toLowerCase()]=g[f]}}else a=this.prototype;if(!this.__flags){i=e?c.toLowerCase():c;b=a[i.trim()];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c,this.__typeName));return b}else{var h=(e?c.toLowerCase():c).split(","),j=0;for(var d=h.length-1;d>=0;d--){var k=h[d].trim();b=a[k];if(typeof b!=="number")throw Error.argument("value",String.format(Sys.Res.enumInvalidValue,c.split(",")[d].trim(),this.__typeName));j|=b}return j}}function Sys$Enum$toString(c){if(typeof c==="undefined"||c===null)return this.__string;var d=this.prototype,a;if(!this.__flags||c===0){for(a in d)if(d[a]===c)return a}else{var b=this.__sortedValues;if(!b){b=[];for(a in d)b[b.length]={key:a,value:d[a]};b.sort(function(a,b){return a.value-b.value});this.__sortedValues=b}var e=[],g=c;for(a=b.length-1;a>=0;a--){var h=b[a],f=h.value;if(f===0)continue;if((f&c)===f){e[e.length]=h.key;g-=f;if(g===0)break}}if(e.length&&g===0)return e.reverse().join(", ")}return ""}Type.prototype.registerEnum=function(b,c){Sys.__upperCaseTypes[b.toUpperCase()]=this;for(var a in this.prototype)this[a]=this.prototype[a];this.__typeName=b;this.parse=Sys$Enum$parse;this.__string=this.toString();this.toString=Sys$Enum$toString;this.__flags=c;this.__enum=true};Type.isEnum=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__enum};Type.isFlags=function(a){if(typeof a==="undefined"||a===null)return false;return !!a.__flags};Sys.CollectionChange=function(e,a,c,b,d){this.action=e;if(a)if(!(a instanceof Array))a=[a];this.newItems=a||null;if(typeof c!=="number")c=-1;this.newStartingIndex=c;if(b)if(!(b instanceof Array))b=[b];this.oldItems=b||null;if(typeof d!=="number")d=-1;this.oldStartingIndex=d};Sys.CollectionChange.registerClass("Sys.CollectionChange");Sys.NotifyCollectionChangedAction=function(){throw Error.notImplemented()};Sys.NotifyCollectionChangedAction.prototype={add:0,remove:1,reset:2};Sys.NotifyCollectionChangedAction.registerEnum("Sys.NotifyCollectionChangedAction");Sys.NotifyCollectionChangedEventArgs=function(a){this._changes=a;Sys.NotifyCollectionChangedEventArgs.initializeBase(this)};Sys.NotifyCollectionChangedEventArgs.prototype={get_changes:function(){return this._changes||[]}};Sys.NotifyCollectionChangedEventArgs.registerClass("Sys.NotifyCollectionChangedEventArgs",Sys.EventArgs);Sys.Observer=function(){};Sys.Observer.registerClass("Sys.Observer");Sys.Observer.makeObservable=function(a){var c=a instanceof Array,b=Sys.Observer;if(a.setValue===b._observeMethods.setValue)return a;b._addMethods(a,b._observeMethods);if(c)b._addMethods(a,b._arrayMethods);return a};Sys.Observer._addMethods=function(c,b){for(var a in b)c[a]=b[a]};Sys.Observer._addEventHandler=function(c,a,b){Sys.Observer._getContext(c,true).events._addHandler(a,b)};Sys.Observer.addEventHandler=function(c,a,b){Sys.Observer._addEventHandler(c,a,b)};Sys.Observer._removeEventHandler=function(c,a,b){Sys.Observer._getContext(c,true).events._removeHandler(a,b)};Sys.Observer.removeEventHandler=function(c,a,b){Sys.Observer._removeEventHandler(c,a,b)};Sys.Observer.raiseEvent=function(b,e,d){var c=Sys.Observer._getContext(b);if(!c)return;var a=c.events.getHandler(e);if(a)a(b,d)};Sys.Observer.addPropertyChanged=function(b,a){Sys.Observer._addEventHandler(b,"propertyChanged",a)};Sys.Observer.removePropertyChanged=function(b,a){Sys.Observer._removeEventHandler(b,"propertyChanged",a)};Sys.Observer.beginUpdate=function(a){Sys.Observer._getContext(a,true).updating=true};Sys.Observer.endUpdate=function(b){var a=Sys.Observer._getContext(b);if(!a||!a.updating)return;a.updating=false;var d=a.dirty;a.dirty=false;if(d){if(b instanceof Array){var c=a.changes;a.changes=null;Sys.Observer.raiseCollectionChanged(b,c)}Sys.Observer.raisePropertyChanged(b,"")}};Sys.Observer.isUpdating=function(b){var a=Sys.Observer._getContext(b);return a?a.updating:false};Sys.Observer._setValue=function(a,j,g){var b,f,k=a,d=j.split(".");for(var i=0,m=d.length-1;i<m;i++){var l=d[i];b=a["get_"+l];if(typeof b==="function")a=b.call(a);else a=a[l];var n=typeof a;if(a===null||n==="undefined")throw Error.invalidOperation(String.format(Sys.Res.nullReferenceInPath,j))}var e,c=d[m];b=a["get_"+c];f=a["set_"+c];if(typeof b==="function")e=b.call(a);else e=a[c];if(typeof f==="function")f.call(a,g);else a[c]=g;if(e!==g){var h=Sys.Observer._getContext(k);if(h&&h.updating){h.dirty=true;return}Sys.Observer.raisePropertyChanged(k,d[0])}};Sys.Observer.setValue=function(b,a,c){Sys.Observer._setValue(b,a,c)};Sys.Observer.raisePropertyChanged=function(b,a){Sys.Observer.raiseEvent(b,"propertyChanged",new Sys.PropertyChangedEventArgs(a))};Sys.Observer.addCollectionChanged=function(b,a){Sys.Observer._addEventHandler(b,"collectionChanged",a)};Sys.Observer.removeCollectionChanged=function(b,a){Sys.Observer._removeEventHandler(b,"collectionChanged",a)};Sys.Observer._collectionChange=function(d,c){var a=Sys.Observer._getContext(d);if(a&&a.updating){a.dirty=true;var b=a.changes;if(!b)a.changes=b=[c];else b.push(c)}else{Sys.Observer.raiseCollectionChanged(d,[c]);Sys.Observer.raisePropertyChanged(d,"length")}};Sys.Observer.add=function(a,b){var c=new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,[b],a.length);Array.add(a,b);Sys.Observer._collectionChange(a,c)};Sys.Observer.addRange=function(a,b){var c=new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,b,a.length);Array.addRange(a,b);Sys.Observer._collectionChange(a,c)};Sys.Observer.clear=function(a){var b=Array.clone(a);Array.clear(a);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.reset,null,-1,b,0))};Sys.Observer.insert=function(a,b,c){Array.insert(a,b,c);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.add,[c],b))};Sys.Observer.remove=function(a,b){var c=Array.indexOf(a,b);if(c!==-1){Array.remove(a,b);Sys.Observer._collectionChange(a,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove,null,-1,[b],c));return true}return false};Sys.Observer.removeAt=function(b,a){if(a>-1&&a<b.length){var c=b[a];Array.removeAt(b,a);Sys.Observer._collectionChange(b,new Sys.CollectionChange(Sys.NotifyCollectionChangedAction.remove,null,-1,[c],a))}};Sys.Observer.raiseCollectionChanged=function(b,a){Sys.Observer.raiseEvent(b,"collectionChanged",new Sys.NotifyCollectionChangedEventArgs(a))};Sys.Observer._observeMethods={add_propertyChanged:function(a){Sys.Observer._addEventHandler(this,"propertyChanged",a)},remove_propertyChanged:function(a){Sys.Observer._removeEventHandler(this,"propertyChanged",a)},addEventHandler:function(a,b){Sys.Observer._addEventHandler(this,a,b)},removeEventHandler:function(a,b){Sys.Observer._removeEventHandler(this,a,b)},get_isUpdating:function(){return Sys.Observer.isUpdating(this)},beginUpdate:function(){Sys.Observer.beginUpdate(this)},endUpdate:function(){Sys.Observer.endUpdate(this)},setValue:function(b,a){Sys.Observer._setValue(this,b,a)},raiseEvent:function(b,a){Sys.Observer.raiseEvent(this,b,a)},raisePropertyChanged:function(a){Sys.Observer.raiseEvent(this,"propertyChanged",new Sys.PropertyChangedEventArgs(a))}};Sys.Observer._arrayMethods={add_collectionChanged:function(a){Sys.Observer._addEventHandler(this,"collectionChanged",a)},remove_collectionChanged:function(a){Sys.Observer._removeEventHandler(this,"collectionChanged",a)},add:function(a){Sys.Observer.add(this,a)},addRange:function(a){Sys.Observer.addRange(this,a)},clear:function(){Sys.Observer.clear(this)},insert:function(a,b){Sys.Observer.insert(this,a,b)},remove:function(a){return Sys.Observer.remove(this,a)},removeAt:function(a){Sys.Observer.removeAt(this,a)},raiseCollectionChanged:function(a){Sys.Observer.raiseEvent(this,"collectionChanged",new Sys.NotifyCollectionChangedEventArgs(a))}};Sys.Observer._getContext=function(b,c){var a=b._observerContext;if(a)return a();if(c)return (b._observerContext=Sys.Observer._createContext())();return null};Sys.Observer._createContext=function(){var a={events:new Sys.EventHandlerList};return function(){return a}};Date._appendPreOrPostMatch=function(e,b){var d=0,a=false;for(var c=0,g=e.length;c<g;c++){var f=e.charAt(c);switch(f){case "'":if(a)b.append("'");else d++;a=false;break;case "\\":if(a)b.append("\\");a=!a;break;default:b.append(f);a=false}}return d};Date._expandFormat=function(a,b){if(!b)b="F";var c=b.length;if(c===1)switch(b){case "d":return a.ShortDatePattern;case "D":return a.LongDatePattern;case "t":return a.ShortTimePattern;case "T":return a.LongTimePattern;case "f":return a.LongDatePattern+" "+a.ShortTimePattern;case "F":return a.FullDateTimePattern;case "M":case "m":return a.MonthDayPattern;case "s":return a.SortableDateTimePattern;case "Y":case "y":return a.YearMonthPattern;default:throw Error.format(Sys.Res.formatInvalidString)}else if(c===2&&b.charAt(0)==="%")b=b.charAt(1);return b};Date._expandYear=function(c,a){var d=new Date,e=Date._getEra(d);if(a<100){var b=Date._getEraYear(d,c,e);a+=b-b%100;if(a>c.Calendar.TwoDigitYearMax)a-=100}return a};Date._getEra=function(e,c){if(!c)return 0;var b,d=e.getTime();for(var a=0,f=c.length;a<f;a+=4){b=c[a+2];if(b===null||d>=b)return a}return 0};Date._getEraYear=function(d,b,e,c){var a=d.getFullYear();if(!c&&b.eras)a-=b.eras[e+3];return a};Date._getParseRegExp=function(b,e){if(!b._parseRegExp)b._parseRegExp={};else if(b._parseRegExp[e])return b._parseRegExp[e];var c=Date._expandFormat(b,e);c=c.replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1");var a=new Sys.StringBuilder("^"),j=[],f=0,i=0,h=Date._getTokenRegExp(),d;while((d=h.exec(c))!==null){var l=c.slice(f,d.index);f=h.lastIndex;i+=Date._appendPreOrPostMatch(l,a);if(i%2===1){a.append(d[0]);continue}switch(d[0]){case "dddd":case "ddd":case "MMMM":case "MMM":case "gg":case "g":a.append("(\\D+)");break;case "tt":case "t":a.append("(\\D*)");break;case "yyyy":a.append("(\\d{4})");break;case "fff":a.append("(\\d{3})");break;case "ff":a.append("(\\d{2})");break;case "f":a.append("(\\d)");break;case "dd":case "d":case "MM":case "M":case "yy":case "y":case "HH":case "H":case "hh":case "h":case "mm":case "m":case "ss":case "s":a.append("(\\d\\d?)");break;case "zzz":a.append("([+-]?\\d\\d?:\\d{2})");break;case "zz":case "z":a.append("([+-]?\\d\\d?)");break;case "/":a.append("(\\"+b.DateSeparator+")")}Array.add(j,d[0])}Date._appendPreOrPostMatch(c.slice(f),a);a.append("$");var k=a.toString().replace(/\s+/g,"\\s+"),g={"regExp":k,"groups":j};b._parseRegExp[e]=g;return g};Date._getTokenRegExp=function(){return /\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g};Date.parseLocale=function(a){return Date._parse(a,Sys.CultureInfo.CurrentCulture,arguments)};Date.parseInvariant=function(a){return Date._parse(a,Sys.CultureInfo.InvariantCulture,arguments)};Date._parse=function(h,d,i){var a,c,b,f,e,g=false;for(a=1,c=i.length;a<c;a++){f=i[a];if(f){g=true;b=Date._parseExact(h,f,d);if(b)return b}}if(!g){e=d._getDateTimeFormats();for(a=0,c=e.length;a<c;a++){b=Date._parseExact(h,e[a],d);if(b)return b}}return null};Date._parseExact=function(w,D,k){w=w.trim();var g=k.dateTimeFormat,A=Date._getParseRegExp(g,D),C=(new RegExp(A.regExp)).exec(w);if(C===null)return null;var B=A.groups,x=null,e=null,c=null,j=null,i=null,d=0,h,p=0,q=0,f=0,l=null,v=false;for(var s=0,E=B.length;s<E;s++){var a=C[s+1];if(a)switch(B[s]){case "dd":case "d":j=parseInt(a,10);if(j<1||j>31)return null;break;case "MMMM":c=k._getMonthIndex(a);if(c<0||c>11)return null;break;case "MMM":c=k._getAbbrMonthIndex(a);if(c<0||c>11)return null;break;case "M":case "MM":c=parseInt(a,10)-1;if(c<0||c>11)return null;break;case "y":case "yy":e=Date._expandYear(g,parseInt(a,10));if(e<0||e>9999)return null;break;case "yyyy":e=parseInt(a,10);if(e<0||e>9999)return null;break;case "h":case "hh":d=parseInt(a,10);if(d===12)d=0;if(d<0||d>11)return null;break;case "H":case "HH":d=parseInt(a,10);if(d<0||d>23)return null;break;case "m":case "mm":p=parseInt(a,10);if(p<0||p>59)return null;break;case "s":case "ss":q=parseInt(a,10);if(q<0||q>59)return null;break;case "tt":case "t":var z=a.toUpperCase();v=z===g.PMDesignator.toUpperCase();if(!v&&z!==g.AMDesignator.toUpperCase())return null;break;case "f":f=parseInt(a,10)*100;if(f<0||f>999)return null;break;case "ff":f=parseInt(a,10)*10;if(f<0||f>999)return null;break;case "fff":f=parseInt(a,10);if(f<0||f>999)return null;break;case "dddd":i=k._getDayIndex(a);if(i<0||i>6)return null;break;case "ddd":i=k._getAbbrDayIndex(a);if(i<0||i>6)return null;break;case "zzz":var u=a.split(/:/);if(u.length!==2)return null;h=parseInt(u[0],10);if(h<-12||h>13)return null;var m=parseInt(u[1],10);if(m<0||m>59)return null;l=h*60+(a.startsWith("-")?-m:m);break;case "z":case "zz":h=parseInt(a,10);if(h<-12||h>13)return null;l=h*60;break;case "g":case "gg":var o=a;if(!o||!g.eras)return null;o=o.toLowerCase().trim();for(var r=0,F=g.eras.length;r<F;r+=4)if(o===g.eras[r+1].toLowerCase()){x=r;break}if(x===null)return null}}var b=new Date,t,n=g.Calendar.convert;if(n)t=n.fromGregorian(b)[0];else t=b.getFullYear();if(e===null)e=t;else if(g.eras)e+=g.eras[(x||0)+3];if(c===null)c=0;if(j===null)j=1;if(n){b=n.toGregorian(e,c,j);if(b===null)return null}else{b.setFullYear(e,c,j);if(b.getDate()!==j)return null;if(i!==null&&b.getDay()!==i)return null}if(v&&d<12)d+=12;b.setHours(d,p,q,f);if(l!==null){var y=b.getMinutes()-(l+b.getTimezoneOffset());b.setHours(b.getHours()+parseInt(y/60,10),y%60)}return b};Date.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Date.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Date.prototype._toFormattedString=function(e,j){var b=j.dateTimeFormat,n=b.Calendar.convert;if(!e||!e.length||e==="i")if(j&&j.name.length)if(n)return this._toFormattedString(b.FullDateTimePattern,j);else{var r=new Date(this.getTime()),x=Date._getEra(this,b.eras);r.setFullYear(Date._getEraYear(this,b,x));return r.toLocaleString()}else return this.toString();var l=b.eras,k=e==="s";e=Date._expandFormat(b,e);var a=new Sys.StringBuilder,c;function d(a){if(a<10)return "0"+a;return a.toString()}function m(a){if(a<10)return "00"+a;if(a<100)return "0"+a;return a.toString()}function v(a){if(a<10)return "000"+a;else if(a<100)return "00"+a;else if(a<1000)return "0"+a;return a.toString()}var h,p,t=/([^d]|^)(d|dd)([^d]|$)/g;function s(){if(h||p)return h;h=t.test(e);p=true;return h}var q=0,o=Date._getTokenRegExp(),f;if(!k&&n)f=n.fromGregorian(this);for(;true;){var w=o.lastIndex,i=o.exec(e),u=e.slice(w,i?i.index:e.length);q+=Date._appendPreOrPostMatch(u,a);if(!i)break;if(q%2===1){a.append(i[0]);continue}function g(a,b){if(f)return f[b];switch(b){case 0:return a.getFullYear();case 1:return a.getMonth();case 2:return a.getDate()}}switch(i[0]){case "dddd":a.append(b.DayNames[this.getDay()]);break;case "ddd":a.append(b.AbbreviatedDayNames[this.getDay()]);break;case "dd":h=true;a.append(d(g(this,2)));break;case "d":h=true;a.append(g(this,2));break;case "MMMM":a.append(b.MonthGenitiveNames&&s()?b.MonthGenitiveNames[g(this,1)]:b.MonthNames[g(this,1)]);break;case "MMM":a.append(b.AbbreviatedMonthGenitiveNames&&s()?b.AbbreviatedMonthGenitiveNames[g(this,1)]:b.AbbreviatedMonthNames[g(this,1)]);break;case "MM":a.append(d(g(this,1)+1));break;case "M":a.append(g(this,1)+1);break;case "yyyy":a.append(v(f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k)));break;case "yy":a.append(d((f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k))%100));break;case "y":a.append((f?f[0]:Date._getEraYear(this,b,Date._getEra(this,l),k))%100);break;case "hh":c=this.getHours()%12;if(c===0)c=12;a.append(d(c));break;case "h":c=this.getHours()%12;if(c===0)c=12;a.append(c);break;case "HH":a.append(d(this.getHours()));break;case "H":a.append(this.getHours());break;case "mm":a.append(d(this.getMinutes()));break;case "m":a.append(this.getMinutes());break;case "ss":a.append(d(this.getSeconds()));break;case "s":a.append(this.getSeconds());break;case "tt":a.append(this.getHours()<12?b.AMDesignator:b.PMDesignator);break;case "t":a.append((this.getHours()<12?b.AMDesignator:b.PMDesignator).charAt(0));break;case "f":a.append(m(this.getMilliseconds()).charAt(0));break;case "ff":a.append(m(this.getMilliseconds()).substr(0,2));break;case "fff":a.append(m(this.getMilliseconds()));break;case "z":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+Math.floor(Math.abs(c)));break;case "zz":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+d(Math.floor(Math.abs(c))));break;case "zzz":c=this.getTimezoneOffset()/60;a.append((c<=0?"+":"-")+d(Math.floor(Math.abs(c)))+":"+d(Math.abs(this.getTimezoneOffset()%60)));break;case "g":case "gg":if(b.eras)a.append(b.eras[Date._getEra(this,l)+1]);break;case "/":a.append(b.DateSeparator)}}return a.toString()};String.localeFormat=function(){return String._toFormattedString(true,arguments)};Number.parseLocale=function(a){return Number._parse(a,Sys.CultureInfo.CurrentCulture)};Number.parseInvariant=function(a){return Number._parse(a,Sys.CultureInfo.InvariantCulture)};Number._parse=function(b,o){b=b.trim();if(b.match(/^[+-]?infinity$/i))return parseFloat(b);if(b.match(/^0x[a-f0-9]+$/i))return parseInt(b);var a=o.numberFormat,g=Number._parseNumberNegativePattern(b,a,a.NumberNegativePattern),h=g[0],e=g[1];if(h===""&&a.NumberNegativePattern!==1){g=Number._parseNumberNegativePattern(b,a,1);h=g[0];e=g[1]}if(h==="")h="+";var j,d,f=e.indexOf("e");if(f<0)f=e.indexOf("E");if(f<0){d=e;j=null}else{d=e.substr(0,f);j=e.substr(f+1)}var c,k,m=d.indexOf(a.NumberDecimalSeparator);if(m<0){c=d;k=null}else{c=d.substr(0,m);k=d.substr(m+a.NumberDecimalSeparator.length)}c=c.split(a.NumberGroupSeparator).join("");var n=a.NumberGroupSeparator.replace(/\u00A0/g," ");if(a.NumberGroupSeparator!==n)c=c.split(n).join("");var l=h+c;if(k!==null)l+="."+k;if(j!==null){var i=Number._parseNumberNegativePattern(j,a,1);if(i[0]==="")i[0]="+";l+="e"+i[0]+i[1]}if(l.match(/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/))return parseFloat(l);return Number.NaN};Number._parseNumberNegativePattern=function(a,d,e){var b=d.NegativeSign,c=d.PositiveSign;switch(e){case 4:b=" "+b;c=" "+c;case 3:if(a.endsWith(b))return ["-",a.substr(0,a.length-b.length)];else if(a.endsWith(c))return ["+",a.substr(0,a.length-c.length)];break;case 2:b+=" ";c+=" ";case 1:if(a.startsWith(b))return ["-",a.substr(b.length)];else if(a.startsWith(c))return ["+",a.substr(c.length)];break;case 0:if(a.startsWith("(")&&a.endsWith(")"))return ["-",a.substr(1,a.length-2)]}return ["",a]};Number.prototype.format=function(a){return this._toFormattedString(a,Sys.CultureInfo.InvariantCulture)};Number.prototype.localeFormat=function(a){return this._toFormattedString(a,Sys.CultureInfo.CurrentCulture)};Number.prototype._toFormattedString=function(e,j){if(!e||e.length===0||e==="i")if(j&&j.name.length>0)return this.toLocaleString();else return this.toString();var o=["n %","n%","%n"],n=["-n %","-n%","-%n"],p=["(n)","-n","- n","n-","n -"],m=["$n","n$","$ n","n $"],l=["($n)","-$n","$-n","$n-","(n$)","-n$","n-$","n$-","-n $","-$ n","n $-","$ n-","$ -n","n- $","($ n)","(n $)"];function g(a,c,d){for(var b=a.length;b<c;b++)a=d?"0"+a:a+"0";return a}function i(j,i,l,n,p){var h=l[0],k=1,o=Math.pow(10,i),m=Math.round(j*o)/o;if(!isFinite(m))m=j;j=m;var b=j.toString(),a="",c,e=b.split(/e/i);b=e[0];c=e.length>1?parseInt(e[1]):0;e=b.split(".");b=e[0];a=e.length>1?e[1]:"";var q;if(c>0){a=g(a,c,false);b+=a.slice(0,c);a=a.substr(c)}else if(c<0){c=-c;b=g(b,c+1,true);a=b.slice(-c,b.length)+a;b=b.slice(0,-c)}if(i>0){if(a.length>i)a=a.slice(0,i);else a=g(a,i,false);a=p+a}else a="";var d=b.length-1,f="";while(d>=0){if(h===0||h>d)if(f.length>0)return b.slice(0,d+1)+n+f+a;else return b.slice(0,d+1)+a;if(f.length>0)f=b.slice(d-h+1,d+1)+n+f;else f=b.slice(d-h+1,d+1);d-=h;if(k<l.length){h=l[k];k++}}return b.slice(0,d+1)+n+f+a}var a=j.numberFormat,d=Math.abs(this);if(!e)e="D";var b=-1;if(e.length>1)b=parseInt(e.slice(1),10);var c;switch(e.charAt(0)){case "d":case "D":c="n";if(b!==-1)d=g(""+d,b,true);if(this<0)d=-d;break;case "c":case "C":if(this<0)c=l[a.CurrencyNegativePattern];else c=m[a.CurrencyPositivePattern];if(b===-1)b=a.CurrencyDecimalDigits;d=i(Math.abs(this),b,a.CurrencyGroupSizes,a.CurrencyGroupSeparator,a.CurrencyDecimalSeparator);break;case "n":case "N":if(this<0)c=p[a.NumberNegativePattern];else c="n";if(b===-1)b=a.NumberDecimalDigits;d=i(Math.abs(this),b,a.NumberGroupSizes,a.NumberGroupSeparator,a.NumberDecimalSeparator);break;case "p":case "P":if(this<0)c=n[a.PercentNegativePattern];else c=o[a.PercentPositivePattern];if(b===-1)b=a.PercentDecimalDigits;d=i(Math.abs(this)*100,b,a.PercentGroupSizes,a.PercentGroupSeparator,a.PercentDecimalSeparator);break;default:throw Error.format(Sys.Res.formatBadFormatSpecifier)}var k=/n|\$|-|%/g,f="";for(;true;){var q=k.lastIndex,h=k.exec(c);f+=c.slice(q,h?h.index:c.length);if(!h)break;switch(h[0]){case "n":f+=d;break;case "$":f+=a.CurrencySymbol;break;case "-":if(/[1-9]/.test(d))f+=a.NegativeSign;break;case "%":f+=a.PercentSymbol}}return f};Sys.CultureInfo=function(c,b,a){this.name=c;this.numberFormat=b;this.dateTimeFormat=a};Sys.CultureInfo.prototype={_getDateTimeFormats:function(){if(!this._dateTimeFormats){var a=this.dateTimeFormat;this._dateTimeFormats=[a.MonthDayPattern,a.YearMonthPattern,a.ShortDatePattern,a.ShortTimePattern,a.LongDatePattern,a.LongTimePattern,a.FullDateTimePattern,a.RFC1123Pattern,a.SortableDateTimePattern,a.UniversalSortableDateTimePattern]}return this._dateTimeFormats},_getIndex:function(c,d,e){var b=this._toUpper(c),a=Array.indexOf(d,b);if(a===-1)a=Array.indexOf(e,b);return a},_getMonthIndex:function(a){if(!this._upperMonths){this._upperMonths=this._toUpperArray(this.dateTimeFormat.MonthNames);this._upperMonthsGenitive=this._toUpperArray(this.dateTimeFormat.MonthGenitiveNames)}return this._getIndex(a,this._upperMonths,this._upperMonthsGenitive)},_getAbbrMonthIndex:function(a){if(!this._upperAbbrMonths){this._upperAbbrMonths=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthNames);this._upperAbbrMonthsGenitive=this._toUpperArray(this.dateTimeFormat.AbbreviatedMonthGenitiveNames)}return this._getIndex(a,this._upperAbbrMonths,this._upperAbbrMonthsGenitive)},_getDayIndex:function(a){if(!this._upperDays)this._upperDays=this._toUpperArray(this.dateTimeFormat.DayNames);return Array.indexOf(this._upperDays,this._toUpper(a))},_getAbbrDayIndex:function(a){if(!this._upperAbbrDays)this._upperAbbrDays=this._toUpperArray(this.dateTimeFormat.AbbreviatedDayNames);return Array.indexOf(this._upperAbbrDays,this._toUpper(a))},_toUpperArray:function(c){var b=[];for(var a=0,d=c.length;a<d;a++)b[a]=this._toUpper(c[a]);return b},_toUpper:function(a){return a.split("\u00a0").join(" ").toUpperCase()}};Sys.CultureInfo.registerClass("Sys.CultureInfo");Sys.CultureInfo._parse=function(a){var b=a.dateTimeFormat;if(b&&!b.eras)b.eras=a.eras;return new Sys.CultureInfo(a.name,a.numberFormat,b)};Sys.CultureInfo.InvariantCulture=Sys.CultureInfo._parse({"name":"","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":true,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"\u00a4","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":true},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, dd MMMM yyyy HH:mm:ss","LongDatePattern":"dddd, dd MMMM yyyy","LongTimePattern":"HH:mm:ss","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'","ShortDatePattern":"MM/dd/yyyy","ShortTimePattern":"HH:mm","SortableDateTimePattern":"yyyy'-'MM'-'dd'T'HH':'mm':'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy'-'MM'-'dd HH':'mm':'ss'Z'","YearMonthPattern":"yyyy MMMM","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":true,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]},"eras":[1,"A.D.",null,0]});if(typeof __cultureInfo==="object"){Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse(__cultureInfo);delete __cultureInfo}else Sys.CultureInfo.CurrentCulture=Sys.CultureInfo._parse({"name":"en-US","numberFormat":{"CurrencyDecimalDigits":2,"CurrencyDecimalSeparator":".","IsReadOnly":false,"CurrencyGroupSizes":[3],"NumberGroupSizes":[3],"PercentGroupSizes":[3],"CurrencyGroupSeparator":",","CurrencySymbol":"$","NaNSymbol":"NaN","CurrencyNegativePattern":0,"NumberNegativePattern":1,"PercentPositivePattern":0,"PercentNegativePattern":0,"NegativeInfinitySymbol":"-Infinity","NegativeSign":"-","NumberDecimalDigits":2,"NumberDecimalSeparator":".","NumberGroupSeparator":",","CurrencyPositivePattern":0,"PositiveInfinitySymbol":"Infinity","PositiveSign":"+","PercentDecimalDigits":2,"PercentDecimalSeparator":".","PercentGroupSeparator":",","PercentSymbol":"%","PerMilleSymbol":"\u2030","NativeDigits":["0","1","2","3","4","5","6","7","8","9"],"DigitSubstitution":1},"dateTimeFormat":{"AMDesignator":"AM","Calendar":{"MinSupportedDateTime":"@-62135568000000@","MaxSupportedDateTime":"@253402300799999@","AlgorithmType":1,"CalendarType":1,"Eras":[1],"TwoDigitYearMax":2029,"IsReadOnly":false},"DateSeparator":"/","FirstDayOfWeek":0,"CalendarWeekRule":0,"FullDateTimePattern":"dddd, MMMM dd, yyyy h:mm:ss tt","LongDatePattern":"dddd, MMMM dd, yyyy","LongTimePattern":"h:mm:ss tt","MonthDayPattern":"MMMM dd","PMDesignator":"PM","RFC1123Pattern":"ddd, dd MMM yyyy HH':'mm':'ss 'GMT'","ShortDatePattern":"M/d/yyyy","ShortTimePattern":"h:mm tt","SortableDateTimePattern":"yyyy'-'MM'-'dd'T'HH':'mm':'ss","TimeSeparator":":","UniversalSortableDateTimePattern":"yyyy'-'MM'-'dd HH':'mm':'ss'Z'","YearMonthPattern":"MMMM, yyyy","AbbreviatedDayNames":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"ShortestDayNames":["Su","Mo","Tu","We","Th","Fr","Sa"],"DayNames":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"AbbreviatedMonthNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthNames":["January","February","March","April","May","June","July","August","September","October","November","December",""],"IsReadOnly":false,"NativeCalendarName":"Gregorian Calendar","AbbreviatedMonthGenitiveNames":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],"MonthGenitiveNames":["January","February","March","April","May","June","July","August","September","October","November","December",""]},"eras":[1,"A.D.",null,0]});Type.registerNamespace("Sys.Serialization");Sys.Serialization.JavaScriptSerializer=function(){};Sys.Serialization.JavaScriptSerializer.registerClass("Sys.Serialization.JavaScriptSerializer");Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs=[];Sys.Serialization.JavaScriptSerializer._charsToEscape=[];Sys.Serialization.JavaScriptSerializer._dateRegEx=new RegExp('(^|[^\\\\])\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})?\\)\\\\/\\"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars={};Sys.Serialization.JavaScriptSerializer._escapeRegEx=new RegExp('["\\\\\\x00-\\x1F]',"i");Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal=new RegExp('["\\\\\\x00-\\x1F]',"g");Sys.Serialization.JavaScriptSerializer._jsonRegEx=new RegExp("[^,:{}\\[\\]0-9.\\-+Eaeflnr-u \\n\\r\\t]","g");Sys.Serialization.JavaScriptSerializer._jsonStringRegEx=new RegExp('"(\\\\.|[^"\\\\])*"',"g");Sys.Serialization.JavaScriptSerializer._serverTypeFieldName="__type";Sys.Serialization.JavaScriptSerializer._init=function(){var c=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000b","\\f","\\r","\\u000e","\\u000f","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001a","\\u001b","\\u001c","\\u001d","\\u001e","\\u001f"];Sys.Serialization.JavaScriptSerializer._charsToEscape[0]="\\";Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs["\\"]=new RegExp("\\\\","g");Sys.Serialization.JavaScriptSerializer._escapeChars["\\"]="\\\\";Sys.Serialization.JavaScriptSerializer._charsToEscape[1]='"';Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs['"']=new RegExp('"',"g");Sys.Serialization.JavaScriptSerializer._escapeChars['"']='\\"';for(var a=0;a<32;a++){var b=String.fromCharCode(a);Sys.Serialization.JavaScriptSerializer._charsToEscape[a+2]=b;Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b]=new RegExp(b,"g");Sys.Serialization.JavaScriptSerializer._escapeChars[b]=c[a]}};Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder=function(b,a){a.append(b.toString())};Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder=function(a,b){if(isFinite(a))b.append(String(a));else throw Error.invalidOperation(Sys.Res.cannotSerializeNonFiniteNumbers)};Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder=function(a,c){c.append('"');if(Sys.Serialization.JavaScriptSerializer._escapeRegEx.test(a)){if(Sys.Serialization.JavaScriptSerializer._charsToEscape.length===0)Sys.Serialization.JavaScriptSerializer._init();if(a.length<128)a=a.replace(Sys.Serialization.JavaScriptSerializer._escapeRegExGlobal,function(a){return Sys.Serialization.JavaScriptSerializer._escapeChars[a]});else for(var d=0;d<34;d++){var b=Sys.Serialization.JavaScriptSerializer._charsToEscape[d];if(a.indexOf(b)!==-1)if(Sys.Browser.agent===Sys.Browser.Opera||Sys.Browser.agent===Sys.Browser.FireFox)a=a.split(b).join(Sys.Serialization.JavaScriptSerializer._escapeChars[b]);else a=a.replace(Sys.Serialization.JavaScriptSerializer._charsToEscapeRegExs[b],Sys.Serialization.JavaScriptSerializer._escapeChars[b])}}c.append(a);c.append('"')};Sys.Serialization.JavaScriptSerializer._serializeWithBuilder=function(b,a,i,g){var c;switch(typeof b){case "object":if(b)if(Number.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);else if(Boolean.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);else if(String.isInstanceOfType(b))Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);else if(Array.isInstanceOfType(b)){a.append("[");for(c=0;c<b.length;++c){if(c>0)a.append(",");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b[c],a,false,g)}a.append("]")}else{if(Date.isInstanceOfType(b)){a.append('"\\/Date(');a.append(b.getTime());a.append(')\\/"');break}var d=[],f=0;for(var e in b){if(e.startsWith("$"))continue;if(e===Sys.Serialization.JavaScriptSerializer._serverTypeFieldName&&f!==0){d[f++]=d[0];d[0]=e}else d[f++]=e}if(i)d.sort();a.append("{");var j=false;for(c=0;c<f;c++){var h=b[d[c]];if(typeof h!=="undefined"&&typeof h!=="function"){if(j)a.append(",");else j=true;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(d[c],a,i,g);a.append(":");Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(h,a,i,g)}}a.append("}")}else a.append("null");break;case "number":Sys.Serialization.JavaScriptSerializer._serializeNumberWithBuilder(b,a);break;case "string":Sys.Serialization.JavaScriptSerializer._serializeStringWithBuilder(b,a);break;case "boolean":Sys.Serialization.JavaScriptSerializer._serializeBooleanWithBuilder(b,a);break;default:a.append("null")}};Sys.Serialization.JavaScriptSerializer.serialize=function(b){var a=new Sys.StringBuilder;Sys.Serialization.JavaScriptSerializer._serializeWithBuilder(b,a,false);return a.toString()};Sys.Serialization.JavaScriptSerializer.deserialize=function(data,secure){if(data.length===0)throw Error.argument("data",Sys.Res.cannotDeserializeEmptyString);try{var exp=data.replace(Sys.Serialization.JavaScriptSerializer._dateRegEx,"$1new Date($2)");if(secure&&Sys.Serialization.JavaScriptSerializer._jsonRegEx.test(exp.replace(Sys.Serialization.JavaScriptSerializer._jsonStringRegEx,"")))throw null;return eval("("+exp+")")}catch(a){throw Error.argument("data",Sys.Res.cannotDeserializeInvalidJson)}};Type.registerNamespace("Sys.UI");Sys.EventHandlerList=function(){this._list={}};Sys.EventHandlerList.prototype={_addHandler:function(b,a){Array.add(this._getEvent(b,true),a)},addHandler:function(b,a){this._addHandler(b,a)},_removeHandler:function(c,b){var a=this._getEvent(c);if(!a)return;Array.remove(a,b)},removeHandler:function(b,a){this._removeHandler(b,a)},getHandler:function(b){var a=this._getEvent(b);if(!a||a.length===0)return null;a=Array.clone(a);return function(c,d){for(var b=0,e=a.length;b<e;b++)a[b](c,d)}},_getEvent:function(a,b){if(!this._list[a]){if(!b)return null;this._list[a]=[]}return this._list[a]}};Sys.EventHandlerList.registerClass("Sys.EventHandlerList");Sys.CommandEventArgs=function(c,a,b){Sys.CommandEventArgs.initializeBase(this);this._commandName=c;this._commandArgument=a;this._commandSource=b};Sys.CommandEventArgs.prototype={_commandName:null,_commandArgument:null,_commandSource:null,get_commandName:function(){return this._commandName},get_commandArgument:function(){return this._commandArgument},get_commandSource:function(){return this._commandSource}};Sys.CommandEventArgs.registerClass("Sys.CommandEventArgs",Sys.CancelEventArgs);Sys.INotifyPropertyChange=function(){};Sys.INotifyPropertyChange.prototype={};Sys.INotifyPropertyChange.registerInterface("Sys.INotifyPropertyChange");Sys.PropertyChangedEventArgs=function(a){Sys.PropertyChangedEventArgs.initializeBase(this);this._propertyName=a};Sys.PropertyChangedEventArgs.prototype={get_propertyName:function(){return this._propertyName}};Sys.PropertyChangedEventArgs.registerClass("Sys.PropertyChangedEventArgs",Sys.EventArgs);Sys.INotifyDisposing=function(){};Sys.INotifyDisposing.prototype={};Sys.INotifyDisposing.registerInterface("Sys.INotifyDisposing");Sys.Component=function(){if(Sys.Application)Sys.Application.registerDisposableObject(this)};Sys.Component.prototype={_id:null,_initialized:false,_updating:false,get_events:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_id:function(){return this._id},set_id:function(a){this._id=a},get_isInitialized:function(){return this._initialized},get_isUpdating:function(){return this._updating},add_disposing:function(a){this.get_events().addHandler("disposing",a)},remove_disposing:function(a){this.get_events().removeHandler("disposing",a)},add_propertyChanged:function(a){this.get_events().addHandler("propertyChanged",a)},remove_propertyChanged:function(a){this.get_events().removeHandler("propertyChanged",a)},beginUpdate:function(){this._updating=true},dispose:function(){if(this._events){var a=this._events.getHandler("disposing");if(a)a(this,Sys.EventArgs.Empty)}delete this._events;Sys.Application.unregisterDisposableObject(this);Sys.Application.removeComponent(this)},endUpdate:function(){this._updating=false;if(!this._initialized)this.initialize();this.updated()},initialize:function(){this._initialized=true},raisePropertyChanged:function(b){if(!this._events)return;var a=this._events.getHandler("propertyChanged");if(a)a(this,new Sys.PropertyChangedEventArgs(b))},updated:function(){}};Sys.Component.registerClass("Sys.Component",null,Sys.IDisposable,Sys.INotifyPropertyChange,Sys.INotifyDisposing);function Sys$Component$_setProperties(a,i){var d,j=Object.getType(a),e=j===Object||j===Sys.UI.DomElement,h=Sys.Component.isInstanceOfType(a)&&!a.get_isUpdating();if(h)a.beginUpdate();for(var c in i){var b=i[c],f=e?null:a["get_"+c];if(e||typeof f!=="function"){var k=a[c];if(!b||typeof b!=="object"||e&&!k)a[c]=b;else Sys$Component$_setProperties(k,b)}else{var l=a["set_"+c];if(typeof l==="function")l.apply(a,[b]);else if(b instanceof Array){d=f.apply(a);for(var g=0,m=d.length,n=b.length;g<n;g++,m++)d[m]=b[g]}else if(typeof b==="object"&&Object.getType(b)===Object){d=f.apply(a);Sys$Component$_setProperties(d,b)}}}if(h)a.endUpdate()}function Sys$Component$_setReferences(c,b){for(var a in b){var e=c["set_"+a],d=$find(b[a]);e.apply(c,[d])}}var $create=Sys.Component.create=function(h,f,d,c,g){var a=g?new h(g):new h,b=Sys.Application,i=b.get_isCreatingComponents();a.beginUpdate();if(f)Sys$Component$_setProperties(a,f);if(d)for(var e in d)a["add_"+e](d[e]);if(a.get_id())b.addComponent(a);if(i){b._createdComponents[b._createdComponents.length]=a;if(c)b._addComponentToSecondPass(a,c);else a.endUpdate()}else{if(c)Sys$Component$_setReferences(a,c);a.endUpdate()}return a};Sys.UI.MouseButton=function(){throw Error.notImplemented()};Sys.UI.MouseButton.prototype={leftButton:0,middleButton:1,rightButton:2};Sys.UI.MouseButton.registerEnum("Sys.UI.MouseButton");Sys.UI.Key=function(){throw Error.notImplemented()};Sys.UI.Key.prototype={backspace:8,tab:9,enter:13,esc:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:127};Sys.UI.Key.registerEnum("Sys.UI.Key");Sys.UI.Point=function(a,b){this.rawX=a;this.rawY=b;this.x=Math.round(a);this.y=Math.round(b)};Sys.UI.Point.registerClass("Sys.UI.Point");Sys.UI.Bounds=function(c,d,b,a){this.x=c;this.y=d;this.height=a;this.width=b};Sys.UI.Bounds.registerClass("Sys.UI.Bounds");Sys.UI.DomEvent=function(e){var a=e,b=this.type=a.type.toLowerCase();this.rawEvent=a;this.altKey=a.altKey;if(typeof a.button!=="undefined")this.button=typeof a.which!=="undefined"?a.button:a.button===4?Sys.UI.MouseButton.middleButton:a.button===2?Sys.UI.MouseButton.rightButton:Sys.UI.MouseButton.leftButton;if(b==="keypress")this.charCode=a.charCode||a.keyCode;else if(a.keyCode&&a.keyCode===46)this.keyCode=127;else this.keyCode=a.keyCode;this.clientX=a.clientX;this.clientY=a.clientY;this.ctrlKey=a.ctrlKey;this.target=a.target?a.target:a.srcElement;if(!b.startsWith("key"))if(typeof a.offsetX!=="undefined"&&typeof a.offsetY!=="undefined"){this.offsetX=a.offsetX;this.offsetY=a.offsetY}else if(this.target&&this.target.nodeType!==3&&typeof a.clientX==="number"){var c=Sys.UI.DomElement.getLocation(this.target),d=Sys.UI.DomElement._getWindow(this.target);this.offsetX=(d.pageXOffset||0)+a.clientX-c.x;this.offsetY=(d.pageYOffset||0)+a.clientY-c.y}this.screenX=a.screenX;this.screenY=a.screenY;this.shiftKey=a.shiftKey};Sys.UI.DomEvent.prototype={preventDefault:function(){if(this.rawEvent.preventDefault)this.rawEvent.preventDefault();else if(window.event)this.rawEvent.returnValue=false},stopPropagation:function(){if(this.rawEvent.stopPropagation)this.rawEvent.stopPropagation();else if(window.event)this.rawEvent.cancelBubble=true}};Sys.UI.DomEvent.registerClass("Sys.UI.DomEvent");var $addHandler=Sys.UI.DomEvent.addHandler=function(a,d,e,g){if(!a._events)a._events={};var c=a._events[d];if(!c)a._events[d]=c=[];var b;if(a.addEventListener){b=function(b){return e.call(a,new Sys.UI.DomEvent(b))};a.addEventListener(d,b,false)}else if(a.attachEvent){b=function(){var b={};try{b=Sys.UI.DomElement._getWindow(a).event}catch(c){}return e.call(a,new Sys.UI.DomEvent(b))};a.attachEvent("on"+d,b)}c[c.length]={handler:e,browserHandler:b,autoRemove:g};if(g){var f=a.dispose;if(f!==Sys.UI.DomEvent._disposeHandlers){a.dispose=Sys.UI.DomEvent._disposeHandlers;if(typeof f!=="undefined")a._chainDispose=f}}},$addHandlers=Sys.UI.DomEvent.addHandlers=function(f,d,c,e){for(var b in d){var a=d[b];if(c)a=Function.createDelegate(c,a);$addHandler(f,b,a,e||false)}},$clearHandlers=Sys.UI.DomEvent.clearHandlers=function(a){Sys.UI.DomEvent._clearHandlers(a,false)};Sys.UI.DomEvent._clearHandlers=function(a,g){if(a._events){var e=a._events;for(var b in e){var d=e[b];for(var c=d.length-1;c>=0;c--){var f=d[c];if(!g||f.autoRemove)$removeHandler(a,b,f.handler)}}a._events=null}};Sys.UI.DomEvent._disposeHandlers=function(){Sys.UI.DomEvent._clearHandlers(this,true);var b=this._chainDispose,a=typeof b;if(a!=="undefined"){this.dispose=b;this._chainDispose=null;if(a==="function")this.dispose()}};var $removeHandler=Sys.UI.DomEvent.removeHandler=function(b,a,c){Sys.UI.DomEvent._removeHandler(b,a,c)};Sys.UI.DomEvent._removeHandler=function(a,e,f){var d=null,c=a._events[e];for(var b=0,g=c.length;b<g;b++)if(c[b].handler===f){d=c[b].browserHandler;break}if(a.removeEventListener)a.removeEventListener(e,d,false);else if(a.detachEvent)a.detachEvent("on"+e,d);c.splice(b,1)};Sys.UI.DomElement=function(){};Sys.UI.DomElement.registerClass("Sys.UI.DomElement");Sys.UI.DomElement.addCssClass=function(a,b){if(!Sys.UI.DomElement.containsCssClass(a,b))if(a.className==="")a.className=b;else a.className+=" "+b};Sys.UI.DomElement.containsCssClass=function(b,a){return Array.contains(b.className.split(" "),a)};Sys.UI.DomElement.getBounds=function(a){var b=Sys.UI.DomElement.getLocation(a);return new Sys.UI.Bounds(b.x,b.y,a.offsetWidth||0,a.offsetHeight||0)};var $get=Sys.UI.DomElement.getElementById=function(f,e){if(!e)return document.getElementById(f);if(e.getElementById)return e.getElementById(f);var c=[],d=e.childNodes;for(var b=0;b<d.length;b++){var a=d[b];if(a.nodeType==1)c[c.length]=a}while(c.length){a=c.shift();if(a.id==f)return a;d=a.childNodes;for(b=0;b<d.length;b++){a=d[b];if(a.nodeType==1)c[c.length]=a}}return null};if(document.documentElement.getBoundingClientRect)Sys.UI.DomElement.getLocation=function(a){if(a.self||a.nodeType===9||a===document.documentElement||a.parentNode===a.ownerDocument.documentElement)return new Sys.UI.Point(0,0);var f=a.getBoundingClientRect();if(!f)return new Sys.UI.Point(0,0);var e=a.ownerDocument.documentElement,h=a.ownerDocument.body,l,c=Math.round(f.left)+(e.scrollLeft||h.scrollLeft),d=Math.round(f.top)+(e.scrollTop||h.scrollTop);if(Sys.Browser.agent===Sys.Browser.InternetExplorer){try{var g=a.ownerDocument.parentWindow.frameElement||null;if(g){var i=g.frameBorder==="0"||g.frameBorder==="no"?2:0;c+=i;d+=i}}catch(m){}if(Sys.Browser.version===7&&!document.documentMode){var j=document.body,k=j.getBoundingClientRect(),b=(k.right-k.left)/j.clientWidth;b=Math.round(b*100);b=(b-b%5)/100;if(!isNaN(b)&&b!==1){c=Math.round(c/b);d=Math.round(d/b)}}if((document.documentMode||0)<8){c-=e.clientLeft;d-=e.clientTop}}return new Sys.UI.Point(c,d)};else if(Sys.Browser.agent===Sys.Browser.Safari)Sys.UI.DomElement.getLocation=function(c){if(c.window&&c.window===c||c.nodeType===9)return new Sys.UI.Point(0,0);var d=0,e=0,a,j=null,g=null,b;for(a=c;a;j=a,(g=b,a=a.offsetParent)){b=Sys.UI.DomElement._getCurrentStyle(a);var f=a.tagName?a.tagName.toUpperCase():null;if((a.offsetLeft||a.offsetTop)&&(f!=="BODY"||(!g||g.position!=="absolute"))){d+=a.offsetLeft;e+=a.offsetTop}if(j&&Sys.Browser.version>=3){d+=parseInt(b.borderLeftWidth);e+=parseInt(b.borderTopWidth)}}b=Sys.UI.DomElement._getCurrentStyle(c);var h=b?b.position:null;if(!h||h!=="absolute")for(a=c.parentNode;a;a=a.parentNode){f=a.tagName?a.tagName.toUpperCase():null;if(f!=="BODY"&&f!=="HTML"&&(a.scrollLeft||a.scrollTop)){d-=a.scrollLeft||0;e-=a.scrollTop||0}b=Sys.UI.DomElement._getCurrentStyle(a);var i=b?b.position:null;if(i&&i==="absolute")break}return new Sys.UI.Point(d,e)};else Sys.UI.DomElement.getLocation=function(d){if(d.window&&d.window===d||d.nodeType===9)return new Sys.UI.Point(0,0);var e=0,f=0,a,i=null,g=null,b=null;for(a=d;a;i=a,(g=b,a=a.offsetParent)){var c=a.tagName?a.tagName.toUpperCase():null;b=Sys.UI.DomElement._getCurrentStyle(a);if((a.offsetLeft||a.offsetTop)&&!(c==="BODY"&&(!g||g.position!=="absolute"))){e+=a.offsetLeft;f+=a.offsetTop}if(i!==null&&b){if(c!=="TABLE"&&c!=="TD"&&c!=="HTML"){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}if(c==="TABLE"&&(b.position==="relative"||b.position==="absolute")){e+=parseInt(b.marginLeft)||0;f+=parseInt(b.marginTop)||0}}}b=Sys.UI.DomElement._getCurrentStyle(d);var h=b?b.position:null;if(!h||h!=="absolute")for(a=d.parentNode;a;a=a.parentNode){c=a.tagName?a.tagName.toUpperCase():null;if(c!=="BODY"&&c!=="HTML"&&(a.scrollLeft||a.scrollTop)){e-=a.scrollLeft||0;f-=a.scrollTop||0;b=Sys.UI.DomElement._getCurrentStyle(a);if(b){e+=parseInt(b.borderLeftWidth)||0;f+=parseInt(b.borderTopWidth)||0}}}return new Sys.UI.Point(e,f)};Sys.UI.DomElement.isDomElement=function(a){return Sys._isDomElement(a)};Sys.UI.DomElement.removeCssClass=function(d,c){var a=" "+d.className+" ",b=a.indexOf(" "+c+" ");if(b>=0)d.className=(a.substr(0,b)+" "+a.substring(b+c.length+1,a.length)).trim()};Sys.UI.DomElement.resolveElement=function(b,c){var a=b;if(!a)return null;if(typeof a==="string")a=Sys.UI.DomElement.getElementById(a,c);return a};Sys.UI.DomElement.raiseBubbleEvent=function(c,d){var b=c;while(b){var a=b.control;if(a&&a.onBubbleEvent&&a.raiseBubbleEvent){Sys.UI.DomElement._raiseBubbleEventFromControl(a,c,d);return}b=b.parentNode}};Sys.UI.DomElement._raiseBubbleEventFromControl=function(a,b,c){if(!a.onBubbleEvent(b,c))a._raiseBubbleEvent(b,c)};Sys.UI.DomElement.setLocation=function(b,c,d){var a=b.style;a.position="absolute";a.left=c+"px";a.top=d+"px"};Sys.UI.DomElement.toggleCssClass=function(b,a){if(Sys.UI.DomElement.containsCssClass(b,a))Sys.UI.DomElement.removeCssClass(b,a);else Sys.UI.DomElement.addCssClass(b,a)};Sys.UI.DomElement.getVisibilityMode=function(a){return a._visibilityMode===Sys.UI.VisibilityMode.hide?Sys.UI.VisibilityMode.hide:Sys.UI.VisibilityMode.collapse};Sys.UI.DomElement.setVisibilityMode=function(a,b){Sys.UI.DomElement._ensureOldDisplayMode(a);if(a._visibilityMode!==b){a._visibilityMode=b;if(Sys.UI.DomElement.getVisible(a)===false)if(a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none";a._visibilityMode=b}};Sys.UI.DomElement.getVisible=function(b){var a=b.currentStyle||Sys.UI.DomElement._getCurrentStyle(b);if(!a)return true;return a.visibility!=="hidden"&&a.display!=="none"};Sys.UI.DomElement.setVisible=function(a,b){if(b!==Sys.UI.DomElement.getVisible(a)){Sys.UI.DomElement._ensureOldDisplayMode(a);a.style.visibility=b?"visible":"hidden";if(b||a._visibilityMode===Sys.UI.VisibilityMode.hide)a.style.display=a._oldDisplayMode;else a.style.display="none"}};Sys.UI.DomElement._ensureOldDisplayMode=function(a){if(!a._oldDisplayMode){var b=a.currentStyle||Sys.UI.DomElement._getCurrentStyle(a);a._oldDisplayMode=b?b.display:null;if(!a._oldDisplayMode||a._oldDisplayMode==="none")switch(a.tagName.toUpperCase()){case "DIV":case "P":case "ADDRESS":case "BLOCKQUOTE":case "BODY":case "COL":case "COLGROUP":case "DD":case "DL":case "DT":case "FIELDSET":case "FORM":case "H1":case "H2":case "H3":case "H4":case "H5":case "H6":case "HR":case "IFRAME":case "LEGEND":case "OL":case "PRE":case "TABLE":case "TD":case "TH":case "TR":case "UL":a._oldDisplayMode="block";break;case "LI":a._oldDisplayMode="list-item";break;default:a._oldDisplayMode="inline"}}};Sys.UI.DomElement._getWindow=function(a){var b=a.ownerDocument||a.document||a;return b.defaultView||b.parentWindow};Sys.UI.DomElement._getCurrentStyle=function(a){if(a.nodeType===3)return null;var c=Sys.UI.DomElement._getWindow(a);if(a.documentElement)a=a.documentElement;var b=c&&a!==c&&c.getComputedStyle?c.getComputedStyle(a,null):a.currentStyle||a.style;if(!b&&Sys.Browser.agent===Sys.Browser.Safari&&a.style){var g=a.style.display,f=a.style.position;a.style.position="absolute";a.style.display="block";var e=c.getComputedStyle(a,null);a.style.display=g;a.style.position=f;b={};for(var d in e)b[d]=e[d];b.display="none"}return b};Sys.IContainer=function(){};Sys.IContainer.prototype={};Sys.IContainer.registerInterface("Sys.IContainer");Sys.ApplicationLoadEventArgs=function(b,a){Sys.ApplicationLoadEventArgs.initializeBase(this);this._components=b;this._isPartialLoad=a};Sys.ApplicationLoadEventArgs.prototype={get_components:function(){return this._components},get_isPartialLoad:function(){return this._isPartialLoad}};Sys.ApplicationLoadEventArgs.registerClass("Sys.ApplicationLoadEventArgs",Sys.EventArgs);Sys._Application=function(){Sys._Application.initializeBase(this);this._disposableObjects=[];this._components={};this._createdComponents=[];this._secondPassComponents=[];this._unloadHandlerDelegate=Function.createDelegate(this,this._unloadHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._unloadHandlerDelegate);this._domReady()};Sys._Application.prototype={_creatingComponents:false,_disposing:false,_deleteCount:0,get_isCreatingComponents:function(){return this._creatingComponents},get_isDisposing:function(){return this._disposing},add_init:function(a){if(this._initialized)a(this,Sys.EventArgs.Empty);else this.get_events().addHandler("init",a)},remove_init:function(a){this.get_events().removeHandler("init",a)},add_load:function(a){this.get_events().addHandler("load",a)},remove_load:function(a){this.get_events().removeHandler("load",a)},add_unload:function(a){this.get_events().addHandler("unload",a)},remove_unload:function(a){this.get_events().removeHandler("unload",a)},addComponent:function(a){this._components[a.get_id()]=a},beginCreateComponents:function(){this._creatingComponents=true},dispose:function(){if(!this._disposing){this._disposing=true;if(this._timerCookie){window.clearTimeout(this._timerCookie);delete this._timerCookie}if(this._endRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(this._endRequestHandler);delete this._endRequestHandler}if(this._beginRequestHandler){Sys.WebForms.PageRequestManager.getInstance().remove_beginRequest(this._beginRequestHandler);delete this._beginRequestHandler}if(window.pageUnload)window.pageUnload(this,Sys.EventArgs.Empty);var c=this.get_events().getHandler("unload");if(c)c(this,Sys.EventArgs.Empty);var b=Array.clone(this._disposableObjects);for(var a=0,f=b.length;a<f;a++){var d=b[a];if(typeof d!=="undefined")d.dispose()}Array.clear(this._disposableObjects);Sys.UI.DomEvent.removeHandler(window,"unload",this._unloadHandlerDelegate);if(Sys._ScriptLoader){var e=Sys._ScriptLoader.getInstance();if(e)e.dispose()}Sys._Application.callBaseMethod(this,"dispose")}},disposeElement:function(c,j){if(c.nodeType===1){var b,h=c.getElementsByTagName("*"),g=h.length,i=new Array(g);for(b=0;b<g;b++)i[b]=h[b];for(b=g-1;b>=0;b--){var d=i[b],f=d.dispose;if(f&&typeof f==="function")d.dispose();else{var e=d.control;if(e&&typeof e.dispose==="function")e.dispose()}var a=d._behaviors;if(a)this._disposeComponents(a);a=d._components;if(a){this._disposeComponents(a);d._components=null}}if(!j){var f=c.dispose;if(f&&typeof f==="function")c.dispose();else{var e=c.control;if(e&&typeof e.dispose==="function")e.dispose()}var a=c._behaviors;if(a)this._disposeComponents(a);a=c._components;if(a){this._disposeComponents(a);c._components=null}}}},endCreateComponents:function(){var b=this._secondPassComponents;for(var a=0,d=b.length;a<d;a++){var c=b[a].component;Sys$Component$_setReferences(c,b[a].references);c.endUpdate()}this._secondPassComponents=[];this._creatingComponents=false},findComponent:function(b,a){return a?Sys.IContainer.isInstanceOfType(a)?a.findComponent(b):a[b]||null:Sys.Application._components[b]||null},getComponents:function(){var a=[],b=this._components;for(var c in b)a[a.length]=b[c];return a},initialize:function(){if(!this.get_isInitialized()&&!this._disposing){Sys._Application.callBaseMethod(this,"initialize");this._raiseInit();if(this.get_stateString){if(Sys.WebForms&&Sys.WebForms.PageRequestManager){this._beginRequestHandler=Function.createDelegate(this,this._onPageRequestManagerBeginRequest);Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(this._beginRequestHandler);this._endRequestHandler=Function.createDelegate(this,this._onPageRequestManagerEndRequest);Sys.WebForms.PageRequestManager.getInstance().add_endRequest(this._endRequestHandler)}var a=this.get_stateString();if(a!==this._currentEntry)this._navigate(a);else this._ensureHistory()}this.raiseLoad()}},notifyScriptLoaded:function(){},registerDisposableObject:function(b){if(!this._disposing){var a=this._disposableObjects,c=a.length;a[c]=b;b.__msdisposeindex=c}},raiseLoad:function(){var b=this.get_events().getHandler("load"),a=new Sys.ApplicationLoadEventArgs(Array.clone(this._createdComponents),!!this._loaded);this._loaded=true;if(b)b(this,a);if(window.pageLoad)window.pageLoad(this,a);this._createdComponents=[]},removeComponent:function(b){var a=b.get_id();if(a)delete this._components[a]},unregisterDisposableObject:function(a){if(!this._disposing){var e=a.__msdisposeindex;if(typeof e==="number"){var b=this._disposableObjects;delete b[e];delete a.__msdisposeindex;if(++this._deleteCount>1000){var c=[];for(var d=0,f=b.length;d<f;d++){a=b[d];if(typeof a!=="undefined"){a.__msdisposeindex=c.length;c.push(a)}}this._disposableObjects=c;this._deleteCount=0}}}},_addComponentToSecondPass:function(b,a){this._secondPassComponents[this._secondPassComponents.length]={component:b,references:a}},_disposeComponents:function(a){if(a)for(var b=a.length-1;b>=0;b--){var c=a[b];if(typeof c.dispose==="function")c.dispose()}},_domReady:function(){var a,g,f=this;function b(){f.initialize()}var c=function(){Sys.UI.DomEvent.removeHandler(window,"load",c);b()};Sys.UI.DomEvent.addHandler(window,"load",c);if(document.addEventListener)try{document.addEventListener("DOMContentLoaded",a=function(){document.removeEventListener("DOMContentLoaded",a,false);b()},false)}catch(h){}else if(document.attachEvent)if(window==window.top&&document.documentElement.doScroll){var e,d=document.createElement("div");a=function(){try{d.doScroll("left")}catch(c){e=window.setTimeout(a,0);return}d=null;b()};a()}else document.attachEvent("onreadystatechange",a=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",a);b()}})},_raiseInit:function(){var a=this.get_events().getHandler("init");if(a){this.beginCreateComponents();a(this,Sys.EventArgs.Empty);this.endCreateComponents()}},_unloadHandler:function(){this.dispose()}};Sys._Application.registerClass("Sys._Application",Sys.Component,Sys.IContainer);Sys.Application=new Sys._Application;var $find=Sys.Application.findComponent;Sys.UI.Behavior=function(b){Sys.UI.Behavior.initializeBase(this);this._element=b;var a=b._behaviors;if(!a)b._behaviors=[this];else a[a.length]=this};Sys.UI.Behavior.prototype={_name:null,get_element:function(){return this._element},get_id:function(){var a=Sys.UI.Behavior.callBaseMethod(this,"get_id");if(a)return a;if(!this._element||!this._element.id)return "";return this._element.id+"$"+this.get_name()},get_name:function(){if(this._name)return this._name;var a=Object.getTypeName(this),b=a.lastIndexOf(".");if(b!==-1)a=a.substr(b+1);if(!this.get_isInitialized())this._name=a;return a},set_name:function(a){this._name=a},initialize:function(){Sys.UI.Behavior.callBaseMethod(this,"initialize");var a=this.get_name();if(a)this._element[a]=this},dispose:function(){Sys.UI.Behavior.callBaseMethod(this,"dispose");var a=this._element;if(a){var c=this.get_name();if(c)a[c]=null;var b=a._behaviors;Array.remove(b,this);if(b.length===0)a._behaviors=null;delete this._element}}};Sys.UI.Behavior.registerClass("Sys.UI.Behavior",Sys.Component);Sys.UI.Behavior.getBehaviorByName=function(b,c){var a=b[c];return a&&Sys.UI.Behavior.isInstanceOfType(a)?a:null};Sys.UI.Behavior.getBehaviors=function(a){if(!a._behaviors)return [];return Array.clone(a._behaviors)};Sys.UI.Behavior.getBehaviorsByType=function(d,e){var a=d._behaviors,c=[];if(a)for(var b=0,f=a.length;b<f;b++)if(e.isInstanceOfType(a[b]))c[c.length]=a[b];return c};Sys.UI.VisibilityMode=function(){throw Error.notImplemented()};Sys.UI.VisibilityMode.prototype={hide:0,collapse:1};Sys.UI.VisibilityMode.registerEnum("Sys.UI.VisibilityMode");Sys.UI.Control=function(a){Sys.UI.Control.initializeBase(this);this._element=a;a.control=this;var b=this.get_role();if(b)a.setAttribute("role",b)};Sys.UI.Control.prototype={_parent:null,_visibilityMode:Sys.UI.VisibilityMode.hide,get_element:function(){return this._element},get_id:function(){if(!this._element)return "";return this._element.id},set_id:function(){throw Error.invalidOperation(Sys.Res.cantSetId)},get_parent:function(){if(this._parent)return this._parent;if(!this._element)return null;var a=this._element.parentNode;while(a){if(a.control)return a.control;a=a.parentNode}return null},set_parent:function(a){this._parent=a},get_role:function(){return null},get_visibilityMode:function(){return Sys.UI.DomElement.getVisibilityMode(this._element)},set_visibilityMode:function(a){Sys.UI.DomElement.setVisibilityMode(this._element,a)},get_visible:function(){return Sys.UI.DomElement.getVisible(this._element)},set_visible:function(a){Sys.UI.DomElement.setVisible(this._element,a)},addCssClass:function(a){Sys.UI.DomElement.addCssClass(this._element,a)},dispose:function(){Sys.UI.Control.callBaseMethod(this,"dispose");if(this._element){this._element.control=null;delete this._element}if(this._parent)delete this._parent},onBubbleEvent:function(){return false},raiseBubbleEvent:function(a,b){this._raiseBubbleEvent(a,b)},_raiseBubbleEvent:function(b,c){var a=this.get_parent();while(a){if(a.onBubbleEvent(b,c))return;a=a.get_parent()}},removeCssClass:function(a){Sys.UI.DomElement.removeCssClass(this._element,a)},toggleCssClass:function(a){Sys.UI.DomElement.toggleCssClass(this._element,a)}};Sys.UI.Control.registerClass("Sys.UI.Control",Sys.Component);Sys.HistoryEventArgs=function(a){Sys.HistoryEventArgs.initializeBase(this);this._state=a};Sys.HistoryEventArgs.prototype={get_state:function(){return this._state}};Sys.HistoryEventArgs.registerClass("Sys.HistoryEventArgs",Sys.EventArgs);Sys.Application._appLoadHandler=null;Sys.Application._beginRequestHandler=null;Sys.Application._clientId=null;Sys.Application._currentEntry="";Sys.Application._endRequestHandler=null;Sys.Application._history=null;Sys.Application._enableHistory=false;Sys.Application._historyFrame=null;Sys.Application._historyInitialized=false;Sys.Application._historyPointIsNew=false;Sys.Application._ignoreTimer=false;Sys.Application._initialState=null;Sys.Application._state={};Sys.Application._timerCookie=0;Sys.Application._timerHandler=null;Sys.Application._uniqueId=null;Sys._Application.prototype.get_stateString=function(){var a=null;if(Sys.Browser.agent===Sys.Browser.Firefox){var c=window.location.href,b=c.indexOf("#");if(b!==-1)a=c.substring(b+1);else a="";return a}else a=window.location.hash;if(a.length>0&&a.charAt(0)==="#")a=a.substring(1);return a};Sys._Application.prototype.get_enableHistory=function(){return this._enableHistory};Sys._Application.prototype.set_enableHistory=function(a){this._enableHistory=a};Sys._Application.prototype.add_navigate=function(a){this.get_events().addHandler("navigate",a)};Sys._Application.prototype.remove_navigate=function(a){this.get_events().removeHandler("navigate",a)};Sys._Application.prototype.addHistoryPoint=function(c,f){this._ensureHistory();var b=this._state;for(var a in c){var d=c[a];if(d===null){if(typeof b[a]!=="undefined")delete b[a]}else b[a]=d}var e=this._serializeState(b);this._historyPointIsNew=true;this._setState(e,f);this._raiseNavigate()};Sys._Application.prototype.setServerId=function(a,b){this._clientId=a;this._uniqueId=b};Sys._Application.prototype.setServerState=function(a){this._ensureHistory();this._state.__s=a;this._updateHiddenField(a)};Sys._Application.prototype._deserializeState=function(a){var e={};a=a||"";var b=a.indexOf("&&");if(b!==-1&&b+2<a.length){e.__s=a.substr(b+2);a=a.substr(0,b)}var g=a.split("&");for(var f=0,j=g.length;f<j;f++){var d=g[f],c=d.indexOf("=");if(c!==-1&&c+1<d.length){var i=d.substr(0,c),h=d.substr(c+1);e[i]=decodeURIComponent(h)}}return e};Sys._Application.prototype._enableHistoryInScriptManager=function(){this._enableHistory=true};Sys._Application.prototype._ensureHistory=function(){if(!this._historyInitialized&&this._enableHistory){if(Sys.Browser.agent===Sys.Browser.InternetExplorer&&Sys.Browser.documentMode<8){this._historyFrame=document.getElementById("__historyFrame");this._ignoreIFrame=true}this._timerHandler=Function.createDelegate(this,this._onIdle);this._timerCookie=window.setTimeout(this._timerHandler,100);try{this._initialState=this._deserializeState(this.get_stateString())}catch(a){}this._historyInitialized=true}};Sys._Application.prototype._navigate=function(c){this._ensureHistory();var b=this._deserializeState(c);if(this._uniqueId){var d=this._state.__s||"",a=b.__s||"";if(a!==d){this._updateHiddenField(a);__doPostBack(this._uniqueId,a);this._state=b;return}}this._setState(c);this._state=b;this._raiseNavigate()};Sys._Application.prototype._onIdle=function(){delete this._timerCookie;var a=this.get_stateString();if(a!==this._currentEntry){if(!this._ignoreTimer){this._historyPointIsNew=false;this._navigate(a)}}else this._ignoreTimer=false;this._timerCookie=window.setTimeout(this._timerHandler,100)};Sys._Application.prototype._onIFrameLoad=function(a){this._ensureHistory();if(!this._ignoreIFrame){this._historyPointIsNew=false;this._navigate(a)}this._ignoreIFrame=false};Sys._Application.prototype._onPageRequestManagerBeginRequest=function(){this._ignoreTimer=true;this._originalTitle=document.title};Sys._Application.prototype._onPageRequestManagerEndRequest=function(g,f){var d=f.get_dataItems()[this._clientId],c=this._originalTitle;this._originalTitle=null;var b=document.getElementById("__EVENTTARGET");if(b&&b.value===this._uniqueId)b.value="";if(typeof d!=="undefined"){this.setServerState(d);this._historyPointIsNew=true}else this._ignoreTimer=false;var a=this._serializeState(this._state);if(a!==this._currentEntry){this._ignoreTimer=true;if(typeof c==="string"){if(Sys.Browser.agent!==Sys.Browser.InternetExplorer||Sys.Browser.version>7){var e=document.title;document.title=c;this._setState(a);document.title=e}else this._setState(a);this._raiseNavigate()}else{this._setState(a);this._raiseNavigate()}}};Sys._Application.prototype._raiseNavigate=function(){var d=this._historyPointIsNew,c=this.get_events().getHandler("navigate"),b={};for(var a in this._state)if(a!=="__s")b[a]=this._state[a];var e=new Sys.HistoryEventArgs(b);if(c)c(this,e);if(!d){var f;try{if(Sys.Browser.agent===Sys.Browser.Firefox&&window.location.hash&&(!window.frameElement||window.top.location.hash))Sys.Browser.version<3.5?window.history.go(0):(location.hash=this.get_stateString())}catch(g){}}};Sys._Application.prototype._serializeState=function(d){var b=[];for(var a in d){var e=d[a];if(a==="__s")var c=e;else b[b.length]=a+"="+encodeURIComponent(e)}return b.join("&")+(c?"&&"+c:"")};Sys._Application.prototype._setState=function(a,b){if(this._enableHistory){a=a||"";if(a!==this._currentEntry){if(window.theForm){var d=window.theForm.action,e=d.indexOf("#");window.theForm.action=(e!==-1?d.substring(0,e):d)+"#"+a}if(this._historyFrame&&this._historyPointIsNew){var f=document.createElement("div");f.appendChild(document.createTextNode(b||document.title));var g=f.innerHTML;this._ignoreIFrame=true;var c=this._historyFrame.contentWindow.document;c.open("javascript:'<html></html>'");c.write("<html><head><title>"+g+"</title><scri"+'pt type="text/javascript">parent.Sys.Application._onIFrameLoad('+Sys.Serialization.JavaScriptSerializer.serialize(a)+");</scri"+"pt></head><body></body></html>");c.close()}this._ignoreTimer=false;this._currentEntry=a;if(this._historyFrame||this._historyPointIsNew){var h=this.get_stateString();if(a!==h){window.location.hash=a;this._currentEntry=this.get_stateString();if(typeof b!=="undefined"&&b!==null)document.title=b}}this._historyPointIsNew=false}}};Sys._Application.prototype._updateHiddenField=function(b){if(this._clientId){var a=document.getElementById(this._clientId);if(a)a.value=b}};if(!window.XMLHttpRequest)window.XMLHttpRequest=function(){var b=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP"];for(var a=0,c=b.length;a<c;a++)try{return new ActiveXObject(b[a])}catch(d){}return null};Type.registerNamespace("Sys.Net");Sys.Net.WebRequestExecutor=function(){this._webRequest=null;this._resultObject=null};Sys.Net.WebRequestExecutor.prototype={get_webRequest:function(){return this._webRequest},_set_webRequest:function(a){this._webRequest=a},get_started:function(){throw Error.notImplemented()},get_responseAvailable:function(){throw Error.notImplemented()},get_timedOut:function(){throw Error.notImplemented()},get_aborted:function(){throw Error.notImplemented()},get_responseData:function(){throw Error.notImplemented()},get_statusCode:function(){throw Error.notImplemented()},get_statusText:function(){throw Error.notImplemented()},get_xml:function(){throw Error.notImplemented()},get_object:function(){if(!this._resultObject)this._resultObject=Sys.Serialization.JavaScriptSerializer.deserialize(this.get_responseData());return this._resultObject},executeRequest:function(){throw Error.notImplemented()},abort:function(){throw Error.notImplemented()},getResponseHeader:function(){throw Error.notImplemented()},getAllResponseHeaders:function(){throw Error.notImplemented()}};Sys.Net.WebRequestExecutor.registerClass("Sys.Net.WebRequestExecutor");Sys.Net.XMLDOM=function(d){if(!window.DOMParser){var c=["Msxml2.DOMDocument.3.0","Msxml2.DOMDocument"];for(var b=0,f=c.length;b<f;b++)try{var a=new ActiveXObject(c[b]);a.async=false;a.loadXML(d);a.setProperty("SelectionLanguage","XPath");return a}catch(g){}}else try{var e=new window.DOMParser;return e.parseFromString(d,"text/xml")}catch(g){}return null};Sys.Net.XMLHttpExecutor=function(){Sys.Net.XMLHttpExecutor.initializeBase(this);var a=this;this._xmlHttpRequest=null;this._webRequest=null;this._responseAvailable=false;this._timedOut=false;this._timer=null;this._aborted=false;this._started=false;this._onReadyStateChange=function(){if(a._xmlHttpRequest.readyState===4){try{if(typeof a._xmlHttpRequest.status==="undefined")return}catch(b){return}a._clearTimer();a._responseAvailable=true;try{a._webRequest.completed(Sys.EventArgs.Empty)}finally{if(a._xmlHttpRequest!=null){a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest=null}}}};this._clearTimer=function(){if(a._timer!=null){window.clearTimeout(a._timer);a._timer=null}};this._onTimeout=function(){if(!a._responseAvailable){a._clearTimer();a._timedOut=true;a._xmlHttpRequest.onreadystatechange=Function.emptyMethod;a._xmlHttpRequest.abort();a._webRequest.completed(Sys.EventArgs.Empty);a._xmlHttpRequest=null}}};Sys.Net.XMLHttpExecutor.prototype={get_timedOut:function(){return this._timedOut},get_started:function(){return this._started},get_responseAvailable:function(){return this._responseAvailable},get_aborted:function(){return this._aborted},executeRequest:function(){this._webRequest=this.get_webRequest();var c=this._webRequest.get_body(),a=this._webRequest.get_headers();this._xmlHttpRequest=new XMLHttpRequest;this._xmlHttpRequest.onreadystatechange=this._onReadyStateChange;var e=this._webRequest.get_httpVerb();this._xmlHttpRequest.open(e,this._webRequest.getResolvedUrl(),true);this._xmlHttpRequest.setRequestHeader("X-Requested-With","XMLHttpRequest");if(a)for(var b in a){var f=a[b];if(typeof f!=="function")this._xmlHttpRequest.setRequestHeader(b,f)}if(e.toLowerCase()==="post"){if(a===null||!a["Content-Type"])this._xmlHttpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=utf-8");if(!c)c=""}var d=this._webRequest.get_timeout();if(d>0)this._timer=window.setTimeout(Function.createDelegate(this,this._onTimeout),d);this._xmlHttpRequest.send(c);this._started=true},getResponseHeader:function(b){var a;try{a=this._xmlHttpRequest.getResponseHeader(b)}catch(c){}if(!a)a="";return a},getAllResponseHeaders:function(){return this._xmlHttpRequest.getAllResponseHeaders()},get_responseData:function(){return this._xmlHttpRequest.responseText},get_statusCode:function(){var a=0;try{a=this._xmlHttpRequest.status}catch(b){}return a},get_statusText:function(){return this._xmlHttpRequest.statusText},get_xml:function(){var a=this._xmlHttpRequest.responseXML;if(!a||!a.documentElement){a=Sys.Net.XMLDOM(this._xmlHttpRequest.responseText);if(!a||!a.documentElement)return null}else if(navigator.userAgent.indexOf("MSIE")!==-1&&typeof a.setProperty!="undefined")a.setProperty("SelectionLanguage","XPath");if(a.documentElement.namespaceURI==="http://www.mozilla.org/newlayout/xml/parsererror.xml"&&a.documentElement.tagName==="parsererror")return null;if(a.documentElement.firstChild&&a.documentElement.firstChild.tagName==="parsererror")return null;return a},abort:function(){if(this._aborted||this._responseAvailable||this._timedOut)return;this._aborted=true;this._clearTimer();if(this._xmlHttpRequest&&!this._responseAvailable){this._xmlHttpRequest.onreadystatechange=Function.emptyMethod;this._xmlHttpRequest.abort();this._xmlHttpRequest=null;this._webRequest.completed(Sys.EventArgs.Empty)}}};Sys.Net.XMLHttpExecutor.registerClass("Sys.Net.XMLHttpExecutor",Sys.Net.WebRequestExecutor);Sys.Net._WebRequestManager=function(){this._defaultTimeout=0;this._defaultExecutorType="Sys.Net.XMLHttpExecutor"};Sys.Net._WebRequestManager.prototype={add_invokingRequest:function(a){this._get_eventHandlerList().addHandler("invokingRequest",a)},remove_invokingRequest:function(a){this._get_eventHandlerList().removeHandler("invokingRequest",a)},add_completedRequest:function(a){this._get_eventHandlerList().addHandler("completedRequest",a)},remove_completedRequest:function(a){this._get_eventHandlerList().removeHandler("completedRequest",a)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_defaultTimeout:function(){return this._defaultTimeout},set_defaultTimeout:function(a){this._defaultTimeout=a},get_defaultExecutorType:function(){return this._defaultExecutorType},set_defaultExecutorType:function(a){this._defaultExecutorType=a},executeRequest:function(webRequest){var executor=webRequest.get_executor();if(!executor){var failed=false;try{var executorType=eval(this._defaultExecutorType);executor=new executorType}catch(a){failed=true}webRequest.set_executor(executor)}if(executor.get_aborted())return;var evArgs=new Sys.Net.NetworkRequestEventArgs(webRequest),handler=this._get_eventHandlerList().getHandler("invokingRequest");if(handler)handler(this,evArgs);if(!evArgs.get_cancel())executor.executeRequest()}};Sys.Net._WebRequestManager.registerClass("Sys.Net._WebRequestManager");Sys.Net.WebRequestManager=new Sys.Net._WebRequestManager;Sys.Net.NetworkRequestEventArgs=function(a){Sys.Net.NetworkRequestEventArgs.initializeBase(this);this._webRequest=a};Sys.Net.NetworkRequestEventArgs.prototype={get_webRequest:function(){return this._webRequest}};Sys.Net.NetworkRequestEventArgs.registerClass("Sys.Net.NetworkRequestEventArgs",Sys.CancelEventArgs);Sys.Net.WebRequest=function(){this._url="";this._headers={};this._body=null;this._userContext=null;this._httpVerb=null;this._executor=null;this._invokeCalled=false;this._timeout=0};Sys.Net.WebRequest.prototype={add_completed:function(a){this._get_eventHandlerList().addHandler("completed",a)},remove_completed:function(a){this._get_eventHandlerList().removeHandler("completed",a)},completed:function(b){var a=Sys.Net.WebRequestManager._get_eventHandlerList().getHandler("completedRequest");if(a)a(this._executor,b);a=this._get_eventHandlerList().getHandler("completed");if(a)a(this._executor,b)},_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_url:function(){return this._url},set_url:function(a){this._url=a},get_headers:function(){return this._headers},get_httpVerb:function(){if(this._httpVerb===null){if(this._body===null)return "GET";return "POST"}return this._httpVerb},set_httpVerb:function(a){this._httpVerb=a},get_body:function(){return this._body},set_body:function(a){this._body=a},get_userContext:function(){return this._userContext},set_userContext:function(a){this._userContext=a},get_executor:function(){return this._executor},set_executor:function(a){this._executor=a;this._executor._set_webRequest(this)},get_timeout:function(){if(this._timeout===0)return Sys.Net.WebRequestManager.get_defaultTimeout();return this._timeout},set_timeout:function(a){this._timeout=a},getResolvedUrl:function(){return Sys.Net.WebRequest._resolveUrl(this._url)},invoke:function(){Sys.Net.WebRequestManager.executeRequest(this);this._invokeCalled=true}};Sys.Net.WebRequest._resolveUrl=function(b,a){if(b&&b.indexOf("://")!==-1)return b;if(!a||a.length===0){var d=document.getElementsByTagName("base")[0];if(d&&d.href&&d.href.length>0)a=d.href;else a=document.URL}var c=a.indexOf("?");if(c!==-1)a=a.substr(0,c);c=a.indexOf("#");if(c!==-1)a=a.substr(0,c);a=a.substr(0,a.lastIndexOf("/")+1);if(!b||b.length===0)return a;if(b.charAt(0)==="/"){var e=a.indexOf("://"),g=a.indexOf("/",e+3);return a.substr(0,g)+b}else{var f=a.lastIndexOf("/");return a.substr(0,f+1)+b}};Sys.Net.WebRequest._createQueryString=function(c,b,f){b=b||encodeURIComponent;var h=0,e,g,d,a=new Sys.StringBuilder;if(c)for(d in c){e=c[d];if(typeof e==="function")continue;g=Sys.Serialization.JavaScriptSerializer.serialize(e);if(h++)a.append("&");a.append(d);a.append("=");a.append(b(g))}if(f){if(h)a.append("&");a.append(f)}return a.toString()};Sys.Net.WebRequest._createUrl=function(a,b,c){if(!b&&!c)return a;var d=Sys.Net.WebRequest._createQueryString(b,null,c);return d.length?a+(a&&a.indexOf("?")>=0?"&":"?")+d:a};Sys.Net.WebRequest.registerClass("Sys.Net.WebRequest");Sys._ScriptLoaderTask=function(b,a){this._scriptElement=b;this._completedCallback=a};Sys._ScriptLoaderTask.prototype={get_scriptElement:function(){return this._scriptElement},dispose:function(){if(this._disposed)return;this._disposed=true;this._removeScriptElementHandlers();Sys._ScriptLoaderTask._clearScript(this._scriptElement);this._scriptElement=null},execute:function(){if(this._ensureReadyStateLoaded())this._executeInternal()},_executeInternal:function(){this._addScriptElementHandlers();document.getElementsByTagName("head")[0].appendChild(this._scriptElement)},_ensureReadyStateLoaded:function(){if(this._useReadyState()&&this._scriptElement.readyState!=="loaded"&&this._scriptElement.readyState!=="complete"){this._scriptDownloadDelegate=Function.createDelegate(this,this._executeInternal);$addHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);return false}return true},_addScriptElementHandlers:function(){if(this._scriptDownloadDelegate){$removeHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);this._scriptDownloadDelegate=null}this._scriptLoadDelegate=Function.createDelegate(this,this._scriptLoadHandler);if(this._useReadyState())$addHandler(this._scriptElement,"readystatechange",this._scriptLoadDelegate);else $addHandler(this._scriptElement,"load",this._scriptLoadDelegate);if(this._scriptElement.addEventListener){this._scriptErrorDelegate=Function.createDelegate(this,this._scriptErrorHandler);this._scriptElement.addEventListener("error",this._scriptErrorDelegate,false)}},_removeScriptElementHandlers:function(){if(this._scriptLoadDelegate){var a=this.get_scriptElement();if(this._scriptDownloadDelegate){$removeHandler(this._scriptElement,"readystatechange",this._scriptDownloadDelegate);this._scriptDownloadDelegate=null}if(this._useReadyState()&&this._scriptLoadDelegate)$removeHandler(a,"readystatechange",this._scriptLoadDelegate);else $removeHandler(a,"load",this._scriptLoadDelegate);if(this._scriptErrorDelegate){this._scriptElement.removeEventListener("error",this._scriptErrorDelegate,false);this._scriptErrorDelegate=null}this._scriptLoadDelegate=null}},_scriptErrorHandler:function(){if(this._disposed)return;this._completedCallback(this.get_scriptElement(),false)},_scriptLoadHandler:function(){if(this._disposed)return;var a=this.get_scriptElement();if(this._useReadyState()&&a.readyState!=="complete")return;this._completedCallback(a,true)},_useReadyState:function(){return Sys.Browser.agent===Sys.Browser.InternetExplorer&&(Sys.Browser.version<9||(document.documentMode||0)<9)}};Sys._ScriptLoaderTask.registerClass("Sys._ScriptLoaderTask",null,Sys.IDisposable);Sys._ScriptLoaderTask._clearScript=function(a){if(!Sys.Debug.isDebug&&a.parentNode)a.parentNode.removeChild(a)};Type.registerNamespace("Sys.Net");Sys.Net.WebServiceProxy=function(){};Sys.Net.WebServiceProxy.prototype={get_timeout:function(){return this._timeout||0},set_timeout:function(a){if(a<0)throw Error.argumentOutOfRange("value",a,Sys.Res.invalidTimeout);this._timeout=a},get_defaultUserContext:function(){return typeof this._userContext==="undefined"?null:this._userContext},set_defaultUserContext:function(a){this._userContext=a},get_defaultSucceededCallback:function(){return this._succeeded||null},set_defaultSucceededCallback:function(a){this._succeeded=a},get_defaultFailedCallback:function(){return this._failed||null},set_defaultFailedCallback:function(a){this._failed=a},get_enableJsonp:function(){return !!this._jsonp},set_enableJsonp:function(a){this._jsonp=a},get_path:function(){return this._path||null},set_path:function(a){this._path=a},get_jsonpCallbackParameter:function(){return this._callbackParameter||"callback"},set_jsonpCallbackParameter:function(a){this._callbackParameter=a},_invoke:function(d,e,g,f,c,b,a){c=c||this.get_defaultSucceededCallback();b=b||this.get_defaultFailedCallback();if(a===null||typeof a==="undefined")a=this.get_defaultUserContext();return Sys.Net.WebServiceProxy.invoke(d,e,g,f,c,b,a,this.get_timeout(),this.get_enableJsonp(),this.get_jsonpCallbackParameter())}};Sys.Net.WebServiceProxy.registerClass("Sys.Net.WebServiceProxy");Sys.Net.WebServiceProxy.invoke=function(q,a,m,l,j,b,g,e,w,p){var i=w!==false?Sys.Net.WebServiceProxy._xdomain.exec(q):null,c,n=i&&i.length===3&&(i[1]!==location.protocol||i[2]!==location.host);m=n||m;if(n){p=p||"callback";c="_jsonp"+Sys._jsonp++}if(!l)l={};var r=l;if(!m||!r)r={};var s,h,f=null,k,o=null,u=Sys.Net.WebRequest._createUrl(a?q+"/"+encodeURIComponent(a):q,r,n?p+"=Sys."+c:null);if(n){s=document.createElement("script");s.src=u;k=new Sys._ScriptLoaderTask(s,function(d,b){if(!b||c)t({Message:String.format(Sys.Res.webServiceFailedNoMsg,a)},-1)});function v(){if(f===null)return;f=null;h=new Sys.Net.WebServiceError(true,String.format(Sys.Res.webServiceTimedOut,a));k.dispose();delete Sys[c];if(b)b(h,g,a)}function t(d,e){if(f!==null){window.clearTimeout(f);f=null}k.dispose();delete Sys[c];c=null;if(typeof e!=="undefined"&&e!==200){if(b){h=new Sys.Net.WebServiceError(false,d.Message||String.format(Sys.Res.webServiceFailedNoMsg,a),d.StackTrace||null,d.ExceptionType||null,d);h._statusCode=e;b(h,g,a)}}else if(j)j(d,g,a)}Sys[c]=t;e=e||Sys.Net.WebRequestManager.get_defaultTimeout();if(e>0)f=window.setTimeout(v,e);k.execute();return null}var d=new Sys.Net.WebRequest;d.set_url(u);d.get_headers()["Content-Type"]="application/json; charset=utf-8";if(!m){o=Sys.Serialization.JavaScriptSerializer.serialize(l);if(o==="{}")o=""}d.set_body(o);d.add_completed(x);if(e&&e>0)d.set_timeout(e);d.invoke();function x(d){if(d.get_responseAvailable()){var f=d.get_statusCode(),c=null;try{var e=d.getResponseHeader("Content-Type");if(e.startsWith("application/json"))c=d.get_object();else if(e.startsWith("text/xml"))c=d.get_xml();else c=d.get_responseData()}catch(m){}var k=d.getResponseHeader("jsonerror"),h=k==="true";if(h){if(c)c=new Sys.Net.WebServiceError(false,c.Message,c.StackTrace,c.ExceptionType,c)}else if(e.startsWith("application/json"))c=!c||typeof c.d==="undefined"?c:c.d;if(f<200||f>=300||h){if(b){if(!c||!h)c=new Sys.Net.WebServiceError(false,String.format(Sys.Res.webServiceFailedNoMsg,a));c._statusCode=f;b(c,g,a)}}else if(j)j(c,g,a)}else{var i;if(d.get_timedOut())i=String.format(Sys.Res.webServiceTimedOut,a);else i=String.format(Sys.Res.webServiceFailedNoMsg,a);if(b)b(new Sys.Net.WebServiceError(d.get_timedOut(),i,"",""),g,a)}}return d};Sys.Net.WebServiceProxy._generateTypedConstructor=function(a){return function(b){if(b)for(var c in b)this[c]=b[c];this.__type=a}};Sys._jsonp=0;Sys.Net.WebServiceProxy._xdomain=/^\s*([a-zA-Z0-9\+\-\.]+\:)\/\/([^?#\/]+)/;Sys.Net.WebServiceError=function(d,e,c,a,b){this._timedOut=d;this._message=e;this._stackTrace=c;this._exceptionType=a;this._errorObject=b;this._statusCode=-1};Sys.Net.WebServiceError.prototype={get_timedOut:function(){return this._timedOut},get_statusCode:function(){return this._statusCode},get_message:function(){return this._message},get_stackTrace:function(){return this._stackTrace||""},get_exceptionType:function(){return this._exceptionType||""},get_errorObject:function(){return this._errorObject||null}};Sys.Net.WebServiceError.registerClass("Sys.Net.WebServiceError");;
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------
// MicrosoftAjaxWebForms.js
Type._registerScript("MicrosoftAjaxWebForms.js",["MicrosoftAjaxCore.js","MicrosoftAjaxSerialization.js","MicrosoftAjaxNetwork.js","MicrosoftAjaxComponentModel.js"]);Type.registerNamespace("Sys.WebForms");Sys.WebForms.BeginRequestEventArgs=function(c,b,a){Sys.WebForms.BeginRequestEventArgs.initializeBase(this);this._request=c;this._postBackElement=b;this._updatePanelsToUpdate=a};Sys.WebForms.BeginRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdate:function(){return this._updatePanelsToUpdate?Array.clone(this._updatePanelsToUpdate):[]}};Sys.WebForms.BeginRequestEventArgs.registerClass("Sys.WebForms.BeginRequestEventArgs",Sys.EventArgs);Sys.WebForms.EndRequestEventArgs=function(c,a,b){Sys.WebForms.EndRequestEventArgs.initializeBase(this);this._errorHandled=false;this._error=c;this._dataItems=a||{};this._response=b};Sys.WebForms.EndRequestEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_error:function(){return this._error},get_errorHandled:function(){return this._errorHandled},set_errorHandled:function(a){this._errorHandled=a},get_response:function(){return this._response}};Sys.WebForms.EndRequestEventArgs.registerClass("Sys.WebForms.EndRequestEventArgs",Sys.EventArgs);Sys.WebForms.InitializeRequestEventArgs=function(c,b,a){Sys.WebForms.InitializeRequestEventArgs.initializeBase(this);this._request=c;this._postBackElement=b;this._updatePanelsToUpdate=a};Sys.WebForms.InitializeRequestEventArgs.prototype={get_postBackElement:function(){return this._postBackElement},get_request:function(){return this._request},get_updatePanelsToUpdate:function(){return this._updatePanelsToUpdate?Array.clone(this._updatePanelsToUpdate):[]},set_updatePanelsToUpdate:function(a){this._updated=true;this._updatePanelsToUpdate=a}};Sys.WebForms.InitializeRequestEventArgs.registerClass("Sys.WebForms.InitializeRequestEventArgs",Sys.CancelEventArgs);Sys.WebForms.PageLoadedEventArgs=function(b,a,c){Sys.WebForms.PageLoadedEventArgs.initializeBase(this);this._panelsUpdated=b;this._panelsCreated=a;this._dataItems=c||{}};Sys.WebForms.PageLoadedEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_panelsCreated:function(){return this._panelsCreated},get_panelsUpdated:function(){return this._panelsUpdated}};Sys.WebForms.PageLoadedEventArgs.registerClass("Sys.WebForms.PageLoadedEventArgs",Sys.EventArgs);Sys.WebForms.PageLoadingEventArgs=function(b,a,c){Sys.WebForms.PageLoadingEventArgs.initializeBase(this);this._panelsUpdating=b;this._panelsDeleting=a;this._dataItems=c||{}};Sys.WebForms.PageLoadingEventArgs.prototype={get_dataItems:function(){return this._dataItems},get_panelsDeleting:function(){return this._panelsDeleting},get_panelsUpdating:function(){return this._panelsUpdating}};Sys.WebForms.PageLoadingEventArgs.registerClass("Sys.WebForms.PageLoadingEventArgs",Sys.EventArgs);Sys._ScriptLoader=function(){this._scriptsToLoad=null;this._sessions=[];this._scriptLoadedDelegate=Function.createDelegate(this,this._scriptLoadedHandler)};Sys._ScriptLoader.prototype={dispose:function(){this._stopSession();this._loading=false;if(this._events)delete this._events;this._sessions=null;this._currentSession=null;this._scriptLoadedDelegate=null},loadScripts:function(d,b,c,a){var e={allScriptsLoadedCallback:b,scriptLoadFailedCallback:c,scriptLoadTimeoutCallback:a,scriptsToLoad:this._scriptsToLoad,scriptTimeout:d};this._scriptsToLoad=null;this._sessions[this._sessions.length]=e;if(!this._loading)this._nextSession()},queueCustomScriptTag:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,a)},queueScriptBlock:function(a){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{text:a})},queueScriptReference:function(a,b){if(!this._scriptsToLoad)this._scriptsToLoad=[];Array.add(this._scriptsToLoad,{src:a,fallback:b})},_createScriptElement:function(c){var a=document.createElement("script");a.type="text/javascript";for(var b in c)a[b]=c[b];return a},_loadScriptsInternal:function(){var c=this._currentSession;if(c.scriptsToLoad&&c.scriptsToLoad.length>0){var b=Array.dequeue(c.scriptsToLoad),f=this._scriptLoadedDelegate;if(b.fallback){var g=b.fallback;delete b.fallback;var d=this;f=function(b,a){a||function(){var a=d._createScriptElement({src:g});d._currentTask=new Sys._ScriptLoaderTask(a,d._scriptLoadedDelegate);d._currentTask.execute()}()}}var a=this._createScriptElement(b);if(a.text&&Sys.Browser.agent===Sys.Browser.Safari){a.innerHTML=a.text;delete a.text}if(typeof b.src==="string"){this._currentTask=new Sys._ScriptLoaderTask(a,f);this._currentTask.execute()}else{document.getElementsByTagName("head")[0].appendChild(a);Sys._ScriptLoaderTask._clearScript(a);this._loadScriptsInternal()}}else{this._stopSession();var e=c.allScriptsLoadedCallback;if(e)e(this);this._nextSession()}},_nextSession:function(){if(this._sessions.length===0){this._loading=false;this._currentSession=null;return}this._loading=true;var a=Array.dequeue(this._sessions);this._currentSession=a;if(a.scriptTimeout>0)this._timeoutCookie=window.setTimeout(Function.createDelegate(this,this._scriptLoadTimeoutHandler),a.scriptTimeout*1000);this._loadScriptsInternal()},_raiseError:function(){var b=this._currentSession.scriptLoadFailedCallback,a=this._currentTask.get_scriptElement();this._stopSession();if(b){b(this,a);this._nextSession()}else{this._loading=false;throw Sys._ScriptLoader._errorScriptLoadFailed(a.src)}},_scriptLoadedHandler:function(a,b){if(b){Array.add(Sys._ScriptLoader._getLoadedScripts(),a.src);this._currentTask.dispose();this._currentTask=null;this._loadScriptsInternal()}else this._raiseError()},_scriptLoadTimeoutHandler:function(){var a=this._currentSession.scriptLoadTimeoutCallback;this._stopSession();if(a)a(this);this._nextSession()},_stopSession:function(){if(this._timeoutCookie){window.clearTimeout(this._timeoutCookie);this._timeoutCookie=null}if(this._currentTask){this._currentTask.dispose();this._currentTask=null}}};Sys._ScriptLoader.registerClass("Sys._ScriptLoader",null,Sys.IDisposable);Sys._ScriptLoader.getInstance=function(){var a=Sys._ScriptLoader._activeInstance;if(!a)a=Sys._ScriptLoader._activeInstance=new Sys._ScriptLoader;return a};Sys._ScriptLoader.isScriptLoaded=function(b){var a=document.createElement("script");a.src=b;return Array.contains(Sys._ScriptLoader._getLoadedScripts(),a.src)};Sys._ScriptLoader.readLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){var c=Sys._ScriptLoader._referencedScripts=[],d=document.getElementsByTagName("script");for(var b=d.length-1;b>=0;b--){var e=d[b],a=e.src;if(a.length)if(!Array.contains(c,a))Array.add(c,a)}}};Sys._ScriptLoader._errorScriptLoadFailed=function(b){var a;a=Sys.Res.scriptLoadFailed;var d="Sys.ScriptLoadFailedException: "+String.format(a,b),c=Error.create(d,{name:"Sys.ScriptLoadFailedException","scriptUrl":b});c.popStackFrame();return c};Sys._ScriptLoader._getLoadedScripts=function(){if(!Sys._ScriptLoader._referencedScripts){Sys._ScriptLoader._referencedScripts=[];Sys._ScriptLoader.readLoadedScripts()}return Sys._ScriptLoader._referencedScripts};Sys.WebForms.PageRequestManager=function(){this._form=null;this._activeDefaultButton=null;this._activeDefaultButtonClicked=false;this._updatePanelIDs=null;this._updatePanelClientIDs=null;this._updatePanelHasChildrenAsTriggers=null;this._asyncPostBackControlIDs=null;this._asyncPostBackControlClientIDs=null;this._postBackControlIDs=null;this._postBackControlClientIDs=null;this._scriptManagerID=null;this._pageLoadedHandler=null;this._additionalInput=null;this._onsubmit=null;this._onSubmitStatements=[];this._originalDoPostBack=null;this._originalDoPostBackWithOptions=null;this._originalFireDefaultButton=null;this._originalDoCallback=null;this._isCrossPost=false;this._postBackSettings=null;this._request=null;this._onFormSubmitHandler=null;this._onFormElementClickHandler=null;this._onWindowUnloadHandler=null;this._asyncPostBackTimeout=null;this._controlIDToFocus=null;this._scrollPosition=null;this._processingRequest=false;this._scriptDisposes={};this._transientFields=["__VIEWSTATEENCRYPTED","__VIEWSTATEFIELDCOUNT"];this._textTypes=/^(text|password|hidden|search|tel|url|email|number|range|color|datetime|date|month|week|time|datetime-local)$/i};Sys.WebForms.PageRequestManager.prototype={_get_eventHandlerList:function(){if(!this._events)this._events=new Sys.EventHandlerList;return this._events},get_isInAsyncPostBack:function(){return this._request!==null},add_beginRequest:function(a){this._get_eventHandlerList().addHandler("beginRequest",a)},remove_beginRequest:function(a){this._get_eventHandlerList().removeHandler("beginRequest",a)},add_endRequest:function(a){this._get_eventHandlerList().addHandler("endRequest",a)},remove_endRequest:function(a){this._get_eventHandlerList().removeHandler("endRequest",a)},add_initializeRequest:function(a){this._get_eventHandlerList().addHandler("initializeRequest",a)},remove_initializeRequest:function(a){this._get_eventHandlerList().removeHandler("initializeRequest",a)},add_pageLoaded:function(a){this._get_eventHandlerList().addHandler("pageLoaded",a)},remove_pageLoaded:function(a){this._get_eventHandlerList().removeHandler("pageLoaded",a)},add_pageLoading:function(a){this._get_eventHandlerList().addHandler("pageLoading",a)},remove_pageLoading:function(a){this._get_eventHandlerList().removeHandler("pageLoading",a)},abortPostBack:function(){if(!this._processingRequest&&this._request){this._request.get_executor().abort();this._request=null}},beginAsyncPostBack:function(c,a,f,d,e){if(d&&typeof Page_ClientValidate==="function"&&!Page_ClientValidate(e||null))return;this._postBackSettings=this._createPostBackSettings(true,c,a);var b=this._form;b.__EVENTTARGET.value=a||"";b.__EVENTARGUMENT.value=f||"";this._isCrossPost=false;this._additionalInput=null;this._onFormSubmit()},_cancelPendingCallbacks:function(){for(var a=0,e=window.__pendingCallbacks.length;a<e;a++){var c=window.__pendingCallbacks[a];if(c){if(!c.async)window.__synchronousCallBackIndex=-1;window.__pendingCallbacks[a]=null;var d="__CALLBACKFRAME"+a,b=document.getElementById(d);if(b)b.parentNode.removeChild(b)}}},_commitControls:function(a,b){if(a){this._updatePanelIDs=a.updatePanelIDs;this._updatePanelClientIDs=a.updatePanelClientIDs;this._updatePanelHasChildrenAsTriggers=a.updatePanelHasChildrenAsTriggers;this._asyncPostBackControlIDs=a.asyncPostBackControlIDs;this._asyncPostBackControlClientIDs=a.asyncPostBackControlClientIDs;this._postBackControlIDs=a.postBackControlIDs;this._postBackControlClientIDs=a.postBackControlClientIDs}if(typeof b!=="undefined"&&b!==null)this._asyncPostBackTimeout=b*1000},_createHiddenField:function(c,d){var b,a=document.getElementById(c);if(a)if(!a._isContained)a.parentNode.removeChild(a);else b=a.parentNode;if(!b){b=document.createElement("span");b.style.cssText="display:none !important";this._form.appendChild(b)}b.innerHTML="<input type='hidden' />";a=b.childNodes[0];a._isContained=true;a.id=a.name=c;a.value=d},_createPageRequestManagerTimeoutError:function(){var b="Sys.WebForms.PageRequestManagerTimeoutException: "+Sys.WebForms.Res.PRM_TimeoutError,a=Error.create(b,{name:"Sys.WebForms.PageRequestManagerTimeoutException"});a.popStackFrame();return a},_createPageRequestManagerServerError:function(a,d){var c="Sys.WebForms.PageRequestManagerServerErrorException: "+(d||String.format(Sys.WebForms.Res.PRM_ServerError,a)),b=Error.create(c,{name:"Sys.WebForms.PageRequestManagerServerErrorException",httpStatusCode:a});b.popStackFrame();return b},_createPageRequestManagerParserError:function(b){var c="Sys.WebForms.PageRequestManagerParserErrorException: "+String.format(Sys.WebForms.Res.PRM_ParserError,b),a=Error.create(c,{name:"Sys.WebForms.PageRequestManagerParserErrorException"});a.popStackFrame();return a},_createPanelID:function(e,b){var c=b.asyncTarget,a=this._ensureUniqueIds(e||b.panelsToUpdate),d=a instanceof Array?a.join(","):a||this._scriptManagerID;if(c)d+="|"+c;return encodeURIComponent(this._scriptManagerID)+"="+encodeURIComponent(d)+"&"},_createPostBackSettings:function(d,a,c,b){return {async:d,asyncTarget:c,panelsToUpdate:a,sourceElement:b}},_convertToClientIDs:function(a,f,e,d){if(a)for(var b=0,h=a.length;b<h;b+=d?2:1){var c=a[b],g=(d?a[b+1]:"")||this._uniqueIDToClientID(c);Array.add(f,c);Array.add(e,g)}},dispose:function(){if(this._form){Sys.UI.DomEvent.removeHandler(this._form,"submit",this._onFormSubmitHandler);Sys.UI.DomEvent.removeHandler(this._form,"click",this._onFormElementClickHandler);Sys.UI.DomEvent.removeHandler(window,"unload",this._onWindowUnloadHandler);Sys.UI.DomEvent.removeHandler(window,"load",this._pageLoadedHandler)}if(this._originalDoPostBack){window.__doPostBack=this._originalDoPostBack;this._originalDoPostBack=null}if(this._originalDoPostBackWithOptions){window.WebForm_DoPostBackWithOptions=this._originalDoPostBackWithOptions;this._originalDoPostBackWithOptions=null}if(this._originalFireDefaultButton){window.WebForm_FireDefaultButton=this._originalFireDefaultButton;this._originalFireDefaultButton=null}if(this._originalDoCallback){window.WebForm_DoCallback=this._originalDoCallback;this._originalDoCallback=null}this._form=null;this._updatePanelIDs=null;this._updatePanelClientIDs=null;this._asyncPostBackControlIDs=null;this._asyncPostBackControlClientIDs=null;this._postBackControlIDs=null;this._postBackControlClientIDs=null;this._asyncPostBackTimeout=null;this._scrollPosition=null;this._activeElement=null},_doCallback:function(d,b,c,f,a,e){if(!this.get_isInAsyncPostBack())this._originalDoCallback(d,b,c,f,a,e)},_doPostBack:function(a,k){var f=window.event;if(!f){var d=arguments.callee?arguments.callee.caller:null;if(d){var j=30;while(d.arguments.callee.caller&&--j)d=d.arguments.callee.caller;f=j&&d.arguments.length?d.arguments[0]:null}}this._additionalInput=null;var h=this._form;if(a===null||typeof a==="undefined"||this._isCrossPost){this._postBackSettings=this._createPostBackSettings(false);this._isCrossPost=false}else{var c=this._masterPageUniqueID,l=this._uniqueIDToClientID(a),g=document.getElementById(l);if(!g&&c)if(a.indexOf(c+"$")===0)g=document.getElementById(l.substr(c.length+1));if(!g)if(Array.contains(this._asyncPostBackControlIDs,a))this._postBackSettings=this._createPostBackSettings(true,null,a);else if(Array.contains(this._postBackControlIDs,a))this._postBackSettings=this._createPostBackSettings(false);else{var e=this._findNearestElement(a);if(e)this._postBackSettings=this._getPostBackSettings(e,a);else{if(c){c+="$";if(a.indexOf(c)===0)e=this._findNearestElement(a.substr(c.length))}if(e)this._postBackSettings=this._getPostBackSettings(e,a);else{var b;try{b=f?f.target||f.srcElement:null}catch(n){}b=b||this._activeElement;var m=/__doPostBack\(|WebForm_DoPostBackWithOptions\(/;function i(b){b=b?b.toString():"";return m.test(b)&&b.indexOf("'"+a+"'")!==-1||b.indexOf('"'+a+'"')!==-1}if(b&&(b.name===a||i(b.href)||i(b.onclick)||i(b.onchange)))this._postBackSettings=this._getPostBackSettings(b,a);else this._postBackSettings=this._createPostBackSettings(false)}}}else this._postBackSettings=this._getPostBackSettings(g,a)}if(!this._postBackSettings.async){h.onsubmit=this._onsubmit;this._originalDoPostBack(a,k);h.onsubmit=null;return}h.__EVENTTARGET.value=a;h.__EVENTARGUMENT.value=k;this._onFormSubmit()},_doPostBackWithOptions:function(a){this._isCrossPost=a&&a.actionUrl;var d=true;if(a.validation)if(typeof Page_ClientValidate=="function")d=Page_ClientValidate(a.validationGroup);if(d){if(typeof a.actionUrl!="undefined"&&a.actionUrl!=null&&a.actionUrl.length>0)theForm.action=a.actionUrl;if(a.trackFocus){var c=theForm.elements["__LASTFOCUS"];if(typeof c!="undefined"&&c!=null)if(typeof document.activeElement=="undefined")c.value=a.eventTarget;else{var b=document.activeElement;if(typeof b!="undefined"&&b!=null)if(typeof b.id!="undefined"&&b.id!=null&&b.id.length>0)c.value=b.id;else if(typeof b.name!="undefined")c.value=b.name}}}if(a.clientSubmit)this._doPostBack(a.eventTarget,a.eventArgument)},_elementContains:function(b,a){while(a){if(a===b)return true;a=a.parentNode}return false},_endPostBack:function(a,d,f){if(this._request===d.get_webRequest()){this._processingRequest=false;this._additionalInput=null;this._request=null}var e=this._get_eventHandlerList().getHandler("endRequest"),b=false;if(e){var c=new Sys.WebForms.EndRequestEventArgs(a,f?f.dataItems:{},d);e(this,c);b=c.get_errorHandled()}if(a&&!b)throw a},_ensureUniqueIds:function(a){if(!a)return a;a=a instanceof Array?a:[a];var c=[];for(var b=0,f=a.length;b<f;b++){var e=a[b],d=Array.indexOf(this._updatePanelClientIDs,e);c.push(d>-1?this._updatePanelIDs[d]:e)}return c},_findNearestElement:function(a){while(a.length>0){var d=this._uniqueIDToClientID(a),c=document.getElementById(d);if(c)return c;var b=a.lastIndexOf("$");if(b===-1)return null;a=a.substring(0,b)}return null},_findText:function(b,a){var c=Math.max(0,a-20),d=Math.min(b.length,a+20);return b.substring(c,d)},_fireDefaultButton:function(a,d){if(a.keyCode===13){var c=a.srcElement||a.target;if(!c||c.tagName.toLowerCase()!=="textarea"){var b=document.getElementById(d);if(b&&typeof b.click!=="undefined"){this._activeDefaultButton=b;this._activeDefaultButtonClicked=false;try{b.click()}finally{this._activeDefaultButton=null}a.cancelBubble=true;if(typeof a.stopPropagation==="function")a.stopPropagation();return false}}}return true},_getPageLoadedEventArgs:function(n,c){var m=[],l=[],k=c?c.version4:false,d=c?c.updatePanelData:null,e,g,h,b;if(!d){e=this._updatePanelIDs;g=this._updatePanelClientIDs;h=null;b=null}else{e=d.updatePanelIDs;g=d.updatePanelClientIDs;h=d.childUpdatePanelIDs;b=d.panelsToRefreshIDs}var a,f,j,i;if(b)for(a=0,f=b.length;a<f;a+=k?2:1){j=b[a];i=(k?b[a+1]:"")||this._uniqueIDToClientID(j);Array.add(m,document.getElementById(i))}for(a=0,f=e.length;a<f;a++)if(n||Array.indexOf(h,e[a])!==-1)Array.add(l,document.getElementById(g[a]));return new Sys.WebForms.PageLoadedEventArgs(m,l,c?c.dataItems:{})},_getPageLoadingEventArgs:function(f){var j=[],i=[],c=f.updatePanelData,k=c.oldUpdatePanelIDs,l=c.oldUpdatePanelClientIDs,n=c.updatePanelIDs,m=c.childUpdatePanelIDs,d=c.panelsToRefreshIDs,a,e,b,g,h=f.version4;for(a=0,e=d.length;a<e;a+=h?2:1){b=d[a];g=(h?d[a+1]:"")||this._uniqueIDToClientID(b);Array.add(j,document.getElementById(g))}for(a=0,e=k.length;a<e;a++){b=k[a];if(Array.indexOf(d,b)===-1&&(Array.indexOf(n,b)===-1||Array.indexOf(m,b)>-1))Array.add(i,document.getElementById(l[a]))}return new Sys.WebForms.PageLoadingEventArgs(j,i,f.dataItems)},_getPostBackSettings:function(a,c){var d=a,b=null;while(a){if(a.id){if(!b&&Array.contains(this._asyncPostBackControlClientIDs,a.id))b=this._createPostBackSettings(true,null,c,d);else if(!b&&Array.contains(this._postBackControlClientIDs,a.id))return this._createPostBackSettings(false);else{var e=Array.indexOf(this._updatePanelClientIDs,a.id);if(e!==-1)if(this._updatePanelHasChildrenAsTriggers[e])return this._createPostBackSettings(true,[this._updatePanelIDs[e]],c,d);else return this._createPostBackSettings(true,null,c,d)}if(!b&&this._matchesParentIDInList(a.id,this._asyncPostBackControlClientIDs))b=this._createPostBackSettings(true,null,c,d);else if(!b&&this._matchesParentIDInList(a.id,this._postBackControlClientIDs))return this._createPostBackSettings(false)}a=a.parentNode}if(!b)return this._createPostBackSettings(false);else return b},_getScrollPosition:function(){var a=document.documentElement;if(a&&(this._validPosition(a.scrollLeft)||this._validPosition(a.scrollTop)))return {x:a.scrollLeft,y:a.scrollTop};else{a=document.body;if(a&&(this._validPosition(a.scrollLeft)||this._validPosition(a.scrollTop)))return {x:a.scrollLeft,y:a.scrollTop};else if(this._validPosition(window.pageXOffset)||this._validPosition(window.pageYOffset))return {x:window.pageXOffset,y:window.pageYOffset};else return {x:0,y:0}}},_initializeInternal:function(f,g,a,b,e,c,d){if(this._prmInitialized)throw Error.invalidOperation(Sys.WebForms.Res.PRM_CannotRegisterTwice);this._prmInitialized=true;this._masterPageUniqueID=d;this._scriptManagerID=f;this._form=Sys.UI.DomElement.resolveElement(g);this._onsubmit=this._form.onsubmit;this._form.onsubmit=null;this._onFormSubmitHandler=Function.createDelegate(this,this._onFormSubmit);this._onFormElementClickHandler=Function.createDelegate(this,this._onFormElementClick);this._onWindowUnloadHandler=Function.createDelegate(this,this._onWindowUnload);Sys.UI.DomEvent.addHandler(this._form,"submit",this._onFormSubmitHandler);Sys.UI.DomEvent.addHandler(this._form,"click",this._onFormElementClickHandler);Sys.UI.DomEvent.addHandler(window,"unload",this._onWindowUnloadHandler);this._originalDoPostBack=window.__doPostBack;if(this._originalDoPostBack)window.__doPostBack=Function.createDelegate(this,this._doPostBack);this._originalDoPostBackWithOptions=window.WebForm_DoPostBackWithOptions;if(this._originalDoPostBackWithOptions)window.WebForm_DoPostBackWithOptions=Function.createDelegate(this,this._doPostBackWithOptions);this._originalFireDefaultButton=window.WebForm_FireDefaultButton;if(this._originalFireDefaultButton)window.WebForm_FireDefaultButton=Function.createDelegate(this,this._fireDefaultButton);this._originalDoCallback=window.WebForm_DoCallback;if(this._originalDoCallback)window.WebForm_DoCallback=Function.createDelegate(this,this._doCallback);this._pageLoadedHandler=Function.createDelegate(this,this._pageLoadedInitialLoad);Sys.UI.DomEvent.addHandler(window,"load",this._pageLoadedHandler);if(a)this._updateControls(a,b,e,c,true)},_matchesParentIDInList:function(c,b){for(var a=0,d=b.length;a<d;a++)if(c.startsWith(b[a]+"_"))return true;return false},_onFormElementActive:function(a,d,e){if(a.disabled)return;this._activeElement=a;this._postBackSettings=this._getPostBackSettings(a,a.name);if(a.name){var b=a.tagName.toUpperCase();if(b==="INPUT"){var c=a.type;if(c==="submit")this._additionalInput=encodeURIComponent(a.name)+"="+encodeURIComponent(a.value);else if(c==="image")this._additionalInput=encodeURIComponent(a.name)+".x="+d+"&"+encodeURIComponent(a.name)+".y="+e}else if(b==="BUTTON"&&a.name.length!==0&&a.type==="submit")this._additionalInput=encodeURIComponent(a.name)+"="+encodeURIComponent(a.value)}},_onFormElementClick:function(a){this._activeDefaultButtonClicked=a.target===this._activeDefaultButton;this._onFormElementActive(a.target,a.offsetX,a.offsetY)},_onFormSubmit:function(i){var f,x,h=true,z=this._isCrossPost;this._isCrossPost=false;if(this._onsubmit)h=this._onsubmit();if(h)for(f=0,x=this._onSubmitStatements.length;f<x;f++)if(!this._onSubmitStatements[f]()){h=false;break}if(!h){if(i)i.preventDefault();return}var w=this._form;if(z)return;if(this._activeDefaultButton&&!this._activeDefaultButtonClicked)this._onFormElementActive(this._activeDefaultButton,0,0);if(!this._postBackSettings||!this._postBackSettings.async)return;var b=new Sys.StringBuilder,s=w.elements,B=s.length,t=this._createPanelID(null,this._postBackSettings);b.append(t);for(f=0;f<B;f++){var e=s[f],g=e.name;if(typeof g==="undefined"||g===null||g.length===0||g===this._scriptManagerID)continue;var n=e.tagName.toUpperCase();if(n==="INPUT"){var p=e.type;if(this._textTypes.test(p)||(p==="checkbox"||p==="radio")&&e.checked){b.append(encodeURIComponent(g));b.append("=");b.append(encodeURIComponent(e.value));b.append("&")}}else if(n==="SELECT"){var A=e.options.length;for(var q=0;q<A;q++){var u=e.options[q];if(u.selected){b.append(encodeURIComponent(g));b.append("=");b.append(encodeURIComponent(u.value));b.append("&")}}}else if(n==="TEXTAREA"){b.append(encodeURIComponent(g));b.append("=");b.append(encodeURIComponent(e.value));b.append("&")}}b.append("__ASYNCPOST=true&");if(this._additionalInput){b.append(this._additionalInput);this._additionalInput=null}var c=new Sys.Net.WebRequest,a=w.action;if(Sys.Browser.agent===Sys.Browser.InternetExplorer){var r=a.indexOf("#");if(r!==-1)a=a.substr(0,r);var o="",v="",m=a.indexOf("?");if(m!==-1){v=a.substr(m);a=a.substr(0,m)}if(/^https?\:\/\/.*$/gi.test(a)){var y=a.indexOf("//")+2,l=a.indexOf("/",y);if(l===-1){o=a;a=""}else{o=a.substr(0,l);a=a.substr(l)}}a=o+encodeURI(decodeURI(a))+v}c.set_url(a);c.get_headers()["X-MicrosoftAjax"]="Delta=true";c.get_headers()["Cache-Control"]="no-cache";c.set_timeout(this._asyncPostBackTimeout);c.add_completed(Function.createDelegate(this,this._onFormSubmitCompleted));c.set_body(b.toString());var j,d,k=this._get_eventHandlerList().getHandler("initializeRequest");if(k){j=this._postBackSettings.panelsToUpdate;d=new Sys.WebForms.InitializeRequestEventArgs(c,this._postBackSettings.sourceElement,j);k(this,d);h=!d.get_cancel()}if(!h){if(i)i.preventDefault();return}if(d&&d._updated){j=d.get_updatePanelsToUpdate();c.set_body(c.get_body().replace(t,this._createPanelID(j,this._postBackSettings)))}this._scrollPosition=this._getScrollPosition();this.abortPostBack();k=this._get_eventHandlerList().getHandler("beginRequest");if(k){d=new Sys.WebForms.BeginRequestEventArgs(c,this._postBackSettings.sourceElement,j||this._postBackSettings.panelsToUpdate);k(this,d)}if(this._originalDoCallback)this._cancelPendingCallbacks();this._request=c;this._processingRequest=false;c.invoke();if(i)i.preventDefault()},_onFormSubmitCompleted:function(c){this._processingRequest=true;if(c.get_timedOut()){this._endPostBack(this._createPageRequestManagerTimeoutError(),c,null);return}if(c.get_aborted()){this._endPostBack(null,c,null);return}if(!this._request||c.get_webRequest()!==this._request)return;if(c.get_statusCode()!==200){this._endPostBack(this._createPageRequestManagerServerError(c.get_statusCode()),c,null);return}var a=this._parseDelta(c);if(!a)return;var b,e;if(a.asyncPostBackControlIDsNode&&a.postBackControlIDsNode&&a.updatePanelIDsNode&&a.panelsToRefreshNode&&a.childUpdatePanelIDsNode){var r=this._updatePanelIDs,n=this._updatePanelClientIDs,i=a.childUpdatePanelIDsNode.content,p=i.length?i.split(","):[],m=this._splitNodeIntoArray(a.asyncPostBackControlIDsNode),o=this._splitNodeIntoArray(a.postBackControlIDsNode),q=this._splitNodeIntoArray(a.updatePanelIDsNode),g=this._splitNodeIntoArray(a.panelsToRefreshNode),h=a.version4;for(b=0,e=g.length;b<e;b+=h?2:1){var j=(h?g[b+1]:"")||this._uniqueIDToClientID(g[b]);if(!document.getElementById(j)){this._endPostBack(Error.invalidOperation(String.format(Sys.WebForms.Res.PRM_MissingPanel,j)),c,a);return}}var f=this._processUpdatePanelArrays(q,m,o,h);f.oldUpdatePanelIDs=r;f.oldUpdatePanelClientIDs=n;f.childUpdatePanelIDs=p;f.panelsToRefreshIDs=g;a.updatePanelData=f}a.dataItems={};var d;for(b=0,e=a.dataItemNodes.length;b<e;b++){d=a.dataItemNodes[b];a.dataItems[d.id]=d.content}for(b=0,e=a.dataItemJsonNodes.length;b<e;b++){d=a.dataItemJsonNodes[b];a.dataItems[d.id]=Sys.Serialization.JavaScriptSerializer.deserialize(d.content)}var l=this._get_eventHandlerList().getHandler("pageLoading");if(l)l(this,this._getPageLoadingEventArgs(a));Sys._ScriptLoader.readLoadedScripts();Sys.Application.beginCreateComponents();var k=Sys._ScriptLoader.getInstance();this._queueScripts(k,a.scriptBlockNodes,true,false);this._processingRequest=true;k.loadScripts(0,Function.createDelegate(this,Function.createCallback(this._scriptIncludesLoadComplete,a)),Function.createDelegate(this,Function.createCallback(this._scriptIncludesLoadFailed,a)),null)},_onWindowUnload:function(){this.dispose()},_pageLoaded:function(a,c){var b=this._get_eventHandlerList().getHandler("pageLoaded");if(b)b(this,this._getPageLoadedEventArgs(a,c));if(!a)Sys.Application.raiseLoad()},_pageLoadedInitialLoad:function(){this._pageLoaded(true,null)},_parseDelta:function(h){var c=h.get_responseData(),d,i,E,F,D,b=0,e=null,k=[];while(b<c.length){d=c.indexOf("|",b);if(d===-1){e=this._findText(c,b);break}i=parseInt(c.substring(b,d),10);if(i%1!==0){e=this._findText(c,b);break}b=d+1;d=c.indexOf("|",b);if(d===-1){e=this._findText(c,b);break}E=c.substring(b,d);b=d+1;d=c.indexOf("|",b);if(d===-1){e=this._findText(c,b);break}F=c.substring(b,d);b=d+1;if(b+i>=c.length){e=this._findText(c,c.length);break}D=c.substr(b,i);b+=i;if(c.charAt(b)!=="|"){e=this._findText(c,b);break}b++;Array.add(k,{type:E,id:F,content:D})}if(e){this._endPostBack(this._createPageRequestManagerParserError(String.format(Sys.WebForms.Res.PRM_ParserErrorDetails,e)),h,null);return null}var x=[],w=[],q=[],j=[],t=[],C=[],A=[],z=[],v=[],s=[],m,p,u,n,o,r,y,g;for(var l=0,G=k.length;l<G;l++){var a=k[l];switch(a.type){case "#":g=a;break;case "updatePanel":Array.add(x,a);break;case "hiddenField":Array.add(w,a);break;case "arrayDeclaration":Array.add(q,a);break;case "scriptBlock":Array.add(j,a);break;case "fallbackScript":j[j.length-1].fallback=a.id;case "scriptStartupBlock":Array.add(t,a);break;case "expando":Array.add(C,a);break;case "onSubmit":Array.add(A,a);break;case "asyncPostBackControlIDs":m=a;break;case "postBackControlIDs":p=a;break;case "updatePanelIDs":u=a;break;case "asyncPostBackTimeout":n=a;break;case "childUpdatePanelIDs":o=a;break;case "panelsToRefreshIDs":r=a;break;case "formAction":y=a;break;case "dataItem":Array.add(z,a);break;case "dataItemJson":Array.add(v,a);break;case "scriptDispose":Array.add(s,a);break;case "pageRedirect":if(g&&parseFloat(g.content)>=4)a.content=unescape(a.content);if(Sys.Browser.agent===Sys.Browser.InternetExplorer){var f=document.createElement("a");f.style.display="none";f.attachEvent("onclick",B);f.href=a.content;this._form.parentNode.insertBefore(f,this._form);f.click();f.detachEvent("onclick",B);this._form.parentNode.removeChild(f);function B(a){a.cancelBubble=true}}else window.location.href=a.content;return null;case "error":this._endPostBack(this._createPageRequestManagerServerError(Number.parseInvariant(a.id),a.content),h,null);return null;case "pageTitle":document.title=a.content;break;case "focus":this._controlIDToFocus=a.content;break;default:this._endPostBack(this._createPageRequestManagerParserError(String.format(Sys.WebForms.Res.PRM_UnknownToken,a.type)),h,null);return null}}return {version4:g?parseFloat(g.content)>=4:false,executor:h,updatePanelNodes:x,hiddenFieldNodes:w,arrayDeclarationNodes:q,scriptBlockNodes:j,scriptStartupNodes:t,expandoNodes:C,onSubmitNodes:A,dataItemNodes:z,dataItemJsonNodes:v,scriptDisposeNodes:s,asyncPostBackControlIDsNode:m,postBackControlIDsNode:p,updatePanelIDsNode:u,asyncPostBackTimeoutNode:n,childUpdatePanelIDsNode:o,panelsToRefreshNode:r,formActionNode:y}},_processUpdatePanelArrays:function(e,q,r,f){var d,c,b;if(e){var i=e.length,j=f?2:1;d=new Array(i/j);c=new Array(i/j);b=new Array(i/j);for(var g=0,h=0;g<i;g+=j,h++){var p,a=e[g],k=f?e[g+1]:"";p=a.charAt(0)==="t";a=a.substr(1);if(!k)k=this._uniqueIDToClientID(a);b[h]=p;d[h]=a;c[h]=k}}else{d=[];c=[];b=[]}var n=[],l=[];this._convertToClientIDs(q,n,l,f);var o=[],m=[];this._convertToClientIDs(r,o,m,f);return {updatePanelIDs:d,updatePanelClientIDs:c,updatePanelHasChildrenAsTriggers:b,asyncPostBackControlIDs:n,asyncPostBackControlClientIDs:l,postBackControlIDs:o,postBackControlClientIDs:m}},_queueScripts:function(scriptLoader,scriptBlockNodes,queueIncludes,queueBlocks){for(var i=0,l=scriptBlockNodes.length;i<l;i++){var scriptBlockType=scriptBlockNodes[i].id;switch(scriptBlockType){case "ScriptContentNoTags":if(!queueBlocks)continue;scriptLoader.queueScriptBlock(scriptBlockNodes[i].content);break;case "ScriptContentWithTags":var scriptTagAttributes;eval("scriptTagAttributes = "+scriptBlockNodes[i].content);if(scriptTagAttributes.src){if(!queueIncludes||Sys._ScriptLoader.isScriptLoaded(scriptTagAttributes.src))continue}else if(!queueBlocks)continue;scriptLoader.queueCustomScriptTag(scriptTagAttributes);break;case "ScriptPath":var script=scriptBlockNodes[i];if(!queueIncludes||Sys._ScriptLoader.isScriptLoaded(script.content))continue;scriptLoader.queueScriptReference(script.content,script.fallback)}}},_registerDisposeScript:function(a,b){if(!this._scriptDisposes[a])this._scriptDisposes[a]=[b];else Array.add(this._scriptDisposes[a],b)},_scriptIncludesLoadComplete:function(e,b){if(b.executor.get_webRequest()!==this._request)return;this._commitControls(b.updatePanelData,b.asyncPostBackTimeoutNode?b.asyncPostBackTimeoutNode.content:null);if(b.formActionNode)this._form.action=b.formActionNode.content;var a,d,c;for(a=0,d=b.updatePanelNodes.length;a<d;a++){c=b.updatePanelNodes[a];var j=document.getElementById(c.id);if(!j){this._endPostBack(Error.invalidOperation(String.format(Sys.WebForms.Res.PRM_MissingPanel,c.id)),b.executor,b);return}this._updatePanel(j,c.content)}for(a=0,d=b.scriptDisposeNodes.length;a<d;a++){c=b.scriptDisposeNodes[a];this._registerDisposeScript(c.id,c.content)}for(a=0,d=this._transientFields.length;a<d;a++){var g=document.getElementById(this._transientFields[a]);if(g){var k=g._isContained?g.parentNode:g;k.parentNode.removeChild(k)}}for(a=0,d=b.hiddenFieldNodes.length;a<d;a++){c=b.hiddenFieldNodes[a];this._createHiddenField(c.id,c.content)}if(b.scriptsFailed)throw Sys._ScriptLoader._errorScriptLoadFailed(b.scriptsFailed.src,b.scriptsFailed.multipleCallbacks);this._queueScripts(e,b.scriptBlockNodes,false,true);var i="";for(a=0,d=b.arrayDeclarationNodes.length;a<d;a++){c=b.arrayDeclarationNodes[a];i+="Sys.WebForms.PageRequestManager._addArrayElement('"+c.id+"', "+c.content+");\r\n"}var h="";for(a=0,d=b.expandoNodes.length;a<d;a++){c=b.expandoNodes[a];h+=c.id+" = "+c.content+"\r\n"}if(i.length)e.queueScriptBlock(i);if(h.length)e.queueScriptBlock(h);this._queueScripts(e,b.scriptStartupNodes,true,true);var f="";for(a=0,d=b.onSubmitNodes.length;a<d;a++){if(a===0)f="Array.add(Sys.WebForms.PageRequestManager.getInstance()._onSubmitStatements, function() {\r\n";f+=b.onSubmitNodes[a].content+"\r\n"}if(f.length){f+="\r\nreturn true;\r\n});\r\n";e.queueScriptBlock(f)}e.loadScripts(0,Function.createDelegate(this,Function.createCallback(this._scriptsLoadComplete,b)),null,null)},_scriptIncludesLoadFailed:function(d,c,b,a){a.scriptsFailed={src:c.src,multipleCallbacks:b};this._scriptIncludesLoadComplete(d,a)},_scriptsLoadComplete:function(f,c){var e=c.executor;if(window.__theFormPostData)window.__theFormPostData="";if(window.__theFormPostCollection)window.__theFormPostCollection=[];if(window.WebForm_InitCallback)window.WebForm_InitCallback();if(this._scrollPosition){if(window.scrollTo)window.scrollTo(this._scrollPosition.x,this._scrollPosition.y);this._scrollPosition=null}Sys.Application.endCreateComponents();this._pageLoaded(false,c);this._endPostBack(null,e,c);if(this._controlIDToFocus){var a,d;if(Sys.Browser.agent===Sys.Browser.InternetExplorer){var b=$get(this._controlIDToFocus);a=b;if(b&&!WebForm_CanFocus(b))a=WebForm_FindFirstFocusableChild(b);if(a&&typeof a.contentEditable!=="undefined"){d=a.contentEditable;a.contentEditable=false}else a=null}WebForm_AutoFocus(this._controlIDToFocus);if(a)a.contentEditable=d;this._controlIDToFocus=null}},_splitNodeIntoArray:function(b){var a=b.content,c=a.length?a.split(","):[];return c},_uniqueIDToClientID:function(a){return a.replace(/\$/g,"_")},_updateControls:function(d,a,c,b,e){this._commitControls(this._processUpdatePanelArrays(d,a,c,e),b)},_updatePanel:function(updatePanelElement,rendering){for(var updatePanelID in this._scriptDisposes)if(this._elementContains(updatePanelElement,document.getElementById(updatePanelID))){var disposeScripts=this._scriptDisposes[updatePanelID];for(var i=0,l=disposeScripts.length;i<l;i++)eval(disposeScripts[i]);delete this._scriptDisposes[updatePanelID]}Sys.Application.disposeElement(updatePanelElement,true);updatePanelElement.innerHTML=rendering},_validPosition:function(a){return typeof a!=="undefined"&&a!==null&&a!==0}};Sys.WebForms.PageRequestManager.getInstance=function(){var a=Sys.WebForms.PageRequestManager._instance;if(!a)a=Sys.WebForms.PageRequestManager._instance=new Sys.WebForms.PageRequestManager;return a};Sys.WebForms.PageRequestManager._addArrayElement=function(a){if(!window[a])window[a]=[];for(var b=1,c=arguments.length;b<c;b++)Array.add(window[a],arguments[b])};Sys.WebForms.PageRequestManager._initialize=function(){var a=Sys.WebForms.PageRequestManager.getInstance();a._initializeInternal.apply(a,arguments)};Sys.WebForms.PageRequestManager.registerClass("Sys.WebForms.PageRequestManager");Sys.UI._UpdateProgress=function(a){Sys.UI._UpdateProgress.initializeBase(this,[a]);this._displayAfter=500;this._dynamicLayout=true;this._associatedUpdatePanelId=null;this._beginRequestHandlerDelegate=null;this._startDelegate=null;this._endRequestHandlerDelegate=null;this._pageRequestManager=null;this._timerCookie=null};Sys.UI._UpdateProgress.prototype={get_displayAfter:function(){return this._displayAfter},set_displayAfter:function(a){this._displayAfter=a},get_dynamicLayout:function(){return this._dynamicLayout},set_dynamicLayout:function(a){this._dynamicLayout=a},get_associatedUpdatePanelId:function(){return this._associatedUpdatePanelId},set_associatedUpdatePanelId:function(a){this._associatedUpdatePanelId=a},get_role:function(){return "status"},_clearTimeout:function(){if(this._timerCookie){window.clearTimeout(this._timerCookie);this._timerCookie=null}},_getUniqueID:function(b){var a=Array.indexOf(this._pageRequestManager._updatePanelClientIDs,b);return a===-1?null:this._pageRequestManager._updatePanelIDs[a]},_handleBeginRequest:function(f,e){var b=e.get_postBackElement(),a=true,d=this._associatedUpdatePanelId;if(this._associatedUpdatePanelId){var c=e.get_updatePanelsToUpdate();if(c&&c.length)a=Array.contains(c,d)||Array.contains(c,this._getUniqueID(d));else a=false}while(!a&&b){if(b.id&&this._associatedUpdatePanelId===b.id)a=true;b=b.parentNode}if(a)this._timerCookie=window.setTimeout(this._startDelegate,this._displayAfter)},_startRequest:function(){if(this._pageRequestManager.get_isInAsyncPostBack()){var a=this.get_element();if(this._dynamicLayout)a.style.display="block";else a.style.visibility="visible";if(this.get_role()==="status")a.setAttribute("aria-hidden","false")}this._timerCookie=null},_handleEndRequest:function(){var a=this.get_element();if(this._dynamicLayout)a.style.display="none";else a.style.visibility="hidden";if(this.get_role()==="status")a.setAttribute("aria-hidden","true");this._clearTimeout()},dispose:function(){if(this._beginRequestHandlerDelegate!==null){this._pageRequestManager.remove_beginRequest(this._beginRequestHandlerDelegate);this._pageRequestManager.remove_endRequest(this._endRequestHandlerDelegate);this._beginRequestHandlerDelegate=null;this._endRequestHandlerDelegate=null}this._clearTimeout();Sys.UI._UpdateProgress.callBaseMethod(this,"dispose")},initialize:function(){Sys.UI._UpdateProgress.callBaseMethod(this,"initialize");if(this.get_role()==="status")this.get_element().setAttribute("aria-hidden","true");this._beginRequestHandlerDelegate=Function.createDelegate(this,this._handleBeginRequest);this._endRequestHandlerDelegate=Function.createDelegate(this,this._handleEndRequest);this._startDelegate=Function.createDelegate(this,this._startRequest);if(Sys.WebForms&&Sys.WebForms.PageRequestManager)this._pageRequestManager=Sys.WebForms.PageRequestManager.getInstance();if(this._pageRequestManager!==null){this._pageRequestManager.add_beginRequest(this._beginRequestHandlerDelegate);this._pageRequestManager.add_endRequest(this._endRequestHandlerDelegate)}}};Sys.UI._UpdateProgress.registerClass("Sys.UI._UpdateProgress",Sys.UI.Control);;
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
/**
* jQuery Validation Plugin 1.9.0
*
* http://bassistance.de/jquery-plugins/jquery-plugin-validation/
* http://docs.jquery.com/Plugins/Validation
*
* Copyright (c) 2006 - 2011 Jörn Zaefferer
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

(function ($) {
  // event.handle est devenu deprecated à jquery 1.9 qui est utilisé dans Altitude, mais pas sur les sites générés.
  // event.dispatch est la nouvelle fonction à utiliser.
  if (!$.event.handle) {
    $.event.handle = $.event.dispatch;
  }

  $.extend($.fn, {
    // http://docs.jquery.com/Plugins/Validation/validate
    validate: function (options) {

      // if nothing is selected, return nothing; can't chain anyway
      if (!this.length) {
        options && options.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
        return;
      }

      // check if a validator for this form was already created
      var validator = $.data(this[0], 'validator');
      if (validator) {
        return validator;
      }

      // Add novalidate tag if HTML5.
      this.attr('novalidate', 'novalidate');

      validator = new $.validator(options, this[0]);
      $.data(this[0], 'validator', validator);

      if (validator.settings.onsubmit) {

        var inputsAndButtons = this.find("input, button");

        // allow suppresing validation by adding a cancel class to the submit button
        inputsAndButtons.filter(".cancel").click(function () {
          validator.cancelSubmit = true;
        });

        // when a submitHandler is used, capture the submitting button
        if (validator.settings.submitHandler) {
          inputsAndButtons.filter(":submit").click(function () {
            validator.submitButton = this;
          });
        }

        // validate the form on submit
        this.submit(function (event) {
          if (validator.settings.debug)
          // prevent form submit to be able to see console output
            event.preventDefault();

          function handle() {
            if (validator.settings.submitHandler) {
              if (validator.submitButton) {
                // insert a hidden input as a replacement for the missing submit button
                var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
              }
              validator.settings.submitHandler.call(validator, validator.currentForm);
              if (validator.submitButton) {
                // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                hidden.remove();
              }
              return false;
            }
            return true;
          }

          // prevent submit for invalid forms or custom submit handlers
          if (validator.cancelSubmit) {
            validator.cancelSubmit = false;
            return handle();
          }
          if (validator.form()) {
            if (validator.pendingRequest) {
              validator.formSubmitted = true;
              return false;
            }
            return handle();
          } else {
            validator.focusInvalid();
            return false;
          }
        });
      }

      return validator;
    },
    // http://docs.jquery.com/Plugins/Validation/valid
    valid: function () {
      if ($(this[0]).is('form')) {
        return this.validate().form();
      } else {
        var valid = true;
        var validator = $(this[0].form).validate();
        this.each(function () {
          if (validator != null && validator.element != null) {
            valid &= validator.element(this);
          }
        });
        return valid;
      }
    },
    // attributes: space seperated list of attributes to retrieve and remove
    removeAttrs: function (attributes) {
      var result = {},
			$element = this;
      $.each(attributes.split(/\s/), function (index, value) {
        result[value] = $element.attr(value);
        $element.removeAttr(value);
      });
      return result;
    },
    // http://docs.jquery.com/Plugins/Validation/rules
    rules: function (command, argument, formSettings) {
      var element = this[0];

      if (formSettings == null || formSettings == "undefined") {
        formSettings = $.data(element.form, 'validator').settings;
      }

      if (command) {
        var settings = formSettings;
        var staticRules = settings.rules;
        var existingRules = $.validator.staticRules(element);
        switch (command) {
          case "add":
            $.extend(existingRules, $.validator.normalizeRule(argument));
            staticRules[element.name] = existingRules;
            if (argument.messages)
              settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
            break;
          case "remove":
            if (!argument) {
              delete staticRules[element.name];
              return existingRules;
            }
            var filtered = {};
            $.each(argument.split(/\s/), function (index, method) {
              filtered[method] = existingRules[method];
              delete existingRules[method];
            });
            return filtered;
        }
      }

      var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);

      // make sure required is at front
      if (data.required) {
        var param = data.required;
        delete data.required;
        data = $.extend({ required: param }, data);
      }

      return data;
    }
  });

  // Custom selectors
  $.extend($.expr[":"], {
    // http://docs.jquery.com/Plugins/Validation/blank
    blank: function (a) { return !$.trim("" + a.value); },
    // http://docs.jquery.com/Plugins/Validation/filled
    filled: function (a) { return !!$.trim("" + a.value); },
    // http://docs.jquery.com/Plugins/Validation/unchecked
    unchecked: function (a) { return !a.checked; }
  });

  // constructor for validator
  $.validator = function (options, form) {
    this.settings = $.extend(true, {}, $.validator.defaults, options);
    this.currentForm = form;
    this.init();
  };

  $.validator.format = function (source, params) {
    if (arguments.length == 1)
      return function () {
        var args = $.makeArray(arguments);
        args.unshift(source);
        return $.validator.format.apply(this, args);
      };
    if (arguments.length > 2 && params.constructor != Array) {
      params = $.makeArray(arguments).slice(1);
    }
    if (params.constructor != Array) {
      params = [params];
    }
    $.each(params, function (i, n) {
      source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
    });
    return source;
  };

  $.extend($.validator, {

    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusInvalid: true,
      errorContainer: $([]),
      errorLabelContainer: $([]),
      onsubmit: true,
      ignore: ":hidden",
      ignoreTitle: false,
      onfocusin: function (element, event) {
        this.lastActive = element;

        // hide error label and remove error class on focus if enabled
        if (this.settings.focusCleanup && !this.blockFocusCleanup) {
          this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
          this.addWrapper(this.errorsFor(element)).hide();
        }
      },
      onfocusout: function (element, event) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
          this.element(element);
        }
      },
      onkeyup: function (element, event) {
        if (element.name in this.submitted || element == this.lastElement) {
          this.element(element);
        }
      },
      onclick: function (element, event) {
        // click on selects, radiobuttons and checkboxes
        if (element.name in this.submitted)
          this.element(element);
        // or option elements, check parent select in that case
        else if (element.parentNode.name in this.submitted)
          this.element(element.parentNode);
      },
      highlight: function (element, errorClass, validClass) {
        if (element.type === 'radio') {
          this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
          $(element).addClass(errorClass).removeClass(validClass);
        }
      },
      unhighlight: function (element, errorClass, validClass) {
        if (element.type === 'radio') {
          this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
          $(element).removeClass(errorClass).addClass(validClass);
        }
      }
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
    setDefaults: function (settings) {
      $.extend($.validator.defaults, settings);
    },

    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      accept: "Please enter a value with a valid extension.",
      maxlength: $.validator.format("Please enter no more than {0} characters."),
      minlength: $.validator.format("Please enter at least {0} characters."),
      rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
      range: $.validator.format("Please enter a value between {0} and {1}."),
      max: $.validator.format("Please enter a value less than or equal to {0}."),
      min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },

    autoCreateRanges: false,

    prototype: {

      init: function () {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();

        var groups = (this.groups = {});
        $.each(this.settings.groups, function (key, value) {
          $.each(value.split(/\s/), function (index, name) {
            groups[name] = key;
          });
        });
        var rules = this.settings.rules;
        $.each(rules, function (key, value) {
          rules[key] = $.validator.normalizeRule(value);
        });

        function delegate(event) {
          var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
          validator.settings[eventType] && validator.settings[eventType].call(validator, this[0], event);
        }
        $(this.currentForm)
			       .validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, " +
						"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
						"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
						"[type='week'], [type='time'], [type='datetime-local'], " +
						"[type='range'], [type='color'] ",
						"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

        if (this.settings.invalidHandler)
          $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/form
      form: function () {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid())
          $(this.currentForm).triggerHandler("invalid-form", [this]);
        this.showErrors();
        return this.valid();
      },

      checkForm: function () {
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
          this.check(elements[i]);
        }
        return this.valid();
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/element
      element: function (element) {
        element = this.validationTargetFor(this.clean(element));
        this.lastElement = element;
        this.prepareElement(element);
        this.currentElements = $(element);
        var result = this.check(element);
        if (result) {
          delete this.invalid[element.name];
        } else {
          this.invalid[element.name] = true;
        }
        if (!this.numberOfInvalids()) {
          // Hide error containers on last error
          this.toHide = this.toHide.add(this.containers);
        }
        this.showErrors();
        return result;
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
      showErrors: function (errors) {
        if (errors) {
          // add items to error list and map
          $.extend(this.errorMap, errors);
          this.errorList = [];
          for (var name in errors) {
            this.errorList.push({
              message: errors[name],
              element: this.findByName(name)[0]
            });
          }
          // remove items from success list
          this.successList = $.grep(this.successList, function (element) {
            return !(element.name in errors);
          });
        }
        this.settings.showErrors
				? this.settings.showErrors.call(this, this.errorMap, this.errorList)
				: this.defaultShowErrors();
      },

      // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
      resetForm: function () {
        if ($.fn.resetForm)
          $(this.currentForm).resetForm();
        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        this.elements().removeClass(this.settings.errorClass);
      },

      numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      },

      objectLength: function (obj) {
        var count = 0;
        for (var i in obj)
          count++;
        return count;
      },

      hideErrors: function () {
        this.addWrapper(this.toHide).hide();
      },

      valid: function () {
        return this.size() == 0;
      },

      size: function () {
        return this.errorList.length;
      },

      focusInvalid: function () {
        if (this.settings.focusInvalid) {
          try {
            $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
            // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
          } catch (e) {
            // ignore IE throwing errors when focusing hidden elements
          }
        }
      },

      findLastActive: function () {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
          return n.element.name == lastActive.name;
        }).length == 1 && lastActive;
      },

      elements: function () {
        var validator = this,
				rulesCache = {};

        // select all valid inputs inside the form (no submit or reset buttons)
        return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not(this.settings.ignore)
			.filter(function () {
			  !this.name && validator.settings.debug && window.console && console.error("%o has no name assigned", this);

			  // select only the first element for each name, and only those with rules specified
			  if (this.name in rulesCache || !validator.objectLength($(this).rules()))
			    return false;

			  rulesCache[this.name] = true;
			  return true;
			});
      },

      clean: function (selector) {
        return $(selector)[0];
      },

      errors: function () {
        return $(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext);
      },

      reset: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
        this.currentElements = $([]);
      },

      prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
      },

      prepareElement: function (element) {
        this.reset();
        this.toHide = this.errorsFor(element);
      },

      check: function (element) {
        element = this.validationTargetFor(this.clean(element));

        var rules = $(element).rules();
        var dependencyMismatch = false;
        for (var method in rules) {
          var rule = { method: method, parameters: rules[method] };
          try {
            var result = $.validator.methods[method].call(this, element.value.replace(/\r/g, ""), element, rule.parameters);

            // if a method indicates that the field is optional and therefore valid,
            // don't mark it as valid when there are no other rules
            if (result == "dependency-mismatch") {
              dependencyMismatch = true;
              continue;
            }
            dependencyMismatch = false;

            if (result == "pending") {
              this.toHide = this.toHide.not(this.errorsFor(element));
              return;
            }

            if (!result) {
              this.formatAndAdd(element, rule);
              return false;
            }
          } catch (e) {
            this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method", e);
            throw e;
          }
        }
        if (dependencyMismatch)
          return;
        if (this.objectLength(rules))
          this.successList.push(element);
        return true;
      },

      // return the custom message for the given element and validation method
      // specified in the element's "messages" metadata
      customMetaMessage: function (element, method) {
        if (!$.metadata)
          return;

        var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();

        return meta && meta.messages && meta.messages[method];
      },

      // return the custom message for the given element name and validation method
      customMessage: function (name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor == String
				? m
				: m[method]);
      },

      // return the first defined argument, allowing empty strings
      findDefined: function () {
        for (var i = 0; i < arguments.length; i++) {
          if (arguments[i] !== undefined)
            return arguments[i];
        }
        return undefined;
      },

      defaultMessage: function (element, method) {
        return this.findDefined(
				this.customMessage(element.name, method),
				this.customMetaMessage(element, method),
        // title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
      },

      formatAndAdd: function (element, rule) {
        var message = this.defaultMessage(element, rule.method),
				theregex = /\$?\{(\d+)\}/g;
        if (typeof message == "function") {
          message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
          message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
        }
        this.errorList.push({
          message: message,
          element: element
        });

        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
      },

      addWrapper: function (toToggle) {
        if (this.settings.wrapper)
          toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        return toToggle;
      },

      defaultShowErrors: function () {
        for (var i = 0; this.errorList[i]; i++) {
          var error = this.errorList[i];
          this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
          this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
          this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
          for (var i = 0; this.successList[i]; i++) {
            this.showLabel(this.successList[i]);
          }
        }
        if (this.settings.unhighlight) {
          for (var i = 0, elements = this.validElements(); elements[i]; i++) {
            this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
          }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
      },

      validElements: function () {
        return this.currentElements.not(this.invalidElements());
      },

      invalidElements: function () {
        return $(this.errorList).map(function () {
          return this.element;
        });
      },

      showLabel: function (element, message) {
        var label = this.errorsFor(element);
        if (label.length) {
          // refresh error/success class
          label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);

          // check if we have a generated label, replace the message then
          label.attr("generated") && label.html(message);
        } else {
          // create label
          label = $("<" + this.settings.errorElement + "/>")
					.attr({ "for": this.idOrName(element), generated: true })
					.addClass(this.settings.errorClass)
					.html(message || "");
          if (this.settings.wrapper) {
            // make sure the element is visible, even in IE
            // actually showing the wrapped element is handled elsewhere
            label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
          }
          if (!this.labelContainer.append(label).length)
            this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element))
						: label.insertAfter(element);
        }
        if (!message && this.settings.success) {
          label.text("");
          typeof this.settings.success == "string"
					? label.addClass(this.settings.success)
					: this.settings.success(label);
        }
        this.toShow = this.toShow.add(label);
      },

      errorsFor: function (element) {
        var name = this.idOrName(element);
        return this.errors().filter(function () {
          return $(this).attr('for') == name;
        });
      },

      idOrName: function (element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
      },

      validationTargetFor: function (element) {
        // if radio/checkbox, validate first element in group instead
        if (this.checkable(element)) {
          // Note(sjoyal) : Modification du plugin à contre-coeur pour activer la validation des checkbox caché et ainsi permettre le remplacement de ceux-ci par des images, ce qui est un feature du control Altitude3
          // Si jamais vous lisez ceci et qu'un site à des erreurs car il valides des checkbox caché et qu'il ne le devrait pas c'est qu'il manque la partie ".not(this.settings.ignore)"
          element = this.findByName(element.name)[0];
        }
        return element;
      },

      checkable: function (element) {
        return /radio|checkbox/i.test(element.type);
      },

      findByName: function (name) {
        // select by name and filter by form for performance over form.find("[name=...]")
        var form = this.currentForm;
        return $(document.getElementsByName(name)).map(function (index, element) {
          return element.form == form && element.name == name && element || null;
        });
      },

      getLength: function (value, element) {
        switch (element.nodeName.toLowerCase()) {
          case 'select':
            return $("option:selected", element).length;
          case 'input':
            if (this.checkable(element))
              return this.findByName(element.name).filter(':checked').length;
        }
        return value.length;
      },

      depend: function (param, element) {
        return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
      },

      dependTypes: {
        "boolean": function (param, element) {
          return param;
        },
        "string": function (param, element) {
          return !!$(param, element.form).length;
        },
        "function": function (param, element) {
          return param(element);
        }
      },

      optional: function (element) {
        return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
      },

      startRequest: function (element) {
        if (!this.pending[element.name]) {
          this.pendingRequest++;
          this.pending[element.name] = true;
        }
      },

      stopRequest: function (element, valid) {
        this.pendingRequest--;
        // sometimes synchronization fails, make sure pendingRequest is never < 0
        if (this.pendingRequest < 0)
          this.pendingRequest = 0;
        delete this.pending[element.name];
        if (valid && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
          $(this.currentForm).submit();
          this.formSubmitted = false;
        } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
          $(this.currentForm).triggerHandler("invalid-form", [this]);
          this.formSubmitted = false;
        }
      },

      previousValue: function (element) {
        return $.data(element, "previousValue") || $.data(element, "previousValue", {
          old: null,
          valid: true,
          message: this.defaultMessage(element, "remote")
        });
      }

    },

    classRuleSettings: {
      required: { required: true },
      email: { email: true },
      url: { url: true },
      date: { date: true },
      dateISO: { dateISO: true },
      dateDE: { dateDE: true },
      number: { number: true },
      numberDE: { numberDE: true },
      digits: { digits: true },
      creditcard: { creditcard: true }
    },

    addClassRules: function (className, rules) {
      className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
    },

    classRules: function (element) {
      var rules = {};
      var classes = $(element).attr('class');
      classes && $.each(classes.split(' '), function () {
        if (this in $.validator.classRuleSettings) {
          $.extend(rules, $.validator.classRuleSettings[this]);
        }
      });
      return rules;
    },

    attributeRules: function (element) {
      var rules = {};
      var $element = $(element);

      for (var method in $.validator.methods) {
        var value;
        // If .prop exists (jQuery >= 1.6), use it to get true/false for required
        if (method === 'required' && typeof $.fn.prop === 'function') {
          value = $element.prop(method);
        } else {
          value = $element.attr(method);
        }
        if (value) {
          rules[method] = value;
        } else if ($element[0].getAttribute("type") === method) {
          rules[method] = true;
        }
      }

      // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
      if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
        delete rules.maxlength;
      }

      return rules;
    },

    metadataRules: function (element) {
      if (!$.metadata) return {};

      var meta = $.data(element.form, 'validator').settings.meta;
      return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
    },

    staticRules: function (element) {
      var rules = {};
      var validator = $.data(element.form, 'validator');
      if (validator.settings.rules) {
        rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
      }
      return rules;
    },

    normalizeRules: function (rules, element) {
      // handle dependency check
      $.each(rules, function (prop, val) {
        // ignore rule when param is explicitly false, eg. required:false
        if (val === false) {
          delete rules[prop];
          return;
        }
        if (val.param || val.depends) {
          var keepRule = true;
          switch (typeof val.depends) {
            case "string":
              keepRule = !!$(val.depends, element.form).length;
              break;
            case "function":
              keepRule = val.depends.call(element, element);
              break;
          }
          if (keepRule) {
            rules[prop] = val.param !== undefined ? val.param : true;
          } else {
            delete rules[prop];
          }
        }
      });

      // evaluate parameters
      $.each(rules, function (rule, parameter) {
        rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
      });

      // clean number parameters
      $.each(['minlength', 'maxlength', 'min', 'max'], function () {
        if (rules[this]) {
          rules[this] = Number(rules[this]);
        }
      });
      $.each(['rangelength', 'range'], function () {
        if (rules[this]) {
          rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
        }
      });

      if ($.validator.autoCreateRanges) {
        // auto-create ranges
        if (rules.min && rules.max) {
          rules.range = [rules.min, rules.max];
          delete rules.min;
          delete rules.max;
        }
        if (rules.minlength && rules.maxlength) {
          rules.rangelength = [rules.minlength, rules.maxlength];
          delete rules.minlength;
          delete rules.maxlength;
        }
      }

      // To support custom messages in metadata ignore rule methods titled "messages"
      if (rules.messages) {
        delete rules.messages;
      }

      return rules;
    },

    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function (data) {
      if (typeof data == "string") {
        var transformed = {};
        $.each(data.split(/\s/), function () {
          transformed[this] = true;
        });
        data = transformed;
      }
      return data;
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
    addMethod: function (name, method, message) {
      $.validator.methods[name] = method;
      $.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
      if (method.length < 3) {
        $.validator.addClassRules(name, $.validator.normalizeRule(name));
      }
    },

    methods: {

      // http://docs.jquery.com/Plugins/Validation/Methods/required
      required: function (value, element, param) {
        // check if dependency is met
        if (!this.depend(param, element))
          return "dependency-mismatch";
        switch (element.nodeName.toLowerCase()) {
          case 'select':
            // could be an array for select-multiple or a string, both are fine this way
            var val = $(element).val();
            return val && val.length > 0;
          case 'input':
            if (this.checkable(element))
              return this.getLength(value, element) > 0;
          default:
            return $.trim(value).length > 0;
        }
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/remote
      remote: function (value, element, param) {
        if (this.optional(element))
          return "dependency-mismatch";

        var previous = this.previousValue(element);
        if (!this.settings.messages[element.name])
          this.settings.messages[element.name] = {};
        previous.originalMessage = this.settings.messages[element.name].remote;
        this.settings.messages[element.name].remote = previous.message;

        param = typeof param == "string" && { url: param} || param;

        if (this.pending[element.name]) {
          return "pending";
        }
        if (previous.old === value) {
          return previous.valid;
        }

        previous.old = value;
        var validator = this;
        this.startRequest(element);
        var data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {
          url: param,
          mode: "abort",
          port: "validate" + element.name,
          dataType: "json",
          data: data,
          success: function (response) {
            validator.settings.messages[element.name].remote = previous.originalMessage;
            var valid = response === true;
            if (valid) {
              var submitted = validator.formSubmitted;
              validator.prepareElement(element);
              validator.formSubmitted = submitted;
              validator.successList.push(element);
              validator.showErrors();
            } else {
              var errors = {};
              var message = response || validator.defaultMessage(element, "remote");
              errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
              validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
          }
        }, param));
        return "pending";
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/minlength
      minlength: function (value, element, param) {
        return this.optional(element) || this.getLength($.trim(value), element) >= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
      maxlength: function (value, element, param) {
        return this.optional(element) || this.getLength($.trim(value), element) <= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
      rangelength: function (value, element, param) {
        var length = this.getLength($.trim(value), element);
        return this.optional(element) || (length >= param[0] && length <= param[1]);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/min
      min: function (value, element, param) {
        return this.optional(element) || value >= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/max
      max: function (value, element, param) {
        return this.optional(element) || value <= param;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/range
      range: function (value, element, param) {
        return this.optional(element) || (value >= param[0] && value <= param[1]);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/email
      email: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
        return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/url
      url: function (value, element) {
        // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
        return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/date
      date: function (value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
      dateISO: function (value, element) {
        return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/number
      number: function (value, element) {
        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/digits
      digits: function (value, element) {
        return this.optional(element) || /^\d+$/.test(value);
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
      // based on http://en.wikipedia.org/wiki/Luhn
      creditcard: function (value, element) {
        if (this.optional(element))
          return "dependency-mismatch";
        // accept only spaces, digits and dashes
        if (/[^0-9 -]+/.test(value))
          return false;
        var nCheck = 0,
				nDigit = 0,
				bEven = false;

        value = value.replace(/\D/g, "");

        for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n);
          var nDigit = parseInt(cDigit, 10);
          if (bEven) {
            if ((nDigit *= 2) > 9)
              nDigit -= 9;
          }
          nCheck += nDigit;
          bEven = !bEven;
        }

        return (nCheck % 10) == 0;
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/accept
      accept: function (value, element, param) {
        param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
        return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
      },

      // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
      equalTo: function (value, element, param) {
        // bind to the blur event of the target in order to revalidate whenever the target field is updated
        // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
        var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          $(element).valid();
        });
        return value == target.val();
      }

    }

  });

  // deprecated, use $.validator.format instead
  $.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
; (function ($) {
  var pendingRequests = {};
  // Use a prefilter if available (1.5+)
  if ($.ajaxPrefilter) {
    $.ajaxPrefilter(function (settings, _, xhr) {
      var port = settings.port;
      if (settings.mode == "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        pendingRequests[port] = xhr;
      }
    });
  } else {
    // Proxy ajax
    var ajax = $.ajax;
    $.ajax = function (settings) {
      var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
				port = ("port" in settings ? settings : $.ajaxSettings).port;
      if (mode == "abort") {
        if (pendingRequests[port]) {
          pendingRequests[port].abort();
        }
        return (pendingRequests[port] = ajax.apply(this, arguments));
      }
      return ajax.apply(this, arguments);
    };
  }
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
; (function ($) {
  // only implement if not provided by jQuery core (since 1.4)
  // TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
  if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
    $.each({
      focus: 'focusin',
      blur: 'focusout'
    }, function (original, fix) {
      $.event.special[fix] = {
        setup: function () {
          this.addEventListener(original, handler, true);
        },
        teardown: function () {
          this.removeEventListener(original, handler, true);
        },
        handler: function (e) {
          arguments[0] = $.event.fix(e);
          arguments[0].type = fix;
          return $.event.handle.apply(this, arguments);
        }
      };
      function handler(e) {
        e = $.event.fix(e);
        e.type = fix;
        return $.event.handle.call(this, e);
      }
    });
  };
  $.extend($.fn, {
    validateDelegate: function (delegate, type, handler) {
      return this.bind(type, function (event) {
        var target = $(event.target);
        if (target.is(delegate)) {
          return handler.apply(target, arguments);
        }
      });
    }
  });
})(jQuery);
;
URLON = {
	stringify: function (input) {
		function encodeString (str) {
			return encodeURI(str.replace(/([=:&@_;\/])/g, '/$1'));
		}

		function stringify (input) {
			// Number or Boolean or Null
			if (typeof input === 'number' || input === true || input === false || input === null) {
				return ':' + input;
			}
			// Array
			if (input instanceof Array) {
				var res = [];
				for (var i = 0; i < input.length; ++i) {
					res.push(stringify(input[i]));
				}
				return '@' + res.join('&') + ';';
			}
			// Object
			if (typeof input === 'object') {
				var res = [];
				for (var key in input) {
					res.push(encodeString(key) + stringify(input[key]));
				}
				return '_' + res.join('&') + ';';
			}
			// String or undefined			
			return '=' + encodeString((input !== null ? (input !== undefined ? input : "undefined") : "null").toString());
		}

		return stringify(input).replace(/;+$/g, '');
	},

	parse: function (str) {
		var pos = 0;
		str = decodeURI(str);

		function read() {
			var token = '';
			for (; pos !== str.length; ++pos) {
				if (str.charAt(pos) === '/') {
					pos += 1;
					if (pos === str.length) {
						token += ';';
						break;
					}
				} else if (str.charAt(pos).match(/[=:&@_;]/)) {
					break;
				}
				token += str.charAt(pos);
			}
			return token;
		}

		function parse() {
			var type = str.charAt(pos++);

			// String
			if (type === '=') {
				return read();
			}
			// Number or Boolean
			if (type === ':') {
				var value = read();
				if (value === 'true') {
					return true;
				}
				if (value === 'false') {
					return false;
				}
				value = parseFloat(value);
				return isNaN(value) ? null : value;
			}
			// Array
			if (type === '@') {
				var res = [];
				loop: {
					if (pos >= str.length || str.charAt(pos) === ';') {
						break loop;
					}
					while (1) {
						res.push(parse());
						if (pos >= str.length || str.charAt(pos) === ';') {
							break loop;
						}
						pos += 1;
					}
				}
				pos += 1;
				return res;
			}
			// Object
			if (type === '_') {
				var res = {};
				loop: {
					if (pos >= str.length || str.charAt(pos) === ';') {
						break loop;
					}
					while (1) {
						var name = read();
						res[name] = parse();
						if (pos >= str.length || str.charAt(pos) === ';') {
							break loop;
						}
						pos += 1;
					}
				}
				pos += 1;
				return res;
			}
			// Error
			throw 'Unexpected char ' + type;
		}

		return parse();
	}
};

if (typeof exports !== 'undefined') {
	exports.stringify = URLON.stringify;
	exports.parse = URLON.parse;
}
;
/*! jQuery UI - v1.12.1 - 2016-11-08
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){t(jQuery)})(function(t){function e(t){for(var e=t.css("visibility");"inherit"===e;)t=t.parent(),e=t.css("visibility");return"hidden"!==e}function i(t){for(var e,i;t.length&&t[0]!==document;){if(e=t.css("position"),("absolute"===e||"relative"===e||"fixed"===e)&&(i=parseInt(t.css("zIndex"),10),!isNaN(i)&&0!==i))return i;t=t.parent()}return 0}function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.regional.en=t.extend(!0,{},this.regional[""]),this.regional["en-US"]=t.extend(!0,{},this.regional.en),this.dpDiv=n(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout",i,function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).on("mouseover",i,o)}function o(){t.datepicker._isDisabledDatepicker(p.inline?p.dpDiv.parent()[0]:p.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))}function a(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}function r(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.ui=t.ui||{},t.ui.version="1.12.1";var l=0,h=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,s,n=h.call(arguments,1),o=0,a=n.length;a>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(e[i]=t.isPlainObject(s)?t.isPlainObject(e[i])?t.widget.extend({},e[i],s):t.widget.extend({},s):s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var o="string"==typeof n,a=h.call(arguments,1),r=this;return o?this.length||"instance"!==n?this.each(function(){var i,o=t.data(this,s);return"instance"===n?(r=o,!1):o?t.isFunction(o[n])&&"_"!==n.charAt(0)?(i=o[n].apply(o,a),i!==o&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+n+"'")}):r=void 0:(a.length&&(n=t.widget.extend.apply(null,[n].concat(a))),this.each(function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))})),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?i.ownerDocument:i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var n,o,a,r,l,h=i.nodeName.toLowerCase();return"area"===h?(n=i.parentNode,o=n.name,i.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap='#"+o+"']"),a.length>0&&a.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(h)?(r=!i.disabled,r&&(l=t(i).closest("fieldset")[0],l&&(r=!l.disabled))):r="a"===h?i.href||s:s,r&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this);setTimeout(function(){var i=e.data("ui-form-reset-instances");t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[];t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances");e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,o){return t.each(n,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),o&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),a={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?a["inner"+i].call(this):this.each(function(){t(this).css(o,s(this,e)+"px")})},t.fn["outer"+i]=function(e,n){return"number"!=typeof e?a["outer"+i].call(this,e):this.each(function(){t(this).css(o,s(this,e,!0,n)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,n,o;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),o=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",n=n.add(o.find(i).addBack(i))),this.pushStack(n))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,n=e?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var e=t(this);return s&&"static"===e.css("position")?!1:n.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var c=!1;t(document).on("mouseup",function(){c=!1}),t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!c){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,n="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),c=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,c=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;o.length>n;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(this._blurActiveElement(e),this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target);s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),n=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options,o=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,t(o).width()-this.helperProportions.width-this.margins.left,(t(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(t,e){e||(e=this.position);var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,n,o,a=this.options,r=this._isRootNode(this.scrollParent[0]),l=t.pageX,h=t.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(l=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(h=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(l=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(h=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,h=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,l=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o),"y"===a.axis&&(l=this.originalPageX),"x"===a.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var n=t.extend({},i,{item:s.element});s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,n))})},stop:function(e,i,s){var n=t.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,n))})},drag:function(e,i,s){t.each(s.sortables,function(){var n=!1,o=this;o.positionAbs=s.positionAbs,o.helperProportions=s.helperProportions,o.offset.click=s.offset.click,o._intersectsWith(o.containerCache)&&(n=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==o&&this._intersectsWith(this.containerCache)&&t.contains(o.element[0],this.element[0])&&(n=!1),n})),n?(o.isOver||(o.isOver=1,s._parent=i.helper.parent(),o.currentItem=i.helper.appendTo(o.element).data("ui-sortable-item",!0),o.options._helper=o.options.helper,o.options.helper=function(){return i.helper[0]},e.target=o.currentItem[0],o._mouseCapture(e,!0),o._mouseStart(e,!0,!0),o.offset.click.top=s.offset.click.top,o.offset.click.left=s.offset.click.left,o.offset.parent.left-=s.offset.parent.left-o.offset.parent.left,o.offset.parent.top-=s.offset.parent.top-o.offset.parent.top,s._trigger("toSortable",e),s.dropped=o.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,o.fromOutside=s),o.currentItem&&(o._mouseDrag(e),i.position=o.position)):o.isOver&&(o.isOver=0,o.cancelHelperRemoval=!0,o.options._revert=o.options.revert,o.options.revert=!1,o._trigger("out",e,o._uiHash(o)),o._mouseStop(e,!0),o.options.revert=o.options._revert,o.options.helper=o.options._helper,o.placeholder&&o.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var n=t("body"),o=s.options;n.css("cursor")&&(o._cursor=n.css("cursor")),n.css("cursor",o.cursor)},stop:function(e,i,s){var n=s.options;n._cursor&&t("body").css("cursor",n._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("opacity")&&(o._opacity=n.css("opacity")),n.css("opacity",o.opacity)},stop:function(e,i,s){var n=s.options;n._opacity&&t(i.helper).css("opacity",n._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var n=s.options,o=!1,a=s.scrollParentNotHidden[0],r=s.document[0];a!==r&&"HTML"!==a.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+a.offsetHeight-e.pageY<n.scrollSensitivity?a.scrollTop=o=a.scrollTop+n.scrollSpeed:e.pageY-s.overflowOffset.top<n.scrollSensitivity&&(a.scrollTop=o=a.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+a.offsetWidth-e.pageX<n.scrollSensitivity?a.scrollLeft=o=a.scrollLeft+n.scrollSpeed:e.pageX-s.overflowOffset.left<n.scrollSensitivity&&(a.scrollLeft=o=a.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(e.pageY-t(r).scrollTop()<n.scrollSensitivity?o=t(r).scrollTop(t(r).scrollTop()-n.scrollSpeed):t(window).height()-(e.pageY-t(r).scrollTop())<n.scrollSensitivity&&(o=t(r).scrollTop(t(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(e.pageX-t(r).scrollLeft()<n.scrollSensitivity?o=t(r).scrollLeft(t(r).scrollLeft()-n.scrollSpeed):t(window).width()-(e.pageX-t(r).scrollLeft())<n.scrollSensitivity&&(o=t(r).scrollLeft(t(r).scrollLeft()+n.scrollSpeed)))),o!==!1&&t.ui.ddmanager&&!n.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var n=s.options;s.snapElements=[],t(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var e=t(this),i=e.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var n,o,a,r,l,h,c,u,d,p,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height;for(d=s.snapElements.length-1;d>=0;d--)l=s.snapElements[d].left-s.margins.left,h=l+s.snapElements[d].width,c=s.snapElements[d].top-s.margins.top,u=c+s.snapElements[d].height,l-g>_||m>h+g||c-g>b||v>u+g||!t.contains(s.snapElements[d].item.ownerDocument,s.snapElements[d].item)?(s.snapElements[d].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(n=g>=Math.abs(c-b),o=g>=Math.abs(u-v),a=g>=Math.abs(l-_),r=g>=Math.abs(h-m),n&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left)),p=n||o||a||r,"outer"!==f.snapMode&&(n=g>=Math.abs(c-v),o=g>=Math.abs(u-b),a=g>=Math.abs(l-m),r=g>=Math.abs(h-_),n&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),o&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left)),!s.snapElements[d].snapping&&(n||o||a||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[d].item})),s.snapElements[d].snapping=n||o||a||r||p)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var n,o=s.options,a=t.makeArray(t(o.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});a.length&&(n=parseInt(t(a[0]).css("zIndex"),10)||0,t(a).each(function(e){t(this).css("zIndex",n+e)}),this.css("zIndex",n+a.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var n=t(i.helper),o=s.options;n.css("zIndex")&&(o._zIndex=n.css("zIndex")),n.css("zIndex",o.zIndex)},stop:function(e,i,s){var n=s.options;n._zIndex&&t(i.helper).css("zIndex",n._zIndex)}}),t.ui.draggable,t.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],void 0):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this._addClass("ui-droppable")},_addToManager:function(e){t.ui.ddmanager.droppables[e]=t.ui.ddmanager.droppables[e]||[],t.ui.ddmanager.droppables[e].push(this)},_splice:function(t){for(var e=0;t.length>e;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var e=t.ui.ddmanager.droppables[this.options.scope];this._splice(e)},_setOption:function(e,i){if("accept"===e)this.accept=t.isFunction(i)?i:function(t){return t.is(i)};else if("scope"===e){var s=t.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(e,i)},_activate:function(e){var i=t.ui.ddmanager.current;this._addActiveClass(),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this._removeActiveClass(),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._addHoverClass(),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeHoverClass(),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=t(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&u(s,t.extend(i,{offset:i.element.offset()}),i.options.tolerance,e)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}});var u=t.ui.intersect=function(){function t(t,e,i){return t>=e&&e+i>t}return function(e,i,s,n){if(!i.offset)return!1;var o=(e.positionAbs||e.position.absolute).left+e.margins.left,a=(e.positionAbs||e.position.absolute).top+e.margins.top,r=o+e.helperProportions.width,l=a+e.helperProportions.height,h=i.offset.left,c=i.offset.top,u=h+i.proportions().width,d=c+i.proportions().height;switch(s){case"fit":return o>=h&&u>=r&&a>=c&&d>=l;case"intersect":return o+e.helperProportions.width/2>h&&u>r-e.helperProportions.width/2&&a+e.helperProportions.height/2>c&&d>l-e.helperProportions.height/2;case"pointer":return t(n.pageY,c,i.proportions().height)&&t(n.pageX,h,i.proportions().width);case"touch":return(a>=c&&d>=a||l>=c&&d>=l||c>a&&l>d)&&(o>=h&&u>=o||r>=h&&u>=r||h>o&&r>u);default:return!1}}}();t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&u(e,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").on("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=u(e,this,this.options.tolerance,i),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t(this).droppable("instance").options.scope===n}),o.length&&(s=t(o[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").off("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}},t.uiBackCompat!==!1&&t.widget("ui.droppable",t.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}}),t.ui.droppable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)},_create:function(){var e,i=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;default:}},_setupHandles:function(){var e,i,s,n,o,a=this.options,r=this;if(this.handles=a.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0;s.length>i;i++)e=t.trim(s[i]),n="ui-resizable-"+e,o=t("<div>"),this._addClass(o,"ui-resizable-handle "+n),o.css({zIndex:a.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(o);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:r._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){r.resizing||(this.className&&(o=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=o&&o[1]?o[1]:"se")}),a.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(e){var i,s,n,o=this.options,a=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),o.containment&&(i+=t(o.containment).scrollLeft()||0,s+=t(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===n?this.axis+"-resize":n),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,n=this.originalMousePosition,o=this.axis,a=e.pageX-n.left||0,r=e.pageY-n.top||0,l=this._change[o];return this._updatePrevProperties(),l?(i=l.apply(this,[e,a,r]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,l,h=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,l=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,h.animate||this.element.css(t.extend(a,{top:l,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!h.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,n,o,a=this.options;o={minWidth:this._isNumber(a.minWidth)?a.minWidth:0,maxWidth:this._isNumber(a.maxWidth)?a.maxWidth:1/0,minHeight:this._isNumber(a.minHeight)?a.minHeight:0,maxHeight:this._isNumber(a.maxHeight)?a.maxHeight:1/0},(this._aspectRatio||t)&&(e=o.minHeight*this.aspectRatio,s=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,n=o.maxWidth/this.aspectRatio,e>o.minWidth&&(o.minWidth=e),s>o.minHeight&&(o.minHeight=s),o.maxWidth>i&&(o.maxWidth=i),o.maxHeight>n&&(o.maxHeight=n)),this._vBoundaries=o},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&c&&(t.top=l-e.minHeight),n&&c&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];4>e;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;this._proportionallyResizeElements.length>e;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,l={width:i.size.width-r,height:i.size.height-a},h=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(l,c&&h?{top:c,left:h}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,n,o,a,r,l=t(this).resizable("instance"),h=l.options,c=l.element,u=h.containment,d=u instanceof t?u.get(0):/parent/.test(u)?c.parent().get(0):u;d&&(l.containerElement=t(d),/document/.test(u)||u===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(d),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=l._num(e.css("padding"+s))}),l.containerOffset=e.offset(),l.containerPosition=e.position(),l.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=l.containerOffset,n=l.containerSize.height,o=l.containerSize.width,a=l._hasScroll(d,"left")?d.scrollWidth:o,r=l._hasScroll(d)?d.scrollHeight:n,l.parentData={element:d,left:s.left,top:s.top,width:a,height:r}))},resize:function(e){var i,s,n,o,a=t(this).resizable("instance"),r=a.options,l=a.containerOffset,h=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement,p=!0;d[0]!==document&&/static/.test(d.css("position"))&&(u=l),h.left<(a._helper?l.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-l.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio,p=!1),a.position.left=r.helper?l.left:0),h.top<(a._helper?l.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-l.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio,p=!1),a.position.top=a._helper?l.top:0),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o?(a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top):(a.offset.left=a.element.offset().left,a.offset.top=a.element.offset().top),i=Math.abs(a.sizeDiff.width+(a._helper?a.offset.left-u.left:a.offset.left-l.left)),s=Math.abs(a.sizeDiff.height+(a._helper?a.offset.top-u.top:a.offset.top-l.top)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio,p=!1)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio,p=!1)),p||(a.position.left=a.prevPosition.left,a.position.top=a.prevPosition.top,a.size.width=a.prevSize.width,a.size.height=a.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),l=a.outerWidth()-e.sizeDiff.width,h=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:l,height:h})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options;t(i.alsoResize).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0};
t(n.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),n={},o=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(o,function(t,e){var i=(s[e]||0)+(r[e]||0);i&&i>=0&&(n[e]=i||null)}),e.css(n)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,n=i.size,o=i.originalSize,a=i.originalPosition,r=i.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,h=l[0]||1,c=l[1]||1,u=Math.round((n.width-o.width)/h)*h,d=Math.round((n.height-o.height)/c)*c,p=o.width+u,f=o.height+d,g=s.maxWidth&&p>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>p,v=s.minHeight&&s.minHeight>f;s.grid=l,_&&(p+=h),v&&(f+=c),g&&(p-=h),m&&(f-=c),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=a.top-d):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=a.left-u):((0>=f-c||0>=p-h)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=a.top-d):(f=c-e.height,i.size.height=f,i.position.top=a.top+o.height-f),p-h>0?(i.size.width=p,i.position.left=a.left-u):(p=h-e.width,i.size.width=p,i.position.left=a.left+o.width-p))}}),t.ui.resizable,t.widget("ui.selectable",t.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e=this;this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e.elementPos=t(e.element[0]).offset(),e.selectees=t(e.options.filter,e.element[0]),e._addClass(e.selectees,"ui-selectee"),e.selectees.each(function(){var i=t(this),s=i.offset(),n={left:s.left-e.elementPos.left,top:s.top-e.elementPos.top};t.data(this,"selectable-item",{element:this,$element:i,left:n.left,top:n.top,right:n.left+i.outerWidth(),bottom:n.top+i.outerHeight(),startselected:!1,selected:i.hasClass("ui-selected"),selecting:i.hasClass("ui-selecting"),unselecting:i.hasClass("ui-unselecting")})})},this.refresh(),this._mouseInit(),this.helper=t("<div>"),this._addClass(this.helper,"ui-selectable-helper")},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.elementPos=t(this.element[0]).offset(),this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(i._removeClass(s.$element,"ui-selected"),s.selected=!1,i._addClass(s.$element,"ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),i._removeClass(n.$element,s?"ui-unselecting":"ui-selected")._addClass(n.$element,s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,l=e.pageY;return o>r&&(i=r,r=o,o=i),a>l&&(i=l,l=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:l-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),h=!1,c={};i&&i.element!==s.element[0]&&(c.left=i.left+s.elementPos.left,c.right=i.right+s.elementPos.left,c.top=i.top+s.elementPos.top,c.bottom=i.bottom+s.elementPos.top,"touch"===n.tolerance?h=!(c.left>r||o>c.right||c.top>l||a>c.bottom):"fit"===n.tolerance&&(h=c.left>o&&r>c.right&&c.top>a&&l>c.bottom),h?(i.selected&&(s._removeClass(i.$element,"ui-selected"),i.selected=!1),i.unselecting&&(s._removeClass(i.$element,"ui-unselecting"),i.unselecting=!1),i.selecting||(s._addClass(i.$element,"ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,s._addClass(i.$element,"ui-selected"),i.selected=!0):(s._removeClass(i.$element,"ui-selecting"),i.selecting=!1,i.startselected&&(s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(s._removeClass(i.$element,"ui-selected"),i.selected=!1,s._addClass(i.$element,"ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");i._removeClass(s.$element,"ui-selecting")._addClass(s.$element,"ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}}),t.widget("ui.sortable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this;this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):void 0}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-this.document.scrollTop()<a.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-a.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<a.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+a.scrollSpeed)),e.pageX-this.document.scrollLeft()<a.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-a.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<a.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp(new t.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,l=r+t.height,h=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+h>r&&l>s+h,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&l>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),n="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=s&&n;return o?(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1)):!1},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],l=[],h=this._connectWith();if(h&&e)for(s=h.length-1;s>=0;s--)for(o=t(h[s],this.document[0]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&l.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(l.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=l.length-1;s>=0;s--)l[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,l,h,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i],this.document[0]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,h=r.length;h>s;s++)l=t(r[s]),l.data(this.widgetName+"-item",a),c.push({item:l,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]);return e._addClass(n,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(n,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(n)):"tr"===s?e._createTrPlaceholder(e.currentItem,n):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this;e.children().each(function(){t("<td>&#160;</td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,n,o,a,r,l,h,c,u,d=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(d&&t.contains(this.containers[i].element[0],d.element[0]))continue;d=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0);if(d)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,o=null,c=d.floating||this._isFloating(this.currentItem),a=c?"left":"top",r=c?"width":"height",u=c?"pageX":"pageY",s=this.items.length-1;s>=0;s--)t.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(l=this.items[s].item.offset()[a],h=!1,e[u]-l>this.items[s][r]/2&&(h=!0),n>Math.abs(e[u]-l)&&(n=Math.abs(e[u]-l),o=this.items[s],this.direction=h?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;o?this._rearrange(e,o,null,!0):this._rearrange(e,null,this.containers[p].element,!0),this._trigger("change",e,this._uiHash()),this.containers[p]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",e,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,l=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():l?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():l?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}}),t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),void 0)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),t(o).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each(function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))}),this.headers.each(function(){e-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each(function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()}).height(e))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,o=this.active,a=t(e.currentTarget),r=a[0]===o[0],l=r&&n.collapsible,h=l?t():a.next(),c=o.next(),u={oldHeader:o,oldPanel:c,newHeader:l?t():a,newPanel:h};e.preventDefault(),r&&!n.collapsible||this._trigger("beforeActivate",e,u)===!1||(n.active=l?!1:this.headers.index(a),this.active=r?t():a,this._toggle(u),this._removeClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=o.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(a,"ui-accordion-header-collapsed")._addClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=a.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(a.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(t(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,o,a=this,r=0,l=t.css("box-sizing"),h=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=h&&c.down||c,d=function(){a._toggleComplete(i)};return"number"==typeof u&&(o=u),"string"==typeof u&&(n=u),n=n||u.easing||c.easing,o=o||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:o,easing:n,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(this.showProps,{duration:o,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===l&&(r+=i.now):"content"!==a.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}}),void 0):e.animate(this.hideProps,o,n,d):t.animate(this.showProps,o,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete;var d=/ui-corner-([a-z]){2,6}/g;t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,function(s,n){var o,a={};return n?"controlgroupLabel"===s?(o=e.element.find(n),o.each(function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(o,null,"ui-widget ui-widget-content ui-state-default"),i=i.concat(o.get()),void 0):(t.fn[s]&&(a=e["_"+s+"Options"]?e["_"+s+"Options"]("middle"):{classes:{}},e.element.find(n).each(function(){var n=t(this),o=n[s]("instance"),r=t.widget.extend({},a);if("button"!==s||!n.parent(".ui-spinner").length){o||(o=n[s]()[s]("instance")),o&&(r.classes=e._resolveClassesValues(r.classes,o)),n[s](r);var l=n[s]("widget");t.data(l[0],"ui-controlgroup-data",o?o:n[s]("instance")),i.push(l[0])}})),void 0):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data");s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={};return t.each(e,function(n){var o=i.options.classes[n]||"";o=t.trim(o.replace(d,"")),s[n]=(o+" "+e[n]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?(this._callChildMethod(e?"disable":"enable"),void 0):(this.refresh(),void 0)},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var n=e[s]().data("ui-controlgroup-data");if(n&&i["_"+n.widgetName+"Options"]){var o=i["_"+n.widgetName+"Options"](1===e.length?"only":s);o.classes=i._resolveClassesValues(o.classes,n),n.element[n.widgetName](o)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,n=this._super()||{};return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(n.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(n.disabled=e),n},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']";return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance");e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),this.element[0].disabled=e,void 0):(this.refresh(),void 0)):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),this.iconSpace&&(t=t.not(this.iconSpace[0])),t.remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,n=s?this.options.iconPosition:i,o="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(n),o?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?(this._super("showLabel",e),void 0):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.extend(t.ui,{datepicker:{version:"1.12.1"}});var p;t.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return a(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var s=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(i),t.data(e,"datepicker",i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.off("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.on("focus",this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.on("click",function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,n,o){var r,l,h,c,u,d=this._dialogInst;return d||(this.uuid+=1,r="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+r+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),t("body").append(this._dialogInput),d=this._dialogInst=this._newInst(this._dialogInput,!1),d.settings={},t.data(this._dialogInput[0],"datepicker",d)),a(d.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(d,i):i,this._dialogInput.val(i),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+c,h/2-150+u]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),d.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],"datepicker",d),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,"datepicker");s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),p===n&&(p=null))},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,"datepicker");n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,i,s){var n,o,r,l,h=this._getInst(e);return 2===arguments.length&&"string"==typeof i?"defaults"===i?t.extend({},t.datepicker._defaults):h?"all"===i?t.extend({},h.settings):this._get(h,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),h&&(this._curInst===h&&this._hideDatepicker(),o=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(h,"min"),l=this._getMinMaxDate(h,"max"),a(h.settings,n),null!==r&&void 0!==n.dateFormat&&void 0===n.minDate&&(h.settings.minDate=this._formatDate(h,r)),null!==l&&void 0!==n.dateFormat&&void 0===n.maxDate&&(h.settings.maxDate=this._formatDate(h,l)),"disabled"in n&&(n.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(t(e),h),this._autoSize(h),this._setDate(h,o),this._updateAlternate(h),this._updateDatepicker(h)),void 0)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var i,s,n=t.datepicker._getInst(e.target);return t.datepicker._get(n,"constrainInput")?(i=t.datepicker._possibleChars(t.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),e.ctrlKey||e.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var s,n,o,r,l,h,c;s=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==s&&(t.datepicker._curInst.dpDiv.stop(!0,!0),s&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),n=t.datepicker._get(s,"beforeShow"),o=n?n.apply(e,[e,s]):{},o!==!1&&(a(s.settings,o),s.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(s),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),r=!1,t(e).parents().each(function(){return r|="fixed"===t(this).css("position"),!r}),l={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,s.dpDiv.empty(),s.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(s),l=t.datepicker._checkOffset(s,l,r),s.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":r?"fixed":"absolute",display:"none",left:l.left+"px",top:l.top+"px"}),s.inline||(h=t.datepicker._get(s,"showAnim"),c=t.datepicker._get(s,"duration"),s.dpDiv.css("z-index",i(t(e))+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?s.dpDiv.show(h,t.datepicker._get(s,"showOptions"),c):s.dpDiv[h||"show"](h?c:null),t.datepicker._shouldFocusInput(s)&&s.input.trigger("focus"),t.datepicker._curInst=s))}},_updateDatepicker:function(e){this.maxRows=4,p=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i,s=this._getNumberOfMonths(e),n=s[1],a=17,r=e.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.trigger("focus"),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,l=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),h=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>l&&l>n?Math.abs(i.left+n-l):0),i.top-=Math.min(i.top,i.top+o>h&&h>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,a=this._curInst;!a||e&&a!==t.data(e,"datepicker")||this._datepickerShowing&&(i=this._get(a,"showAnim"),s=this._get(a,"duration"),n=function(){t.datepicker._tidyDialog(a)},t.effects&&(t.effects.effect[i]||t.effects[i])?a.dpDiv.hide(i,t.datepicker._get(a,"showOptions"),s,n):a.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(a,"onClose"),o&&o.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.trigger("focus"),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).val(n))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(e,i,s){if(null==e||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,o,a,r,l=0,h=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,c="string"!=typeof h?h:(new Date).getFullYear()%100+parseInt(h,10),u=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,d=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,g=-1,m=-1,_=-1,v=-1,b=!1,y=function(t){var i=e.length>n+1&&e.charAt(n+1)===t;return i&&n++,i},w=function(t){var e=y(t),s="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n="y"===t?s:1,o=RegExp("^\\d{"+n+","+s+"}"),a=i.substring(l).match(o);if(!a)throw"Missing number at position "+l;return l+=a[0].length,parseInt(a[0],10)},k=function(e,s,n){var o=-1,a=t.map(y(e)?n:s,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(a,function(t,e){var s=e[1];return i.substr(l,s.length).toLowerCase()===s.toLowerCase()?(o=e[0],l+=s.length,!1):void 0}),-1!==o)return o+1;throw"Unknown name at position "+l},x=function(){if(i.charAt(l)!==e.charAt(n))throw"Unexpected literal at position "+l;l++};for(n=0;e.length>n;n++)if(b)"'"!==e.charAt(n)||y("'")?x():b=!1;else switch(e.charAt(n)){case"d":_=w("d");break;case"D":k("D",u,d);break;case"o":v=w("o");break;case"m":m=w("m");break;case"M":m=k("M",p,f);break;case"y":g=w("y");break;case"@":r=new Date(w("@")),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"!":r=new Date((w("!")-this._ticksTo1970)/1e4),g=r.getFullYear(),m=r.getMonth()+1,_=r.getDate();break;case"'":y("'")?x():b=!0;break;default:x()}if(i.length>l&&(a=i.substr(l),!/^\s+/.test(a)))throw"Extra/unparsed characters found in date: "+a;if(-1===g?g=(new Date).getFullYear():100>g&&(g+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c>=g?0:-100)),v>-1)for(m=1,_=v;;){if(o=this._getDaysInMonth(g,m-1),o>=_)break;m++,_-=o}if(r=this._daylightSavingAdjust(new Date(g,m-1,_)),r.getFullYear()!==g||r.getMonth()+1!==m||r.getDate()!==_)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,l=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},h=function(t,e,i){var s=""+e;if(l(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return l(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||l("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=h("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=h("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=l("y")?e.getFullYear():(10>e.getFullYear()%100?"0":"")+e.getFullYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":l("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,e){return void 0!==t.settings[e]?t.settings[e]:this._defaults[e]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),l=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=l.exec(i);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":a+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(h[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}h=l.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).on(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,l,h,c,u,d,p,f,g,m,_,v,b,y,w,k,x,C,D,T,I,M,P,S,N,H,z,A,O,E,W,F,L,R=new Date,Y=this._daylightSavingAdjust(new Date(R.getFullYear(),R.getMonth(),R.getDate())),B=this._get(t,"isRTL"),j=this._get(t,"showButtonPanel"),q=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),U=this._getNumberOfMonths(t),V=this._get(t,"showCurrentAtPos"),X=this._get(t,"stepMonths"),$=1!==U[0]||1!==U[1],G=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),J=this._getMinMaxDate(t,"min"),Q=this._getMinMaxDate(t,"max"),Z=t.drawMonth-V,te=t.drawYear;if(0>Z&&(Z+=12,te--),Q)for(e=this._daylightSavingAdjust(new Date(Q.getFullYear(),Q.getMonth()-U[0]*U[1]+1,Q.getDate())),e=J&&J>e?J:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-X,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>":q?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+X,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>":q?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(B?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?G:Y,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,l=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",h=j?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(B?l:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(B?"":l)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),_=this._get(t,"showOtherMonths"),v=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",k=0;U[0]>k;k++){for(x="",this.maxRows=4,C=0;U[1]>C;C++){if(D=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),T=" ui-corner-all",I="",$){if(I+="<div class='ui-datepicker-group",U[1]>1)switch(C){case 0:I+=" ui-datepicker-group-first",T=" ui-corner-"+(B?"right":"left");
break;case U[1]-1:I+=" ui-datepicker-group-last",T=" ui-corner-"+(B?"left":"right");break;default:I+=" ui-datepicker-group-middle",T=""}I+="'>"}for(I+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&0===k?B?o:s:"")+(/all|right/.test(T)&&0===k?B?s:o:"")+this._generateMonthYearHeader(t,Z,te,J,Q,k>0||C>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)P=(w+c)%7,M+="<th scope='col'"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[P]+"'>"+p[P]+"</span></th>";for(I+=M+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),N=(this._getFirstDayOfMonth(te,Z)-c+7)%7,H=Math.ceil((N+S)/7),z=$?this.maxRows>H?this.maxRows:H:H,this.maxRows=z,A=this._daylightSavingAdjust(new Date(te,Z,1-N)),O=0;z>O;O++){for(I+="<tr>",E=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(A)+"</td>":"",w=0;7>w;w++)W=m?m.apply(t.input?t.input[0]:null,[A]):[!0,""],F=A.getMonth()!==Z,L=F&&!v||!W[0]||J&&J>A||Q&&A>Q,E+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(A.getTime()===D.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===A.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!_?"":" "+W[1]+(A.getTime()===G.getTime()?" "+this._currentClass:"")+(A.getTime()===Y.getTime()?" ui-datepicker-today":""))+"'"+(F&&!_||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(L?"":" data-handler='selectDay' data-event='click' data-month='"+A.getMonth()+"' data-year='"+A.getFullYear()+"'")+">"+(F&&!_?"&#xa0;":L?"<span class='ui-state-default'>"+A.getDate()+"</span>":"<a class='ui-state-default"+(A.getTime()===Y.getTime()?" ui-state-highlight":"")+(A.getTime()===G.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+A.getDate()+"</a>")+"</td>",A.setDate(A.getDate()+1),A=this._daylightSavingAdjust(A);I+=E+"</tr>"}Z++,Z>11&&(Z=0,te++),I+="</tbody></table>"+($?"</div>"+(U[0]>0&&C===U[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=I}y+=x}return y+=h,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var l,h,c,u,d,p,f,g,m=this._get(t,"changeMonth"),_=this._get(t,"changeYear"),v=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(l=s&&s.getFullYear()===i,h=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!l||c>=s.getMonth())&&(!h||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(v||(b+=y+(!o&&m&&_?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!_)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),v&&(b+=(!o&&m&&_?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.selectedYear+("Y"===i?e:0),n=t.selectedMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,l=this._get(t,"yearRange");return l&&(i=l.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).on("mousedown",t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new s,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.12.1",t.datepicker,t.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this;this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),o=Math.max.apply(null,n);return o>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",o+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var t=this._focusedElement;t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),void 0;if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){n.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,o={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel,icons:s.icons,text:s.text},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,delete s.icons,"boolean"==typeof s.text&&delete s.text,t("<button></button>",s).button(o).appendTo(e.uiButtonSet).on("click",function(){n.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){var a=o.offset.left-i.document.scrollLeft(),r=o.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" "+"top"+(r>=0?"+":"")+r,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){var a=i.uiDialog.offset(),r=a.left-i.document.scrollLeft(),l=a.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(l>=0?"+":"")+l,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e);-1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,n={};t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,i){var s,n,o=this.uiDialog;"disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=o.is(":data(ui-draggable)"),s&&!i&&o.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(n=o.is(":data(ui-resizable)"),n&&!i&&o.resizable("destroy"),n&&"string"==typeof i&&o.resizable("option","handles",i),n||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0;this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1;t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog,t.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=t("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){return void 0===t?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),void 0)},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).width(i.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,e===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}}),t.widget("ui.selectmenu",[t.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=t()},_drawButton:function(){var e,i=this,s=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(t){this.button.focus(),t.preventDefault()}}),this.element.hide(),this.button=t("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),e=t("<span>").appendTo(this.button),this._addClass(e,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(s).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){i._rendered||i._refreshMenu()})},_drawMenu:function(){var e=this;this.menu=t("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=t("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(t,i){t.preventDefault(),e._setSelection(),e._select(i.item.data("ui-selectmenu-item"),t)},focus:function(t,i){var s=i.item.data("ui-selectmenu-item");null!=e.focusIndex&&s.index!==e.focusIndex&&(e._trigger("focus",t,{item:s}),e.isOpen||e._select(s,t)),e.focusIndex=s.index,e.button.attr("aria-activedescendant",e.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()},_refreshMenu:function(){var t,e=this.element.find("option");this.menu.empty(),this._parseOptions(e),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,e.length&&(t=this._getSelectedItem(),this.menuInstance.focus(null,t),this._setAria(t.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(t){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",t)))},_position:function(){this.menuWrap.position(t.extend({of:this.button},this.options.position))},close:function(t){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",t))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderButtonItem:function(e){var i=t("<span>");return this._setText(i,e.label),this._addClass(i,"ui-selectmenu-text"),i},_renderMenu:function(e,i){var s=this,n="";t.each(i,function(i,o){var a;o.optgroup!==n&&(a=t("<li>",{text:o.optgroup}),s._addClass(a,"ui-selectmenu-optgroup","ui-menu-divider"+(o.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),a.appendTo(e),n=o.optgroup),s._renderItemData(e,o)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-selectmenu-item",e)},_renderItem:function(e,i){var s=t("<li>"),n=t("<div>",{title:i.element.attr("title")});return i.disabled&&this._addClass(s,null,"ui-state-disabled"),this._setText(n,i.label),s.append(n).appendTo(e)},_setText:function(t,e){e?t.text(e):t.html("&#160;")},_move:function(t,e){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex).parent("li"):(i=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),n+=":not(.ui-state-disabled)"),s="first"===t||"last"===t?i["first"===t?"prevAll":"nextAll"](n).eq(-1):i[t+"All"](n).eq(0),s.length&&this.menuInstance.focus(e,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")},_toggle:function(t){this[this.isOpen?"close":"open"](t)},_setSelection:function(){var t;this.range&&(window.getSelection?(t=window.getSelection(),t.removeAllRanges(),t.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(e){this.isOpen&&(t(e.target).closest(".ui-selectmenu-menu, #"+t.ui.escapeSelector(this.ids.button)).length||this.close(e))}},_buttonEvents:{mousedown:function(){var t;window.getSelection?(t=window.getSelection(),t.rangeCount&&(this.range=t.getRangeAt(0))):this.range=document.selection.createRange()},click:function(t){this._setSelection(),this._toggle(t)},keydown:function(e){var i=!0;switch(e.keyCode){case t.ui.keyCode.TAB:case t.ui.keyCode.ESCAPE:this.close(e),i=!1;break;case t.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(e);break;case t.ui.keyCode.UP:e.altKey?this._toggle(e):this._move("prev",e);break;case t.ui.keyCode.DOWN:e.altKey?this._toggle(e):this._move("next",e);break;case t.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(e):this._toggle(e);break;case t.ui.keyCode.LEFT:this._move("prev",e);break;case t.ui.keyCode.RIGHT:this._move("next",e);break;case t.ui.keyCode.HOME:case t.ui.keyCode.PAGE_UP:this._move("first",e);break;case t.ui.keyCode.END:case t.ui.keyCode.PAGE_DOWN:this._move("last",e);break;default:this.menu.trigger(e),i=!1}i&&e.preventDefault()}},_selectFocusedItem:function(t){var e=this.menuItems.eq(this.focusIndex).parent("li");e.hasClass("ui-state-disabled")||this._select(e.data("ui-selectmenu-item"),t)},_select:function(t,e){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=t.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(t)),this._setAria(t),this._trigger("select",e,{item:t}),t.index!==i&&this._trigger("change",e,{item:t}),this.close(e)},_setAria:function(t){var e=this.menuItems.eq(t.index).attr("id");this.button.attr({"aria-labelledby":e,"aria-activedescendant":e}),this.menu.attr("aria-activedescendant",e)},_setOption:function(t,e){if("icons"===t){var i=this.button.find("span.ui-icon");this._removeClass(i,null,this.options.icons.button)._addClass(i,null,e.button)}this._super(t,e),"appendTo"===t&&this.menuWrap.appendTo(this._appendTo()),"width"===t&&this._resizeButton()},_setOptionDisabled:function(t){this._super(t),this.menuInstance.option("disabled",t),this.button.attr("aria-disabled",t),this._toggleClass(this.button,null,"ui-state-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var t=this.options.width;return t===!1?(this.button.css("width",""),void 0):(null===t&&(t=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(t),void 0)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){var t=this._super();return t.disabled=this.element.prop("disabled"),t},_parseOptions:function(e){var i=this,s=[];e.each(function(e,n){s.push(i._parseOption(t(n),e))}),this.items=s},_parseOption:function(t,e){var i=t.parent("optgroup");return{element:t,index:e,value:t.val(),label:t.text(),optgroup:i.attr("label")||"",disabled:i.prop("disabled")||t.prop("disabled")}},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)}}]),t.widget("ui.slider",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,l,h,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),l=o.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-o.width()/2,top:e.pageY-l.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}}),t.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e=this._super(),i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);null!=n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var e=this.element[0]===t.ui.safeActiveElement(this.document[0]);e||(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===t.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i,s,n;return"culture"===t||"numberFormat"===t?(i=this._parse(this.element.val()),this.options[t]=e,this.element.val(this._format(i)),void 0):(("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(s=this.buttons.first().find(".ui-icon"),this._removeClass(s,null,this.options.icons.up),this._addClass(s,null,e.up),n=this.buttons.last().find(".ui-icon"),this._removeClass(n,null,this.options.icons.down),this._addClass(n,null,e.down)),this._super(t,e),void 0)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:r(function(t){this._super(t)}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null===t?!1:t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:r(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:r(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:r(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:r(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(r(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),t.uiBackCompat!==!1&&t.widget("ui.spinner",t.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}}),t.ui.spinner,t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var t=/#.*$/;return function(e){var i,s;i=e.href.replace(t,""),s=location.href.replace(t,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return e.hash.length>1&&i===s}}(),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(s&&this.tabs.each(function(i,n){return t(n).attr("aria-controls")===s?(e=i,!1):void 0}),null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===e||-1===e)&&(e=this.tabs.length?0:!1)),e!==!1&&(e=this.tabs.index(this.tabs.eq(e)),-1===e&&(e=i?!1:0)),!i&&e===!1&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:return e.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case t.ui.keyCode.ENTER:return e.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),e.ctrlKey||e.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){return"active"===t?(this._activate(e),void 0):(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),e||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e),void 0)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each(function(i,s){var n,o,a,r=t(s).uniqueId().attr("id"),l=t(s).closest("li"),h=l.attr("aria-controls");e._isLocal(s)?(n=s.hash,a=n.substring(1),o=e.element.find(e._sanitizeSelector(n))):(a=l.attr("aria-controls")||t({}).uniqueId()[0].id,n="#"+a,o=e.element.find(n),o.length||(o=e._createPanel(a),o.insertAfter(e.panels[i-1]||e.tablist)),o.attr("aria-live","polite")),o.length&&(e.panels=e.panels.add(o)),h&&l.data("ui-tabs-aria-controls",h),l.attr({"aria-controls":a,"aria-labelledby":r}),o.attr("aria-labelledby",r)}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),e===!0||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,e===!0)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,l=r?t():this._getPanelForTab(o),h=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:h,newTab:r?t():o,newPanel:l};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),h.length||l.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),l.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){o._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){o._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),n()}):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;i!==!1&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,function(t){return t!==e?t:null}):t.map(this.tabs,function(t,i){return i!==e?i:null})),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(i!==!0){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),o=n.find(".ui-tabs-anchor"),a=this._getPanelForTab(n),r={tab:n,panel:a},l=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),a.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};this._isLocal(o[0])||(this.xhr=t.ajax(this._ajaxSettings(o,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),a.attr("aria-busy","true"),this.xhr.done(function(t,e,n){setTimeout(function(){a.html(t),s._trigger("load",i,r),l(n,e)},1)}).fail(function(t,e){setTimeout(function(){l(t,e)},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),t.uiBackCompat!==!1&&t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}}),t.ui.tabs;var f="ui-effects-",g="ui-effects-style",m="ui-effects-animated",_=t;t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=h(),n=s._rgba=[];return i=i.toLowerCase(),f(l,function(t,o){var a,r=o.re.exec(i),l=r&&o.parse(r),h=o.space||"rgba";return l?(a=s[h](l),s[c[h].cache]=a[c[h].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(n,a,r,l){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,l],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof h?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=h(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=h(t),n=s._space(),o=c[n],a=0===this.alpha()?h("transparent"):this,r=a[o.cache]||o.to(a._rgba),l=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],h=s[o],c=u[n.type]||{};null!==h&&(null===a?l[o]=h:(c.mod&&(h-a>c.mod/2?a+=c.mod:a-h>c.mod/2&&(a-=c.mod)),l[o]=i((h-a)*e+a,n)))}),this[n](l)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=h(e)._rgba;return h(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),l=Math.min(s,n,o),h=r-l,c=r+l,u=.5*c;return e=l===r?0:s===r?60*(n-o)/h+360:n===r?60*(o-s)/h+120:60*(s-n)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==a?1:a]
},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,l=n.to,c=n.from;h.fn[s]=function(s){if(l&&!this[a]&&(this[a]=l(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=h(c(d)),n[a]=d,n):h(d)},f(o,function(e,i){h.fn[e]||(h.fn[e]=function(n){var o,a=t.type(n),l="alpha"===e?this._hsla?"hsla":"rgba":s,h=this[l](),c=h[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),h[i.idx]=n,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=h(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(l){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(_),function(){function e(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function i(e,i){var s,o,a={};for(s in i)o=i[s],e[s]!==o&&(n[s]||(t.fx.step[s]||!isNaN(parseFloat(o)))&&(a[s]=o));return a}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(_.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(n,o,a,r){var l=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",h=l.children?a.find("*").addBack():a;h=h.map(function(){var i=t(this);return{el:i,start:e(this)}}),o=function(){t.each(s,function(t,e){n[e]&&a[e+"Class"](n[e])})},o(),h=h.map(function(){return this.end=e(this.el[0]),this.diff=i(this.start,this.end),this}),a.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),s=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,h.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,o,a){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,o,a):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,o)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function e(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function i(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}function s(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,o=n.exec(t)||["",0,i,s,0];return{top:parseFloat(o[1])||0,right:"auto"===o[2]?i:parseFloat(o[2]),bottom:"auto"===o[3]?s:parseFloat(o[3]),left:parseFloat(o[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=function(e){return function(i){return!!t(i).data(m)||e(i)}}(t.expr.filters.animated)),t.uiBackCompat!==!1&&t.extend(t.effects,{save:function(t,e){for(var i=0,s=e.length;s>i;i++)null!==e[i]&&t.data(f+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;n>s;s++)null!==e[s]&&(i=t.data(f+e[s]),t.css(e[s],i))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).trigger("focus"),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(g,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(g)||"",t.removeData(g)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(e){var i,s=e.css("position"),n=e.position();return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(s)&&(s="absolute",i=t("<"+e[0].nodeName+">").insertAfter(e).css({display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),"float":e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(f+"placeholder",i)),e.css({position:s,left:n.left,top:n.top}),i},removePlaceholder:function(t){var e=f+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function i(e){function i(){r.removeData(m),t.effects.cleanUp(r),"hide"===s.mode&&r.hide(),a()}function a(){t.isFunction(l)&&l.call(r[0]),t.isFunction(e)&&e()}var r=t(this);s.mode=c.shift(),t.uiBackCompat===!1||o?"none"===s.mode?(r[h](),a()):n.call(r[0],s,i):(r.is(":hidden")?"hide"===h:"show"===h)?(r[h](),a()):n.call(r[0],s,a)}var s=e.apply(this,arguments),n=t.effects.effect[s.effect],o=n.mode,a=s.queue,r=a||"fx",l=s.complete,h=s.mode,c=[],u=function(e){var i=t(this),s=t.effects.mode(i,h)||o;i.data(m,!0),c.push(s),o&&("show"===s||s===o&&"hide"===s)&&i.show(),o&&"none"===s||t.effects.saveStyle(i),t.isFunction(e)&&e()};return t.fx.off||!n?h?this[h](s.duration,l):this.each(function(){l&&l.call(this)}):a===!1?this.each(u).each(i):this.queue(r,u).queue(r,i)},show:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(t.fn.show),hide:function(t){return function(s){if(i(s))return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(t.fn.hide),toggle:function(t){return function(s){if(i(s)||"boolean"==typeof s)return t.apply(this,arguments);var n=e.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):s(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,l=o?a.scrollLeft():0,h=n.offset(),c={top:h.top-r,left:h.left-l,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-l,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),t.isFunction(i)&&i()})}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=s(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}();var v=t.effects;t.effects.define("blind","hide",function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),o=e.direction||"up",a=n.cssClip(),r={clip:t.extend({},a)},l=t.effects.createPlaceholder(n);r.clip[s[o][0]]=r.clip[s[o][1]],"show"===e.mode&&(n.cssClip(r.clip),l&&l.css(t.effects.clipToBox(r)),r.clip=a),l&&l.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("bounce",function(e,i){var s,n,o,a=t(this),r=e.mode,l="hide"===r,h="show"===r,c=e.direction||"up",u=e.distance,d=e.times||5,p=2*d+(h||l?1:0),f=e.duration/p,g=e.easing,m="up"===c||"down"===c?"top":"left",_="up"===c||"left"===c,v=0,b=a.queue().length;for(t.effects.createPlaceholder(a),o=a.css(m),u||(u=a["top"===m?"outerHeight":"outerWidth"]()/3),h&&(n={opacity:1},n[m]=o,a.css("opacity",0).css(m,_?2*-u:2*u).animate(n,f,g)),l&&(u/=Math.pow(2,d-1)),n={},n[m]=o;d>v;v++)s={},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g).animate(n,f,g),u=l?2*u:u/2;l&&(s={opacity:0},s[m]=(_?"-=":"+=")+u,a.animate(s,f,g)),a.queue(i),t.effects.unshift(a,b,p+1)}),t.effects.define("clip","hide",function(e,i){var s,n={},o=t(this),a=e.direction||"vertical",r="both"===a,l=r||"horizontal"===a,h=r||"vertical"===a;s=o.cssClip(),n.clip={top:h?(s.bottom-s.top)/2:s.top,right:l?(s.right-s.left)/2:s.right,bottom:h?(s.bottom-s.top)/2:s.bottom,left:l?(s.right-s.left)/2:s.left},t.effects.createPlaceholder(o),"show"===e.mode&&(o.cssClip(n.clip),n.clip=s),o.animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("drop","hide",function(e,i){var s,n=t(this),o=e.mode,a="show"===o,r=e.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r?"-=":"+=",c="+="===h?"-=":"+=",u={opacity:0};t.effects.createPlaceholder(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,u[l]=h+s,a&&(n.css(u),u[l]=c+s,u.opacity=1),n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("explode","hide",function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),i()}var o,a,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=e.mode,g="show"===f,m=p.show().css("visibility","hidden").offset(),_=Math.ceil(p.outerWidth()/d),v=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(l=m.top+o*v,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*_,h=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*_,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:_,height:v,left:r+(g?h*_:0),top:l+(g?c*v:0),opacity:g?0:1}).animate({left:r+(g?0:h*_),top:l+(g?0:c*v),opacity:g?1:0},e.duration||500,e.easing,s)}),t.effects.define("fade","toggle",function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("fold","hide",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=e.size||15,l=/([0-9]+)%/.exec(r),h=!!e.horizFirst,c=h?["right","bottom"]:["bottom","right"],u=e.duration/2,d=t.effects.createPlaceholder(s),p=s.cssClip(),f={clip:t.extend({},p)},g={clip:t.extend({},p)},m=[p[c[0]],p[c[1]]],_=s.queue().length;l&&(r=parseInt(l[1],10)/100*m[a?0:1]),f.clip[c[0]]=r,g.clip[c[0]]=r,g.clip[c[1]]=0,o&&(s.cssClip(g.clip),d&&d.css(t.effects.clipToBox(g)),g.clip=p),s.queue(function(i){d&&d.animate(t.effects.clipToBox(f),u,e.easing).animate(t.effects.clipToBox(g),u,e.easing),i()}).animate(f,u,e.easing).animate(g,u,e.easing).queue(i),t.effects.unshift(s,_,4)}),t.effects.define("highlight","show",function(e,i){var s=t(this),n={backgroundColor:s.css("backgroundColor")};"hide"===e.mode&&(n.opacity=0),t.effects.saveStyle(s),s.css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(n,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}),t.effects.define("size",function(e,i){var s,n,o,a=t(this),r=["fontSize"],l=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],c=e.mode,u="effect"!==c,d=e.scale||"both",p=e.origin||["middle","center"],f=a.css("position"),g=a.position(),m=t.effects.scaledDimensions(a),_=e.from||m,v=e.to||t.effects.scaledDimensions(a,0);t.effects.createPlaceholder(a),"show"===c&&(o=_,_=v,v=o),n={from:{y:_.height/m.height,x:_.width/m.width},to:{y:v.height/m.height,x:v.width/m.width}},("box"===d||"both"===d)&&(n.from.y!==n.to.y&&(_=t.effects.setTransition(a,l,n.from.y,_),v=t.effects.setTransition(a,l,n.to.y,v)),n.from.x!==n.to.x&&(_=t.effects.setTransition(a,h,n.from.x,_),v=t.effects.setTransition(a,h,n.to.x,v))),("content"===d||"both"===d)&&n.from.y!==n.to.y&&(_=t.effects.setTransition(a,r,n.from.y,_),v=t.effects.setTransition(a,r,n.to.y,v)),p&&(s=t.effects.getBaseline(p,m),_.top=(m.outerHeight-_.outerHeight)*s.y+g.top,_.left=(m.outerWidth-_.outerWidth)*s.x+g.left,v.top=(m.outerHeight-v.outerHeight)*s.y+g.top,v.left=(m.outerWidth-v.outerWidth)*s.x+g.left),a.css(_),("content"===d||"both"===d)&&(l=l.concat(["marginTop","marginBottom"]).concat(r),h=h.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var i=t(this),s=t.effects.scaledDimensions(i),o={height:s.height*n.from.y,width:s.width*n.from.x,outerHeight:s.outerHeight*n.from.y,outerWidth:s.outerWidth*n.from.x},a={height:s.height*n.to.y,width:s.width*n.to.x,outerHeight:s.height*n.to.y,outerWidth:s.width*n.to.x};n.from.y!==n.to.y&&(o=t.effects.setTransition(i,l,n.from.y,o),a=t.effects.setTransition(i,l,n.to.y,a)),n.from.x!==n.to.x&&(o=t.effects.setTransition(i,h,n.from.x,o),a=t.effects.setTransition(i,h,n.to.x,a)),u&&t.effects.saveStyle(i),i.css(o),i.animate(a,e.duration,e.easing,function(){u&&t.effects.restoreStyle(i)})})),a.animate(v,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){var e=a.offset();0===v.opacity&&a.css("opacity",_.opacity),u||(a.css("position","static"===f?"relative":f).offset(e),t.effects.saveStyle(a)),i()}})}),t.effects.define("scale",function(e,i){var s=t(this),n=e.mode,o=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"effect"!==n?0:100),a=t.extend(!0,{from:t.effects.scaledDimensions(s),to:t.effects.scaledDimensions(s,o,e.direction||"both"),origin:e.origin||["middle","center"]},e);e.fade&&(a.from.opacity=1,a.to.opacity=0),t.effects.effect.size.call(this,a,i)}),t.effects.define("puff","hide",function(e,i){var s=t.extend(!0,{},e,{fade:!0,percent:parseInt(e.percent,10)||150});t.effects.effect.scale.call(this,s,i)}),t.effects.define("pulsate","show",function(e,i){var s=t(this),n=e.mode,o="show"===n,a="hide"===n,r=o||a,l=2*(e.times||5)+(r?1:0),h=e.duration/l,c=0,u=1,d=s.queue().length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),c=1);l>u;u++)s.animate({opacity:c},h,e.easing),c=1-c;s.animate({opacity:c},h,e.easing),s.queue(i),t.effects.unshift(s,d,l+1)}),t.effects.define("shake",function(e,i){var s=1,n=t(this),o=e.direction||"left",a=e.distance||20,r=e.times||3,l=2*r+1,h=Math.round(e.duration/l),c="up"===o||"down"===o?"top":"left",u="up"===o||"left"===o,d={},p={},f={},g=n.queue().length;for(t.effects.createPlaceholder(n),d[c]=(u?"-=":"+=")+a,p[c]=(u?"+=":"-=")+2*a,f[c]=(u?"-=":"+=")+2*a,n.animate(d,h,e.easing);r>s;s++)n.animate(p,h,e.easing).animate(f,h,e.easing);n.animate(p,h,e.easing).animate(d,h/2,e.easing).queue(i),t.effects.unshift(n,g,l+1)}),t.effects.define("slide","show",function(e,i){var s,n,o=t(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u=e.distance||o["top"===h?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(o),s=o.cssClip(),n=o.position()[h],d[h]=(c?-1:1)*u+n,d.clip=o.cssClip(),d.clip[a[l][1]]=d.clip[a[l][0]],"show"===r&&(o.cssClip(d.clip),o.css(h,d[h]),d.clip=s,d[h]=n),o.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})});var v;t.uiBackCompat!==!1&&(v=t.effects.define("transfer",function(e,i){t(this).transfer(e,i)}))});;
/*! jQRangeSlider 5.6.0 - 2014-02-01 - Copyright (C) Guillaume Gautreau 2012 - MIT and GPLv3 licenses.*/!function(a){"use strict";a.widget("ui.rangeSliderMouseTouch",a.ui.mouse,{enabled:!0,_mouseInit:function(){var b=this;a.ui.mouse.prototype._mouseInit.apply(this),this._mouseDownEvent=!1,this.element.bind("touchstart."+this.widgetName,function(a){return b._touchStart(a)})},_mouseDestroy:function(){a(document).unbind("touchmove."+this.widgetName,this._touchMoveDelegate).unbind("touchend."+this.widgetName,this._touchEndDelegate),a.ui.mouse.prototype._mouseDestroy.apply(this)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},destroy:function(){this._mouseDestroy(),a.ui.mouse.prototype.destroy.apply(this),this._mouseInit=null},_touchStart:function(b){if(!this.enabled)return!1;b.which=1,b.preventDefault(),this._fillTouchEvent(b);var c=this,d=this._mouseDownEvent;this._mouseDown(b),d!==this._mouseDownEvent&&(this._touchEndDelegate=function(a){c._touchEnd(a)},this._touchMoveDelegate=function(a){c._touchMove(a)},a(document).bind("touchmove."+this.widgetName,this._touchMoveDelegate).bind("touchend."+this.widgetName,this._touchEndDelegate))},_mouseDown:function(b){return this.enabled?a.ui.mouse.prototype._mouseDown.apply(this,[b]):!1},_touchEnd:function(b){this._fillTouchEvent(b),this._mouseUp(b),a(document).unbind("touchmove."+this.widgetName,this._touchMoveDelegate).unbind("touchend."+this.widgetName,this._touchEndDelegate),this._mouseDownEvent=!1,a(document).trigger("mouseup")},_touchMove:function(a){return a.preventDefault(),this._fillTouchEvent(a),this._mouseMove(a)},_fillTouchEvent:function(a){var b;b="undefined"==typeof a.targetTouches&&"undefined"==typeof a.changedTouches?a.originalEvent.targetTouches[0]||a.originalEvent.changedTouches[0]:a.targetTouches[0]||a.changedTouches[0],a.pageX=b.pageX,a.pageY=b.pageY}})}(jQuery),function(a){"use strict";a.widget("ui.rangeSliderDraggable",a.ui.rangeSliderMouseTouch,{cache:null,options:{containment:null},_create:function(){a.ui.rangeSliderMouseTouch.prototype._create.apply(this),setTimeout(a.proxy(this._initElementIfNotDestroyed,this),10)},destroy:function(){this.cache=null,a.ui.rangeSliderMouseTouch.prototype.destroy.apply(this)},_initElementIfNotDestroyed:function(){this._mouseInit&&this._initElement()},_initElement:function(){this._mouseInit(),this._cache()},_setOption:function(b,c){"containment"===b&&(this.options.containment=null===c||0===a(c).length?null:a(c))},_mouseStart:function(a){return this._cache(),this.cache.click={left:a.pageX,top:a.pageY},this.cache.initialOffset=this.element.offset(),this._triggerMouseEvent("mousestart"),!0},_mouseDrag:function(a){var b=a.pageX-this.cache.click.left;return b=this._constraintPosition(b+this.cache.initialOffset.left),this._applyPosition(b),this._triggerMouseEvent("sliderDrag"),!1},_mouseStop:function(){this._triggerMouseEvent("stop")},_constraintPosition:function(a){return 0!==this.element.parent().length&&null!==this.cache.parent.offset&&(a=Math.min(a,this.cache.parent.offset.left+this.cache.parent.width-this.cache.width.outer),a=Math.max(a,this.cache.parent.offset.left)),a},_applyPosition:function(a){var b={top:this.cache.offset.top,left:a};this.element.offset({left:a}),this.cache.offset=b},_cacheIfNecessary:function(){null===this.cache&&this._cache()},_cache:function(){this.cache={},this._cacheMargins(),this._cacheParent(),this._cacheDimensions(),this.cache.offset=this.element.offset()},_cacheMargins:function(){this.cache.margin={left:this._parsePixels(this.element,"marginLeft"),right:this._parsePixels(this.element,"marginRight"),top:this._parsePixels(this.element,"marginTop"),bottom:this._parsePixels(this.element,"marginBottom")}},_cacheParent:function(){if(null!==this.options.parent){var a=this.element.parent();this.cache.parent={offset:a.offset(),width:a.width()}}else this.cache.parent=null},_cacheDimensions:function(){this.cache.width={outer:this.element.outerWidth(),inner:this.element.width()}},_parsePixels:function(a,b){return parseInt(a.css(b),10)||0},_triggerMouseEvent:function(a){var b=this._prepareEventData();this.element.trigger(a,b)},_prepareEventData:function(){return{element:this.element,offset:this.cache.offset||null}}})}(jQuery),function(a,b){"use strict";a.widget("ui.rangeSlider",{options:{bounds:{min:0,max:100},defaultValues:{min:20,max:50},wheelMode:null,wheelSpeed:4,arrows:!0,valueLabels:"show",formatter:null,durationIn:0,durationOut:400,delayOut:200,range:{min:!1,max:!1},step:!1,scales:!1,enabled:!0},_values:null,_valuesChanged:!1,_initialized:!1,bar:null,leftHandle:null,rightHandle:null,innerBar:null,container:null,arrows:null,labels:null,changing:{min:!1,max:!1},changed:{min:!1,max:!1},ruler:null,_create:function(){this._setDefaultValues(),this.labels={left:null,right:null,leftDisplayed:!0,rightDisplayed:!0},this.arrows={left:null,right:null},this.changing={min:!1,max:!1},this.changed={min:!1,max:!1},this._createElements(),this._bindResize(),setTimeout(a.proxy(this.resize,this),1),setTimeout(a.proxy(this._initValues,this),1)},_setDefaultValues:function(){this._values={min:this.options.defaultValues.min,max:this.options.defaultValues.max}},_bindResize:function(){var b=this;this._resizeProxy=function(a){b.resize(a)},a(window).resize(this._resizeProxy)},_initWidth:function(){this.container.css("width",this.element.width()-this.container.outerWidth(!0)+this.container.width()),this.innerBar.css("width",this.container.width()-this.innerBar.outerWidth(!0)+this.innerBar.width())},_initValues:function(){this._initialized=!0,this.values(this._values.min,this._values.max)},_setOption:function(a,b){this._setWheelOption(a,b),this._setArrowsOption(a,b),this._setLabelsOption(a,b),this._setLabelsDurations(a,b),this._setFormatterOption(a,b),this._setBoundsOption(a,b),this._setRangeOption(a,b),this._setStepOption(a,b),this._setScalesOption(a,b),this._setEnabledOption(a,b)},_validProperty:function(a,b,c){return null===a||"undefined"==typeof a[b]?c:a[b]},_setStepOption:function(a,b){"step"===a&&(this.options.step=b,this._leftHandle("option","step",b),this._rightHandle("option","step",b),this._changed(!0))},_setScalesOption:function(a,b){"scales"===a&&(b===!1||null===b?(this.options.scales=!1,this._destroyRuler()):b instanceof Array&&(this.options.scales=b,this._updateRuler()))},_setRangeOption:function(a,b){"range"===a&&(this._bar("option","range",b),this.options.range=this._bar("option","range"),this._changed(!0))},_setBoundsOption:function(a,b){"bounds"===a&&"undefined"!=typeof b.min&&"undefined"!=typeof b.max&&this.bounds(b.min,b.max)},_setWheelOption:function(a,b){("wheelMode"===a||"wheelSpeed"===a)&&(this._bar("option",a,b),this.options[a]=this._bar("option",a))},_setLabelsOption:function(a,b){if("valueLabels"===a){if("hide"!==b&&"show"!==b&&"change"!==b)return;this.options.valueLabels=b,"hide"!==b?(this._createLabels(),this._leftLabel("update"),this._rightLabel("update")):this._destroyLabels()}},_setFormatterOption:function(a,b){"formatter"===a&&null!==b&&"function"==typeof b&&"hide"!==this.options.valueLabels&&(this._leftLabel("option","formatter",b),this.options.formatter=this._rightLabel("option","formatter",b))},_setArrowsOption:function(a,b){"arrows"!==a||b!==!0&&b!==!1||b===this.options.arrows||(b===!0?(this.element.removeClass("ui-rangeSlider-noArrow").addClass("ui-rangeSlider-withArrows"),this.arrows.left.css("display","block"),this.arrows.right.css("display","block"),this.options.arrows=!0):b===!1&&(this.element.addClass("ui-rangeSlider-noArrow").removeClass("ui-rangeSlider-withArrows"),this.arrows.left.css("display","none"),this.arrows.right.css("display","none"),this.options.arrows=!1),this._initWidth())},_setLabelsDurations:function(a,b){if("durationIn"===a||"durationOut"===a||"delayOut"===a){if(parseInt(b,10)!==b)return;null!==this.labels.left&&this._leftLabel("option",a,b),null!==this.labels.right&&this._rightLabel("option",a,b),this.options[a]=b}},_setEnabledOption:function(a,b){"enabled"===a&&this.toggle(b)},_createElements:function(){"absolute"!==this.element.css("position")&&this.element.css("position","relative"),this.element.addClass("ui-rangeSlider"),this.container=a("<div class='ui-rangeSlider-container' />").css("position","absolute").appendTo(this.element),this.innerBar=a("<div class='ui-rangeSlider-innerBar' />").css("position","absolute").css("top",0).css("left",0),this._createHandles(),this._createBar(),this.container.prepend(this.innerBar),this._createArrows(),"hide"!==this.options.valueLabels?this._createLabels():this._destroyLabels(),this._updateRuler(),this.options.enabled||this._toggle(this.options.enabled)},_createHandle:function(b){return a("<div />")[this._handleType()](b).bind("sliderDrag",a.proxy(this._changing,this)).bind("stop",a.proxy(this._changed,this))},_createHandles:function(){this.leftHandle=this._createHandle({isLeft:!0,bounds:this.options.bounds,value:this._values.min,step:this.options.step}).appendTo(this.container),this.rightHandle=this._createHandle({isLeft:!1,bounds:this.options.bounds,value:this._values.max,step:this.options.step}).appendTo(this.container)},_createBar:function(){this.bar=a("<div />").prependTo(this.container).bind("sliderDrag scroll zoom",a.proxy(this._changing,this)).bind("stop",a.proxy(this._changed,this)),this._bar({leftHandle:this.leftHandle,rightHandle:this.rightHandle,values:{min:this._values.min,max:this._values.max},type:this._handleType(),range:this.options.range,wheelMode:this.options.wheelMode,wheelSpeed:this.options.wheelSpeed}),this.options.range=this._bar("option","range"),this.options.wheelMode=this._bar("option","wheelMode"),this.options.wheelSpeed=this._bar("option","wheelSpeed")},_createArrows:function(){this.arrows.left=this._createArrow("left"),this.arrows.right=this._createArrow("right"),this.options.arrows?this.element.addClass("ui-rangeSlider-withArrows"):(this.arrows.left.css("display","none"),this.arrows.right.css("display","none"),this.element.addClass("ui-rangeSlider-noArrow"))},_createArrow:function(b){var c,d=a("<div class='ui-rangeSlider-arrow' />").append("<div class='ui-rangeSlider-arrow-inner' />").addClass("ui-rangeSlider-"+b+"Arrow").css("position","absolute").css(b,0).appendTo(this.element);return c="right"===b?a.proxy(this._scrollRightClick,this):a.proxy(this._scrollLeftClick,this),d.bind("mousedown touchstart",c),d},_proxy:function(a,b,c){var d=Array.prototype.slice.call(c);return a&&a[b]?a[b].apply(a,d):null},_handleType:function(){return"rangeSliderHandle"},_barType:function(){return"rangeSliderBar"},_bar:function(){return this._proxy(this.bar,this._barType(),arguments)},_labelType:function(){return"rangeSliderLabel"},_leftLabel:function(){return this._proxy(this.labels.left,this._labelType(),arguments)},_rightLabel:function(){return this._proxy(this.labels.right,this._labelType(),arguments)},_leftHandle:function(){return this._proxy(this.leftHandle,this._handleType(),arguments)},_rightHandle:function(){return this._proxy(this.rightHandle,this._handleType(),arguments)},_getValue:function(a,b){return b===this.rightHandle&&(a-=b.outerWidth()),a*(this.options.bounds.max-this.options.bounds.min)/(this.container.innerWidth()-b.outerWidth(!0))+this.options.bounds.min},_trigger:function(a){var b=this;setTimeout(function(){b.element.trigger(a,{label:b.element,values:b.values()})},1)},_changing:function(){this._updateValues()&&(this._trigger("valuesChanging"),this._valuesChanged=!0)},_deactivateLabels:function(){"change"===this.options.valueLabels&&(this._leftLabel("option","show","hide"),this._rightLabel("option","show","hide"))},_reactivateLabels:function(){"change"===this.options.valueLabels&&(this._leftLabel("option","show","change"),this._rightLabel("option","show","change"))},_changed:function(a){a===!0&&this._deactivateLabels(),(this._updateValues()||this._valuesChanged)&&(this._trigger("valuesChanged"),a!==!0&&this._trigger("userValuesChanged"),this._valuesChanged=!1),a===!0&&this._reactivateLabels()},_updateValues:function(){var a=this._leftHandle("value"),b=this._rightHandle("value"),c=this._min(a,b),d=this._max(a,b),e=c!==this._values.min||d!==this._values.max;return this._values.min=this._min(a,b),this._values.max=this._max(a,b),e},_min:function(a,b){return Math.min(a,b)},_max:function(a,b){return Math.max(a,b)},_createLabel:function(b,c){var d;return null===b?(d=this._getLabelConstructorParameters(b,c),b=a("<div />").appendTo(this.element)[this._labelType()](d)):(d=this._getLabelRefreshParameters(b,c),b[this._labelType()](d)),b},_getLabelConstructorParameters:function(a,b){return{handle:b,handleType:this._handleType(),formatter:this._getFormatter(),show:this.options.valueLabels,durationIn:this.options.durationIn,durationOut:this.options.durationOut,delayOut:this.options.delayOut}},_getLabelRefreshParameters:function(){return{formatter:this._getFormatter(),show:this.options.valueLabels,durationIn:this.options.durationIn,durationOut:this.options.durationOut,delayOut:this.options.delayOut}},_getFormatter:function(){return this.options.formatter===!1||null===this.options.formatter?this._defaultFormatter:this.options.formatter},_defaultFormatter:function(a){return Math.round(a)},_destroyLabel:function(a){return null!==a&&(a[this._labelType()]("destroy"),a.remove(),a=null),a},_createLabels:function(){this.labels.left=this._createLabel(this.labels.left,this.leftHandle),this.labels.right=this._createLabel(this.labels.right,this.rightHandle),this._leftLabel("pair",this.labels.right)},_destroyLabels:function(){this.labels.left=this._destroyLabel(this.labels.left),this.labels.right=this._destroyLabel(this.labels.right)},_stepRatio:function(){return this._leftHandle("stepRatio")},_scrollRightClick:function(a){return this.options.enabled?(a.preventDefault(),this._bar("startScroll"),this._bindStopScroll(),this._continueScrolling("scrollRight",4*this._stepRatio(),1),void 0):!1},_continueScrolling:function(a,b,c,d){if(!this.options.enabled)return!1;this._bar(a,c),d=d||5,d--;var e=this,f=16,g=Math.max(1,4/this._stepRatio());this._scrollTimeout=setTimeout(function(){0===d&&(b>f?b=Math.max(f,b/1.5):c=Math.min(g,2*c),d=5),e._continueScrolling(a,b,c,d)},b)},_scrollLeftClick:function(a){return this.options.enabled?(a.preventDefault(),this._bar("startScroll"),this._bindStopScroll(),this._continueScrolling("scrollLeft",4*this._stepRatio(),1),void 0):!1},_bindStopScroll:function(){var b=this;this._stopScrollHandle=function(a){a.preventDefault(),b._stopScroll()},a(document).bind("mouseup touchend",this._stopScrollHandle)},_stopScroll:function(){a(document).unbind("mouseup touchend",this._stopScrollHandle),this._stopScrollHandle=null,this._bar("stopScroll"),clearTimeout(this._scrollTimeout)},_createRuler:function(){this.ruler=a("<div class='ui-rangeSlider-ruler' />").appendTo(this.innerBar)},_setRulerParameters:function(){this.ruler.ruler({min:this.options.bounds.min,max:this.options.bounds.max,scales:this.options.scales})},_destroyRuler:function(){null!==this.ruler&&a.fn.ruler&&(this.ruler.ruler("destroy"),this.ruler.remove(),this.ruler=null)},_updateRuler:function(){this._destroyRuler(),this.options.scales!==!1&&a.fn.ruler&&(this._createRuler(),this._setRulerParameters())},values:function(a,b){var c;if("undefined"!=typeof a&&"undefined"!=typeof b){if(!this._initialized)return this._values.min=a,this._values.max=b,this._values;this._deactivateLabels(),c=this._bar("values",a,b),this._changed(!0),this._reactivateLabels()}else c=this._bar("values",a,b);return c},min:function(a){return this._values.min=this.values(a,this._values.max).min,this._values.min},max:function(a){return this._values.max=this.values(this._values.min,a).max,this._values.max},bounds:function(a,b){return this._isValidValue(a)&&this._isValidValue(b)&&b>a&&(this._setBounds(a,b),this._updateRuler(),this._changed(!0)),this.options.bounds},_isValidValue:function(a){return"undefined"!=typeof a&&parseFloat(a)===a},_setBounds:function(a,b){this.options.bounds={min:a,max:b},this._leftHandle("option","bounds",this.options.bounds),this._rightHandle("option","bounds",this.options.bounds),this._bar("option","bounds",this.options.bounds)},zoomIn:function(a){this._bar("zoomIn",a)},zoomOut:function(a){this._bar("zoomOut",a)},scrollLeft:function(a){this._bar("startScroll"),this._bar("scrollLeft",a),this._bar("stopScroll")},scrollRight:function(a){this._bar("startScroll"),this._bar("scrollRight",a),this._bar("stopScroll")},resize:function(){this._initWidth(),this._leftHandle("update"),this._rightHandle("update"),this._bar("update")},enable:function(){this.toggle(!0)},disable:function(){this.toggle(!1)},toggle:function(a){a===b&&(a=!this.options.enabled),this.options.enabled!==a&&this._toggle(a)},_toggle:function(a){this.options.enabled=a,this.element.toggleClass("ui-rangeSlider-disabled",!a);var b=a?"enable":"disable";this._bar(b),this._leftHandle(b),this._rightHandle(b),this._leftLabel(b),this._rightLabel(b)},destroy:function(){this.element.removeClass("ui-rangeSlider-withArrows ui-rangeSlider-noArrow ui-rangeSlider-disabled"),this._destroyWidgets(),this._destroyElements(),this.element.removeClass("ui-rangeSlider"),this.options=null,a(window).unbind("resize",this._resizeProxy),this._resizeProxy=null,this._bindResize=null,a.Widget.prototype.destroy.apply(this,arguments)},_destroyWidget:function(a){this["_"+a]("destroy"),this[a].remove(),this[a]=null},_destroyWidgets:function(){this._destroyWidget("bar"),this._destroyWidget("leftHandle"),this._destroyWidget("rightHandle"),this._destroyRuler(),this._destroyLabels()},_destroyElements:function(){this.container.remove(),this.container=null,this.innerBar.remove(),this.innerBar=null,this.arrows.left.remove(),this.arrows.right.remove(),this.arrows=null}})}(jQuery),function(a){"use strict";a.widget("ui.rangeSliderHandle",a.ui.rangeSliderDraggable,{currentMove:null,margin:0,parentElement:null,options:{isLeft:!0,bounds:{min:0,max:100},range:!1,value:0,step:!1},_value:0,_left:0,_create:function(){a.ui.rangeSliderDraggable.prototype._create.apply(this),this.element.css("position","absolute").css("top",0).addClass("ui-rangeSlider-handle").toggleClass("ui-rangeSlider-leftHandle",this.options.isLeft).toggleClass("ui-rangeSlider-rightHandle",!this.options.isLeft),this.element.append("<div class='ui-rangeSlider-handle-inner' />"),this._value=this._constraintValue(this.options.value)},destroy:function(){this.element.empty(),a.ui.rangeSliderDraggable.prototype.destroy.apply(this)},_setOption:function(b,c){"isLeft"!==b||c!==!0&&c!==!1||c===this.options.isLeft?"step"===b&&this._checkStep(c)?(this.options.step=c,this.update()):"bounds"===b?(this.options.bounds=c,this.update()):"range"===b&&this._checkRange(c)&&(this.options.range=c,this.update()):(this.options.isLeft=c,this.element.toggleClass("ui-rangeSlider-leftHandle",this.options.isLeft).toggleClass("ui-rangeSlider-rightHandle",!this.options.isLeft),this._position(this._value),this.element.trigger("switch",this.options.isLeft)),a.ui.rangeSliderDraggable.prototype._setOption.apply(this,[b,c])},_checkRange:function(a){return a===!1||!this._isValidValue(a.min)&&!this._isValidValue(a.max)},_isValidValue:function(a){return"undefined"!=typeof a&&a!==!1&&parseFloat(a)!==a},_checkStep:function(a){return a===!1||parseFloat(a)===a},_initElement:function(){a.ui.rangeSliderDraggable.prototype._initElement.apply(this),0===this.cache.parent.width||null===this.cache.parent.width?setTimeout(a.proxy(this._initElementIfNotDestroyed,this),500):(this._position(this._value),this._triggerMouseEvent("initialize"))},_bounds:function(){return this.options.bounds},_cache:function(){a.ui.rangeSliderDraggable.prototype._cache.apply(this),this._cacheParent()},_cacheParent:function(){var a=this.element.parent();this.cache.parent={element:a,offset:a.offset(),padding:{left:this._parsePixels(a,"paddingLeft")},width:a.width()}},_position:function(a){var b=this._getPositionForValue(a);this._applyPosition(b)},_constraintPosition:function(a){var b=this._getValueForPosition(a);return this._getPositionForValue(b)},_applyPosition:function(b){a.ui.rangeSliderDraggable.prototype._applyPosition.apply(this,[b]),this._left=b,this._setValue(this._getValueForPosition(b)),this._triggerMouseEvent("moving")},_prepareEventData:function(){var b=a.ui.rangeSliderDraggable.prototype._prepareEventData.apply(this);return b.value=this._value,b},_setValue:function(a){a!==this._value&&(this._value=a)},_constraintValue:function(a){if(a=Math.min(a,this._bounds().max),a=Math.max(a,this._bounds().min),a=this._round(a),this.options.range!==!1){var b=this.options.range.min||!1,c=this.options.range.max||!1;b!==!1&&(a=Math.max(a,this._round(b))),c!==!1&&(a=Math.min(a,this._round(c))),a=Math.min(a,this._bounds().max),a=Math.max(a,this._bounds().min)}return a},_round:function(a){return this.options.step!==!1&&this.options.step>0?Math.round(a/this.options.step)*this.options.step:a},_getPositionForValue:function(a){if(!this.cache||!this.cache.parent||null===this.cache.parent.offset)return 0;a=this._constraintValue(a);var b=(a-this.options.bounds.min)/(this.options.bounds.max-this.options.bounds.min),c=this.cache.parent.width,d=this.cache.parent.offset.left,e=this.options.isLeft?0:this.cache.width.outer;return b*c+d-e},_getValueForPosition:function(a){var b=this._getRawValueForPositionAndBounds(a,this.options.bounds.min,this.options.bounds.max);return this._constraintValue(b)},_getRawValueForPositionAndBounds:function(a,b,c){a+=this.options.isLeft?0:this.cache.width.outer;var d=null===this.cache.parent.offset?0:this.cache.parent.offset.left,e=this.cache.parent.width,f=e>0?(a-d)/e:0;return f*(c-b)+b},value:function(a){return"undefined"!=typeof a&&(this._cache(),a=this._constraintValue(a),this._position(a)),this._value},update:function(){this._cache();var a=this._constraintValue(this._value),b=this._getPositionForValue(a);a!==this._value?(this._triggerMouseEvent("updating"),this._position(a),this._triggerMouseEvent("update")):b!==this.cache.offset.left&&(this._triggerMouseEvent("updating"),this._position(a),this._triggerMouseEvent("update"))},position:function(a){return"undefined"!=typeof a&&(this._cache(),a=this._constraintPosition(a),this._applyPosition(a)),this._left},add:function(a,b){return a+b},substract:function(a,b){return a-b},stepsBetween:function(a,b){return this.options.step===!1?b-a:(b-a)/this.options.step},multiplyStep:function(a,b){return a*b},moveRight:function(a){var b;return this.options.step===!1?(b=this._left,this.position(this._left+a),this._left-b):(b=this._value,this.value(this.add(b,this.multiplyStep(this.options.step,a))),this.stepsBetween(b,this._value))},moveLeft:function(a){return-this.moveRight(-a)},stepRatio:function(){if(this.options.step===!1)return 1;var a=(this.options.bounds.max-this.options.bounds.min)/this.options.step;return this.cache.parent.width/a}})}(jQuery),function(a){"use strict";function b(a,b){return"undefined"==typeof a?b||!1:a}a.widget("ui.rangeSliderBar",a.ui.rangeSliderDraggable,{options:{leftHandle:null,rightHandle:null,bounds:{min:0,max:100},type:"rangeSliderHandle",range:!1,drag:function(){},stop:function(){},values:{min:0,max:20},wheelSpeed:4,wheelMode:null},_values:{min:0,max:20},_waitingToInit:2,_wheelTimeout:!1,_create:function(){a.ui.rangeSliderDraggable.prototype._create.apply(this),this.element.css("position","absolute").css("top",0).addClass("ui-rangeSlider-bar"),this.options.leftHandle.bind("initialize",a.proxy(this._onInitialized,this)).bind("mousestart",a.proxy(this._cache,this)).bind("stop",a.proxy(this._onHandleStop,this)),this.options.rightHandle.bind("initialize",a.proxy(this._onInitialized,this)).bind("mousestart",a.proxy(this._cache,this)).bind("stop",a.proxy(this._onHandleStop,this)),this._bindHandles(),this._values=this.options.values,this._setWheelModeOption(this.options.wheelMode)},destroy:function(){this.options.leftHandle.unbind(".bar"),this.options.rightHandle.unbind(".bar"),this.options=null,a.ui.rangeSliderDraggable.prototype.destroy.apply(this)},_setOption:function(a,b){"range"===a?this._setRangeOption(b):"wheelSpeed"===a?this._setWheelSpeedOption(b):"wheelMode"===a&&this._setWheelModeOption(b)},_setRangeOption:function(a){if(("object"!=typeof a||null===a)&&(a=!1),a!==!1||this.options.range!==!1){if(a!==!1){var c=b(a.min,this.options.range.min),d=b(a.max,this.options.range.max);this.options.range={min:c,max:d}}else this.options.range=!1;this._setLeftRange(),this._setRightRange()}},_setWheelSpeedOption:function(a){"number"==typeof a&&a>0&&(this.options.wheelSpeed=a)},_setWheelModeOption:function(a){(null===a||a===!1||"zoom"===a||"scroll"===a)&&(this.options.wheelMode!==a&&this.element.parent().unbind("mousewheel.bar"),this._bindMouseWheel(a),this.options.wheelMode=a)},_bindMouseWheel:function(b){"zoom"===b?this.element.parent().bind("mousewheel.bar",a.proxy(this._mouseWheelZoom,this)):"scroll"===b&&this.element.parent().bind("mousewheel.bar",a.proxy(this._mouseWheelScroll,this))},_setLeftRange:function(){if(this.options.range===!1)return!1;var a=this._values.max,b={min:!1,max:!1};b.max=(this.options.range.min||!1)!==!1?this._leftHandle("substract",a,this.options.range.min):!1,b.min=(this.options.range.max||!1)!==!1?this._leftHandle("substract",a,this.options.range.max):!1,this._leftHandle("option","range",b)},_setRightRange:function(){var a=this._values.min,b={min:!1,max:!1};b.min=(this.options.range.min||!1)!==!1?this._rightHandle("add",a,this.options.range.min):!1,b.max=(this.options.range.max||!1)!==!1?this._rightHandle("add",a,this.options.range.max):!1,this._rightHandle("option","range",b)},_deactivateRange:function(){this._leftHandle("option","range",!1),this._rightHandle("option","range",!1)},_reactivateRange:function(){this._setRangeOption(this.options.range)},_onInitialized:function(){this._waitingToInit--,0===this._waitingToInit&&this._initMe()},_initMe:function(){this._cache(),this.min(this._values.min),this.max(this._values.max);var a=this._leftHandle("position"),b=this._rightHandle("position")+this.options.rightHandle.width();this.element.offset({left:a}),this.element.css("width",b-a)},_leftHandle:function(){return this._handleProxy(this.options.leftHandle,arguments)},_rightHandle:function(){return this._handleProxy(this.options.rightHandle,arguments)},_handleProxy:function(a,b){var c=Array.prototype.slice.call(b);return a[this.options.type].apply(a,c)},_cache:function(){a.ui.rangeSliderDraggable.prototype._cache.apply(this),this._cacheHandles()},_cacheHandles:function(){this.cache.rightHandle={},this.cache.rightHandle.width=this.options.rightHandle.width(),this.cache.rightHandle.offset=this.options.rightHandle.offset(),this.cache.leftHandle={},this.cache.leftHandle.offset=this.options.leftHandle.offset()},_mouseStart:function(b){a.ui.rangeSliderDraggable.prototype._mouseStart.apply(this,[b]),this._deactivateRange()},_mouseStop:function(b){a.ui.rangeSliderDraggable.prototype._mouseStop.apply(this,[b]),this._cacheHandles(),this._values.min=this._leftHandle("value"),this._values.max=this._rightHandle("value"),this._reactivateRange(),this._leftHandle().trigger("stop"),this._rightHandle().trigger("stop")},_onDragLeftHandle:function(a,b){if(this._cacheIfNecessary(),b.element[0]===this.options.leftHandle[0]){if(this._switchedValues())return this._switchHandles(),this._onDragRightHandle(a,b),void 0;this._values.min=b.value,this.cache.offset.left=b.offset.left,this.cache.leftHandle.offset=b.offset,this._positionBar()}},_onDragRightHandle:function(a,b){if(this._cacheIfNecessary(),b.element[0]===this.options.rightHandle[0]){if(this._switchedValues())return this._switchHandles(),this._onDragLeftHandle(a,b),void 0;this._values.max=b.value,this.cache.rightHandle.offset=b.offset,this._positionBar()}},_positionBar:function(){var a=this.cache.rightHandle.offset.left+this.cache.rightHandle.width-this.cache.leftHandle.offset.left;this.cache.width.inner=a,this.element.css("width",a).offset({left:this.cache.leftHandle.offset.left})},_onHandleStop:function(){this._setLeftRange(),this._setRightRange()},_switchedValues:function(){if(this.min()>this.max()){var a=this._values.min;return this._values.min=this._values.max,this._values.max=a,!0}return!1},_switchHandles:function(){var a=this.options.leftHandle;this.options.leftHandle=this.options.rightHandle,this.options.rightHandle=a,this._leftHandle("option","isLeft",!0),this._rightHandle("option","isLeft",!1),this._bindHandles(),this._cacheHandles()},_bindHandles:function(){this.options.leftHandle.unbind(".bar").bind("sliderDrag.bar update.bar moving.bar",a.proxy(this._onDragLeftHandle,this)),this.options.rightHandle.unbind(".bar").bind("sliderDrag.bar update.bar moving.bar",a.proxy(this._onDragRightHandle,this))},_constraintPosition:function(b){var c,d={};return d.left=a.ui.rangeSliderDraggable.prototype._constraintPosition.apply(this,[b]),d.left=this._leftHandle("position",d.left),c=this._rightHandle("position",d.left+this.cache.width.outer-this.cache.rightHandle.width),d.width=c-d.left+this.cache.rightHandle.width,d},_applyPosition:function(b){a.ui.rangeSliderDraggable.prototype._applyPosition.apply(this,[b.left]),this.element.width(b.width)},_mouseWheelZoom:function(b,c,d,e){if(!this.enabled)return!1;var f=this._values.min+(this._values.max-this._values.min)/2,g={},h={};return this.options.range===!1||this.options.range.min===!1?(g.max=f,h.min=f):(g.max=f-this.options.range.min/2,h.min=f+this.options.range.min/2),this.options.range!==!1&&this.options.range.max!==!1&&(g.min=f-this.options.range.max/2,h.max=f+this.options.range.max/2),this._leftHandle("option","range",g),this._rightHandle("option","range",h),clearTimeout(this._wheelTimeout),this._wheelTimeout=setTimeout(a.proxy(this._wheelStop,this),200),this.zoomIn(e*this.options.wheelSpeed),!1},_mouseWheelScroll:function(b,c,d,e){return this.enabled?(this._wheelTimeout===!1?this.startScroll():clearTimeout(this._wheelTimeout),this._wheelTimeout=setTimeout(a.proxy(this._wheelStop,this),200),this.scrollLeft(e*this.options.wheelSpeed),!1):!1},_wheelStop:function(){this.stopScroll(),this._wheelTimeout=!1},min:function(a){return this._leftHandle("value",a)},max:function(a){return this._rightHandle("value",a)},startScroll:function(){this._deactivateRange()},stopScroll:function(){this._reactivateRange(),this._triggerMouseEvent("stop"),this._leftHandle().trigger("stop"),this._rightHandle().trigger("stop")},scrollLeft:function(a){return a=a||1,0>a?this.scrollRight(-a):(a=this._leftHandle("moveLeft",a),this._rightHandle("moveLeft",a),this.update(),this._triggerMouseEvent("scroll"),void 0)},scrollRight:function(a){return a=a||1,0>a?this.scrollLeft(-a):(a=this._rightHandle("moveRight",a),this._leftHandle("moveRight",a),this.update(),this._triggerMouseEvent("scroll"),void 0)},zoomIn:function(a){if(a=a||1,0>a)return this.zoomOut(-a);var b=this._rightHandle("moveLeft",a);a>b&&(b/=2,this._rightHandle("moveRight",b)),this._leftHandle("moveRight",b),this.update(),this._triggerMouseEvent("zoom")},zoomOut:function(a){if(a=a||1,0>a)return this.zoomIn(-a);var b=this._rightHandle("moveRight",a);a>b&&(b/=2,this._rightHandle("moveLeft",b)),this._leftHandle("moveLeft",b),this.update(),this._triggerMouseEvent("zoom")},values:function(a,b){if("undefined"!=typeof a&&"undefined"!=typeof b){var c=Math.min(a,b),d=Math.max(a,b);this._deactivateRange(),this.options.leftHandle.unbind(".bar"),this.options.rightHandle.unbind(".bar"),this._values.min=this._leftHandle("value",c),this._values.max=this._rightHandle("value",d),this._bindHandles(),this._reactivateRange(),this.update()}return{min:this._values.min,max:this._values.max}},update:function(){this._values.min=this.min(),this._values.max=this.max(),this._cache(),this._positionBar()}})}(jQuery),function(a){"use strict";function b(b,c,d,e){this.label1=b,this.label2=c,this.type=d,this.options=e,this.handle1=this.label1[this.type]("option","handle"),this.handle2=this.label2[this.type]("option","handle"),this.cache=null,this.left=b,this.right=c,this.moving=!1,this.initialized=!1,this.updating=!1,this.Init=function(){this.BindHandle(this.handle1),this.BindHandle(this.handle2),"show"===this.options.show?(setTimeout(a.proxy(this.PositionLabels,this),1),this.initialized=!0):setTimeout(a.proxy(this.AfterInit,this),1e3),this._resizeProxy=a.proxy(this.onWindowResize,this),a(window).resize(this._resizeProxy)
},this.Destroy=function(){this._resizeProxy&&(a(window).unbind("resize",this._resizeProxy),this._resizeProxy=null,this.handle1.unbind(".positionner"),this.handle1=null,this.handle2.unbind(".positionner"),this.handle2=null,this.label1=null,this.label2=null,this.left=null,this.right=null),this.cache=null},this.AfterInit=function(){this.initialized=!0},this.Cache=function(){"none"!==this.label1.css("display")&&(this.cache={},this.cache.label1={},this.cache.label2={},this.cache.handle1={},this.cache.handle2={},this.cache.offsetParent={},this.CacheElement(this.label1,this.cache.label1),this.CacheElement(this.label2,this.cache.label2),this.CacheElement(this.handle1,this.cache.handle1),this.CacheElement(this.handle2,this.cache.handle2),this.CacheElement(this.label1.offsetParent(),this.cache.offsetParent))},this.CacheIfNecessary=function(){null===this.cache?this.Cache():(this.CacheWidth(this.label1,this.cache.label1),this.CacheWidth(this.label2,this.cache.label2),this.CacheHeight(this.label1,this.cache.label1),this.CacheHeight(this.label2,this.cache.label2),this.CacheWidth(this.label1.offsetParent(),this.cache.offsetParent))},this.CacheElement=function(a,b){this.CacheWidth(a,b),this.CacheHeight(a,b),b.offset=a.offset(),b.margin={left:this.ParsePixels("marginLeft",a),right:this.ParsePixels("marginRight",a)},b.border={left:this.ParsePixels("borderLeftWidth",a),right:this.ParsePixels("borderRightWidth",a)}},this.CacheWidth=function(a,b){b.width=a.width(),b.outerWidth=a.outerWidth()},this.CacheHeight=function(a,b){b.outerHeightMargin=a.outerHeight(!0)},this.ParsePixels=function(a,b){return parseInt(b.css(a),10)||0},this.BindHandle=function(b){b.bind("updating.positionner",a.proxy(this.onHandleUpdating,this)),b.bind("update.positionner",a.proxy(this.onHandleUpdated,this)),b.bind("moving.positionner",a.proxy(this.onHandleMoving,this)),b.bind("stop.positionner",a.proxy(this.onHandleStop,this))},this.PositionLabels=function(){if(this.CacheIfNecessary(),null!==this.cache){var a,b=this.GetRawPosition(this.cache.label1,this.cache.handle1),c=this.GetRawPosition(this.cache.label2,this.cache.handle2);(c.left-b.left)*(this.cache.handle2.value-this.cache.handle1.value)<=0&&(a=b,b=c,c=a),this.ConstraintPositions(b,c),this.PositionLabel(this.label1,b.left,this.cache.label1),this.PositionLabel(this.label2,c.left,this.cache.label2)}},this.PositionLabel=function(a,b,c){var d,e,f,g=this.cache.offsetParent.offset.left+this.cache.offsetParent.border.left;g-b>=0?(a.css("right",""),a.offset({left:b})):(d=g+this.cache.offsetParent.width,e=b+c.margin.left+c.outerWidth+c.margin.right,f=d-e,a.css("left",""),a.css("right",f))},this.ConstraintPositions=function(a,b){a.center<b.center&&a.outerRight>b.outerLeft?(a=this.getLeftPosition(a,b),b=this.getRightPosition(a,b)):a.center>b.center&&b.outerRight>a.outerLeft&&(b=this.getLeftPosition(b,a),a=this.getRightPosition(b,a))},this.getLeftPosition=function(a,b){var c=(b.center+a.center)/2,d=c-a.cache.outerWidth-a.cache.margin.right+a.cache.border.left;return a.left=d,a},this.getRightPosition=function(a,b){var c=(b.center+a.center)/2;return b.left=c+b.cache.margin.left+b.cache.border.left,b},this.ShowIfNecessary=function(){"show"===this.options.show||this.moving||!this.initialized||this.updating||(this.label1.stop(!0,!0).fadeIn(this.options.durationIn||0),this.label2.stop(!0,!0).fadeIn(this.options.durationIn||0),this.moving=!0)},this.HideIfNeeded=function(){this.moving===!0&&(this.label1.stop(!0,!0).delay(this.options.delayOut||0).fadeOut(this.options.durationOut||0),this.label2.stop(!0,!0).delay(this.options.delayOut||0).fadeOut(this.options.durationOut||0),this.moving=!1)},this.onHandleMoving=function(a,b){this.ShowIfNecessary(),this.CacheIfNecessary(),this.UpdateHandlePosition(b),this.PositionLabels()},this.onHandleUpdating=function(){this.updating=!0},this.onHandleUpdated=function(){this.updating=!1,this.cache=null},this.onHandleStop=function(){this.HideIfNeeded()},this.onWindowResize=function(){this.cache=null},this.UpdateHandlePosition=function(a){null!==this.cache&&(a.element[0]===this.handle1[0]?this.UpdatePosition(a,this.cache.handle1):this.UpdatePosition(a,this.cache.handle2))},this.UpdatePosition=function(a,b){b.offset=a.offset,b.value=a.value},this.GetRawPosition=function(a,b){var c=b.offset.left+b.outerWidth/2,d=c-a.outerWidth/2,e=d+a.outerWidth-a.border.left-a.border.right,f=d-a.margin.left-a.border.left,g=b.offset.top-a.outerHeightMargin;return{left:d,outerLeft:f,top:g,right:e,outerRight:f+a.outerWidth+a.margin.left+a.margin.right,cache:a,center:c}},this.Init()}a.widget("ui.rangeSliderLabel",a.ui.rangeSliderMouseTouch,{options:{handle:null,formatter:!1,handleType:"rangeSliderHandle",show:"show",durationIn:0,durationOut:500,delayOut:500,isLeft:!1},cache:null,_positionner:null,_valueContainer:null,_innerElement:null,_value:null,_create:function(){this.options.isLeft=this._handle("option","isLeft"),this.element.addClass("ui-rangeSlider-label").css("position","absolute").css("display","block"),this._createElements(),this._toggleClass(),this.options.handle.bind("moving.label",a.proxy(this._onMoving,this)).bind("update.label",a.proxy(this._onUpdate,this)).bind("switch.label",a.proxy(this._onSwitch,this)),"show"!==this.options.show&&this.element.hide(),this._mouseInit()},destroy:function(){this.options.handle.unbind(".label"),this.options.handle=null,this._valueContainer=null,this._innerElement=null,this.element.empty(),this._positionner&&(this._positionner.Destroy(),this._positionner=null),a.ui.rangeSliderMouseTouch.prototype.destroy.apply(this)},_createElements:function(){this._valueContainer=a("<div class='ui-rangeSlider-label-value' />").appendTo(this.element),this._innerElement=a("<div class='ui-rangeSlider-label-inner' />").appendTo(this.element)},_handle:function(){var a=Array.prototype.slice.apply(arguments);return this.options.handle[this.options.handleType].apply(this.options.handle,a)},_setOption:function(a,b){"show"===a?this._updateShowOption(b):("durationIn"===a||"durationOut"===a||"delayOut"===a)&&this._updateDurations(a,b),this._setFormatterOption(a,b)},_setFormatterOption:function(a,b){"formatter"===a&&("function"==typeof b||b===!1)&&(this.options.formatter=b,this._display(this._value))},_updateShowOption:function(a){this.options.show=a,"show"!==this.options.show?(this.element.hide(),this._positionner.moving=!1):(this.element.show(),this._display(this.options.handle[this.options.handleType]("value")),this._positionner.PositionLabels()),this._positionner.options.show=this.options.show},_updateDurations:function(a,b){parseInt(b,10)===b&&(this._positionner.options[a]=b,this.options[a]=b)},_display:function(a){this.options.formatter===!1?this._displayText(Math.round(a)):this._displayText(this.options.formatter(a)),this._value=a},_displayText:function(a){this._valueContainer.text(a)},_toggleClass:function(){this.element.toggleClass("ui-rangeSlider-leftLabel",this.options.isLeft).toggleClass("ui-rangeSlider-rightLabel",!this.options.isLeft)},_positionLabels:function(){this._positionner.PositionLabels()},_mouseDown:function(a){this.options.handle.trigger(a)},_mouseUp:function(a){this.options.handle.trigger(a)},_mouseMove:function(a){this.options.handle.trigger(a)},_onMoving:function(a,b){this._display(b.value)},_onUpdate:function(){"show"===this.options.show&&this.update()},_onSwitch:function(a,b){this.options.isLeft=b,this._toggleClass(),this._positionLabels()},pair:function(a){null===this._positionner&&(this._positionner=new b(this.element,a,this.widgetName,{show:this.options.show,durationIn:this.options.durationIn,durationOut:this.options.durationOut,delayOut:this.options.delayOut}),a[this.widgetName]("positionner",this._positionner))},positionner:function(a){return"undefined"!=typeof a&&(this._positionner=a),this._positionner},update:function(){this._positionner.cache=null,this._display(this._handle("value")),"show"===this.options.show&&this._positionLabels()}})}(jQuery),function(a){"use strict";a.widget("ui.dateRangeSlider",a.ui.rangeSlider,{options:{bounds:{min:new Date(2010,0,1).valueOf(),max:new Date(2012,0,1).valueOf()},defaultValues:{min:new Date(2010,1,11).valueOf(),max:new Date(2011,1,11).valueOf()}},_create:function(){a.ui.rangeSlider.prototype._create.apply(this),this.element.addClass("ui-dateRangeSlider")},destroy:function(){this.element.removeClass("ui-dateRangeSlider"),a.ui.rangeSlider.prototype.destroy.apply(this)},_setDefaultValues:function(){this._values={min:this.options.defaultValues.min.valueOf(),max:this.options.defaultValues.max.valueOf()}},_setRulerParameters:function(){this.ruler.ruler({min:new Date(this.options.bounds.min),max:new Date(this.options.bounds.max),scales:this.options.scales})},_setOption:function(b,c){("defaultValues"===b||"bounds"===b)&&"undefined"!=typeof c&&null!==c&&this._isValidDate(c.min)&&this._isValidDate(c.max)?a.ui.rangeSlider.prototype._setOption.apply(this,[b,{min:c.min.valueOf(),max:c.max.valueOf()}]):a.ui.rangeSlider.prototype._setOption.apply(this,this._toArray(arguments))},_handleType:function(){return"dateRangeSliderHandle"},option:function(b){if("bounds"===b||"defaultValues"===b){var c=a.ui.rangeSlider.prototype.option.apply(this,arguments);return{min:new Date(c.min),max:new Date(c.max)}}return a.ui.rangeSlider.prototype.option.apply(this,this._toArray(arguments))},_defaultFormatter:function(a){var b=a.getMonth()+1,c=a.getDate();return""+a.getFullYear()+"-"+(10>b?"0"+b:b)+"-"+(10>c?"0"+c:c)},_getFormatter:function(){var a=this.options.formatter;return(this.options.formatter===!1||null===this.options.formatter)&&(a=this._defaultFormatter),function(a){return function(b){return a(new Date(b))}}(a)},values:function(b,c){var d=null;return d=this._isValidDate(b)&&this._isValidDate(c)?a.ui.rangeSlider.prototype.values.apply(this,[b.valueOf(),c.valueOf()]):a.ui.rangeSlider.prototype.values.apply(this,this._toArray(arguments)),{min:new Date(d.min),max:new Date(d.max)}},min:function(b){return this._isValidDate(b)?new Date(a.ui.rangeSlider.prototype.min.apply(this,[b.valueOf()])):new Date(a.ui.rangeSlider.prototype.min.apply(this))},max:function(b){return this._isValidDate(b)?new Date(a.ui.rangeSlider.prototype.max.apply(this,[b.valueOf()])):new Date(a.ui.rangeSlider.prototype.max.apply(this))},bounds:function(b,c){var d;return d=this._isValidDate(b)&&this._isValidDate(c)?a.ui.rangeSlider.prototype.bounds.apply(this,[b.valueOf(),c.valueOf()]):a.ui.rangeSlider.prototype.bounds.apply(this,this._toArray(arguments)),{min:new Date(d.min),max:new Date(d.max)}},_isValidDate:function(a){return"undefined"!=typeof a&&a instanceof Date},_toArray:function(a){return Array.prototype.slice.call(a)}})}(jQuery),function(a){"use strict";a.widget("ui.dateRangeSliderHandle",a.ui.rangeSliderHandle,{_steps:!1,_boundsValues:{},_create:function(){this._createBoundsValues(),a.ui.rangeSliderHandle.prototype._create.apply(this)},_getValueForPosition:function(a){var b=this._getRawValueForPositionAndBounds(a,this.options.bounds.min.valueOf(),this.options.bounds.max.valueOf());return this._constraintValue(new Date(b))},_setOption:function(b,c){return"step"===b?(this.options.step=c,this._createSteps(),this.update(),void 0):(a.ui.rangeSliderHandle.prototype._setOption.apply(this,[b,c]),"bounds"===b&&this._createBoundsValues(),void 0)},_createBoundsValues:function(){this._boundsValues={min:this.options.bounds.min.valueOf(),max:this.options.bounds.max.valueOf()}},_bounds:function(){return this._boundsValues},_createSteps:function(){if(this.options.step===!1||!this._isValidStep())return this._steps=!1,void 0;var a=new Date(this.options.bounds.min),b=new Date(this.options.bounds.max),c=a,d=0,e=new Date;for(this._steps=[];b>=c&&(1===d||e.valueOf()!==c.valueOf());)e=c,this._steps.push(c.valueOf()),c=this._addStep(a,d,this.options.step),d++;e.valueOf()===c.valueOf()&&(this._steps=!1)},_isValidStep:function(){return"object"==typeof this.options.step},_addStep:function(a,b,c){var d=new Date(a.valueOf());return d=this._addThing(d,"FullYear",b,c.years),d=this._addThing(d,"Month",b,c.months),d=this._addThing(d,"Date",b,7*c.weeks),d=this._addThing(d,"Date",b,c.days),d=this._addThing(d,"Hours",b,c.hours),d=this._addThing(d,"Minutes",b,c.minutes),d=this._addThing(d,"Seconds",b,c.seconds)},_addThing:function(a,b,c,d){return 0===c||0===(d||0)?a:(a["set"+b](a["get"+b]()+c*(d||0)),a)},_round:function(a){if(this._steps===!1)return a;for(var b,c,d=this.options.bounds.max.valueOf(),e=this.options.bounds.min.valueOf(),f=Math.max(0,(a-e)/(d-e)),g=Math.floor(this._steps.length*f);this._steps[g]>a;)g--;for(;g+1<this._steps.length&&this._steps[g+1]<=a;)g++;return g>=this._steps.length-1?this._steps[this._steps.length-1]:0===g?this._steps[0]:(b=this._steps[g],c=this._steps[g+1],c-a>a-b?b:c)},update:function(){this._createBoundsValues(),this._createSteps(),a.ui.rangeSliderHandle.prototype.update.apply(this)},add:function(a,b){return this._addStep(new Date(a),1,b).valueOf()},substract:function(a,b){return this._addStep(new Date(a),-1,b).valueOf()},stepsBetween:function(a,b){if(this.options.step===!1)return b-a;var c=Math.min(a,b),d=Math.max(a,b),e=0,f=!1,g=a>b;for(this.add(c,this.options.step)-c<0&&(f=!0);d>c;)f?d=this.add(d,this.options.step):c=this.add(c,this.options.step),e++;return g?-e:e},multiplyStep:function(a,b){var c={};for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d]*b);return c},stepRatio:function(){if(this.options.step===!1)return 1;var a=this._steps.length;return this.cache.parent.width/a}})}(jQuery),function(a){"use strict";a.widget("ui.editRangeSlider",a.ui.rangeSlider,{options:{type:"text",round:1},_create:function(){a.ui.rangeSlider.prototype._create.apply(this),this.element.addClass("ui-editRangeSlider")},destroy:function(){this.element.removeClass("ui-editRangeSlider"),a.ui.rangeSlider.prototype.destroy.apply(this)},_setOption:function(b,c){("type"===b||"step"===b)&&this._setLabelOption(b,c),"type"===b&&(this.options[b]=null===this.labels.left?c:this._leftLabel("option",b)),a.ui.rangeSlider.prototype._setOption.apply(this,[b,c])},_setLabelOption:function(a,b){null!==this.labels.left&&(this._leftLabel("option",a,b),this._rightLabel("option",a,b))},_labelType:function(){return"editRangeSliderLabel"},_createLabel:function(b,c){var d=a.ui.rangeSlider.prototype._createLabel.apply(this,[b,c]);return null===b&&d.bind("valueChange",a.proxy(this._onValueChange,this)),d},_addPropertiesToParameter:function(a){return a.type=this.options.type,a.step=this.options.step,a.id=this.element.attr("id"),a},_getLabelConstructorParameters:function(b,c){var d=a.ui.rangeSlider.prototype._getLabelConstructorParameters.apply(this,[b,c]);return this._addPropertiesToParameter(d)},_getLabelRefreshParameters:function(b,c){var d=a.ui.rangeSlider.prototype._getLabelRefreshParameters.apply(this,[b,c]);return this._addPropertiesToParameter(d)},_onValueChange:function(a,b){var c=!1;c=b.isLeft?this._values.min!==this.min(b.value):this._values.max!==this.max(b.value),c&&this._trigger("userValuesChanged")}})}(jQuery),function(a){"use strict";a.widget("ui.editRangeSliderLabel",a.ui.rangeSliderLabel,{options:{type:"text",step:!1,id:""},_input:null,_text:"",_create:function(){a.ui.rangeSliderLabel.prototype._create.apply(this),this._createInput()},_setOption:function(b,c){"type"===b?this._setTypeOption(c):"step"===b&&this._setStepOption(c),a.ui.rangeSliderLabel.prototype._setOption.apply(this,[b,c])},_createInput:function(){this._input=a("<input type='"+this.options.type+"' />").addClass("ui-editRangeSlider-inputValue").appendTo(this._valueContainer),this._setInputName(),this._input.bind("keyup",a.proxy(this._onKeyUp,this)),this._input.blur(a.proxy(this._onChange,this)),"number"===this.options.type&&(this.options.step!==!1&&this._input.attr("step",this.options.step),this._input.click(a.proxy(this._onChange,this))),this._input.val(this._text)},_setInputName:function(){var a=this.options.isLeft?"left":"right";this._input.attr("name",this.options.id+a)},_onSwitch:function(b,c){a.ui.rangeSliderLabel.prototype._onSwitch.apply(this,[b,c]),this._setInputName()},_destroyInput:function(){this._input.remove(),this._input=null},_onKeyUp:function(a){return 13===a.which?(this._onChange(a),!1):void 0},_onChange:function(){var a=this._returnCheckedValue(this._input.val());a!==!1&&this._triggerValue(a)},_triggerValue:function(a){var b=this.options.handle[this.options.handleType]("option","isLeft");this.element.trigger("valueChange",[{isLeft:b,value:a}])},_returnCheckedValue:function(a){var b=parseFloat(a);return isNaN(b)||b.toString()!==a?!1:b},_setTypeOption:function(a){"text"!==a&&"number"!==a||this.options.type===a||(this._destroyInput(),this.options.type=a,this._createInput())},_setStepOption:function(a){this.options.step=a,"number"===this.options.type&&this._input.attr("step",a!==!1?a:"any")},_displayText:function(a){this._input.val(a),this._text=a},enable:function(){a.ui.rangeSliderLabel.prototype.enable.apply(this),this._input.attr("disabled",null)},disable:function(){a.ui.rangeSliderLabel.prototype.disable.apply(this),this._input.attr("disabled","disabled")}})}(jQuery),function(a){"use strict";var b={first:function(a){return a},next:function(a){return a+1},format:function(){},label:function(a){return Math.round(a)},stop:function(){return!1}};a.widget("ui.ruler",{options:{min:0,max:100,scales:[]},_create:function(){this.element.addClass("ui-ruler"),this._createScales()},destroy:function(){this.element.removeClass("ui-ruler"),this.element.empty()},_regenerate:function(){this.element.empty(),this._createScales()},_setOption:function(a,b){return"min"===a||"max"===a&&b!==this.options[a]?(this.options[a]=b,this._regenerate(),void 0):"scales"===a&&b instanceof Array?(this.options.scales=b,this._regenerate(),void 0):void 0},_createScales:function(){if(this.options.max!==this.options.min)for(var a=0;a<this.options.scales.length;a++)this._createScale(this.options.scales[a],a)},_createScale:function(c,d){var e=a.extend({},b,c),f=a("<div class='ui-ruler-scale' />").appendTo(this.element);f.addClass("ui-ruler-scale"+d),this._createTicks(f,e)},_createTicks:function(a,b){var c,d,e,f=b.first(this.options.min,this.options.max),g=this.options.max-this.options.min,h=!0;do c=f,f=b.next(c),d=(Math.min(f,this.options.max)-Math.max(c,this.options.min))/g,e=this._createTick(c,f,b),a.append(e),e.css("width",100*d+"%"),h&&c>this.options.min&&e.css("margin-left",100*(c-this.options.min)/g+"%"),h=!1;while(!this._stop(b,f))},_stop:function(a,b){return a.stop(b)||b>=this.options.max},_createTick:function(b,c,d){var e=a("<div class='ui-ruler-tick' style='display:inline-block' />"),f=a("<div class='ui-ruler-tick-inner' />").appendTo(e),g=a("<span class='ui-ruler-tick-label' />").appendTo(f);return g.text(d.label(b,c)),d.format(e,b,c),e}})}(jQuery);;
// fonctions utils pour les functions.
namespace("nms.utils.fct", function (undefined) {
  // permet l'héritage.
  this.inherit = function (self, baseClass) {
    var args = [];
    // si on a plus de 2 arguments, les autres vont être passés
    if (arguments.length > 2) {
      for (var argIndex = 2; argIndex < arguments.length; argIndex++) {
        // pousse les arguments dans la liste args
        args.push(arguments[argIndex]);
      }
    }
    // appel le constructeur de la base class avec la classe recu et passe les arguments.
    baseClass.apply(self, args);

    // si on est pas une instance de la classe de base on modifie le prototype pour le devenir.
    if (!(self instanceof baseClass)) {
      self.constructor.prototype = _inherit.call(baseClass.prototype);
    }
  };

  // permet de vider le corps d'une méthode pour ne l'appeler qu'une seule fois.
  this.disposable = function (fct) {
    var originalFct = fct;
    // crée  une fonction pour contenir la fonction scopée et la rappeler.
    function disposable() {
      fct.apply(disposable, arguments);
    };

    // détruit le body de la fonction scopée
    disposable.dispose = function () {
      fct = function () { };
    }

    // recharge la function.
    disposable.reactivate = function () {
      fct = originalFct;
    };

    // retourne la fonction.
    return disposable;
  };


  // fonction dont l'exécution est retardée et annulée si un autre appel à la meme fonction est fait.
  this.delayed = function (fct, delay) {
    if (delay == undefined) {
      delay = 500;
    }
    var timeout = null;

    // crée  une fonction pour contenir la fonction scopée et la rappeler.
    function delayed() {
      var args = arguments;
      cancel();
      // timeout pour retarder l'exécution
      timeout = setTimeout(function () {
        fct.apply(delayed, args);
        timeout = null;
      }, delay);
    };

    // annule l'exécution de la fonction
    function cancel() {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    }

    // permet d'appeler le cancel de l'extérieur.
    delayed.cancel = cancel;

    // retourne la fonction.
    return delayed;
  };

  // boucle avec attente.
  this.delayedLoop = function (delegate, timeout) {
    // contexte de la boucle
    var loopContext = {
      index: 0, // index d'exécution
      // fonction pour briser la boucle.
      breakLoop: function () {
        // annule l'intervale
        clearInterval(interval);
      }
    },
    // intervale de la boucle
      interval = setInterval(function () {
        // appel la méthode en paramètres en utilisant le contexte.
        delegate.call(loopContext);
        // incrémente l'index.
        loopContext.index++;
      }, timeout);
  };


  // Ajoute aux fonctions la possibilité d'overrider une fonction venant d'un base.
  Function.prototype.override = function (func) {
    var superFunction = this,
      originalFct = func;

    function overriden() {
      this.base = superFunction;
      return func.apply(this, arguments);
    };

    if (superFunction.dispose) {
      superFunction.dispose = function () {
        func = function () { };
      };
      overriden.reactivate = function () {
        func = originalFct;
      };
    }

    return overriden;
  };


  /// permet d'hériter d'une classe de base
  this.inherits = function (base, definition) {
    // redéfinit le constructeur pour lui passer le constructeur de base.
    function redef() {
      var self = this;
      self.base = base;
      definition.apply(self, arguments);
    };
    redef.prototype = Object.create(base.prototype);

    return redef;
  };

  // permet l'utilisation du instanceof dans l'héritage.
  function _inherit() {
    // on se crée un objet bidon
    function F() { }
    // on lui indique que son prototype c'est l'objet en cours (dans ce cas si l'objet en cours c'est un prototype)
    F.prototype = this;
    // on exécute le prototype pour en retourner une instance, c'est tordu, mais ca nous retourne le bon base type.
    return new F();
  };


  if (typeof Object.create !== 'function') {
    Object.create = function (o) {
      function F() { }
      F.prototype = o;
      return new F();
    };
  }

});;
// fonctions utils pour les functions.
namespace("nms.utils.fct", function (undefined) {
  /// fonction qui retourne un deferred et permet de le résoudre avec this.resolve sans déclarer de variables.
  this.deferredFunction = function (delegate) {
    // valide la présence du delegate.
    if (delegate == undefined) {
      throw new Error("delegate required for deferredFunction");
    }
    // retourne la fonction.
    return function () {
      // crée un deferred.
      var promise = $.Deferred(),
        args = [promise],
        i = 0;

      // On remplit le tableau d'arguments a appliquer avec ceux recu
      for (i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      // excution du delegate.
      delegate.apply(delegate, args);
      // retourn le deferred.
      return promise;
    };
  };

  /// fonction qui retourne un promise qui sera résolver quand le promise de la fonction fournit sera résolvé.
  this.delayedPromise = function (delegate, timeout, resolveOnlyLast) {
    var promise = $.Deferred(); // promise à retourner
    if (!timeout) {
      timeout = 500;
    }

    // résous le promise et en crée un nouveau.
    function resolve() {
      promise.resolve();
      promise = $.Deferred();
    }
    // function à exécuter avec le delayed
    var toExec = nms.utils.fct.delayed(function () {
      var def = delegate.apply(null, arguments);
      // si la fonction retourne un deferred on attend qu'il soit terminé pour resoudre le promise
      if (def && def.done) {
        def.done(function () {
          resolve();
        });
      }
      else {
        // sinon on résous immédiatement.
        resolve();
      }
    }, timeout);
    // retourne une fonction qui retourne le promise après avoir exécuter le delegate
    return function () {
      toExec.apply(null, arguments);
      // si on souhaite exécuter seulement le dernier deferred, on en crée un nouveau chaque fois.
      if (resolveOnlyLast) {
        promise = $.Deferred();
      }
      return promise;

    };
  };
});

;
/**
* Version: 1.0 Alpha-1 
* Build Date: 13-Nov-2007
* Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
* License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
* Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
*/
Date.CultureInfo = { name: "fr-CA", englishName: "French (Canada)", nativeName: "français (Canada)", dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], abbreviatedDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], shortestDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"], firstLetterDayNames: ["d", "l", "m", "m", "j", "v", "s"], monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"], abbreviatedMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], amDesignator: "", pmDesignator: "", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "ymd", formatPatterns: { shortDate: "yyyy-MM-dd", longDate: "d MMMM yyyy", shortTime: "HH:mm", longTime: "HH:mm:ss", fullDateTime: "d MMMM yyyy HH:mm:ss", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "d MMMM", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^janv(.(ier)?)?/i, feb: /^févr(.(ier)?)?/i, mar: /^mars/i, apr: /^avr(.(il)?)?/i, may: /^mai/i, jun: /^juin/i, jul: /^juil(.(let)?)?/i, aug: /^août/i, sep: /^sept(.(embre)?)?/i, oct: /^oct(.(obre)?)?/i, nov: /^nov(.(embre)?)?/i, dec: /^déc(.(embre)?)?/i, sun: /^di(m(.(anche)?)?)?/i, mon: /^lu(n(.(di)?)?)?/i, tue: /^ma(r(.(di)?)?)?/i, wed: /^me(r(.(credi)?)?)?/i, thu: /^je(u(.(di)?)?)?/i, fri: /^ve(n(.(dredi)?)?)?/i, sat: /^sa(m(.(edi)?)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800"} };

$(document).ready(function () {
  if (typeof (Altitude3_ShortCultureID) != "undefined" && Altitude3_ShortCultureID == 'en') {
    Date.CultureInfo = { name: "en-CA", englishName: "English (Canada)", nativeName: "English (Canada)", dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], amDesignator: "AM", pmDesignator: "PM", firstDayOfWeek: 0, twoDigitYearMax: 2029, dateElementOrder: "dmy", formatPatterns: { shortDate: "dd/MM/yyyy", longDate: "MMMM d, yyyy", shortTime: "h:mm tt", longTime: "h:mm:ss tt", fullDateTime: "MMMM d, yyyy h:mm:ss tt", sortableDateTime: "yyyy-MM-ddTHH:mm:ss", universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ", rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT", monthDay: "MMMM dd", yearMonth: "MMMM, yyyy" }, regexPatterns: { jan: /^jan(uary)?/i, feb: /^feb(ruary)?/i, mar: /^mar(ch)?/i, apr: /^apr(il)?/i, may: /^may/i, jun: /^jun(e)?/i, jul: /^jul(y)?/i, aug: /^aug(ust)?/i, sep: /^sep(t(ember)?)?/i, oct: /^oct(ober)?/i, nov: /^nov(ember)?/i, dec: /^dec(ember)?/i, sun: /^su(n(day)?)?/i, mon: /^mo(n(day)?)?/i, tue: /^tu(e(s(day)?)?)?/i, wed: /^we(d(nesday)?)?/i, thu: /^th(u(r(s(day)?)?)?)?/i, fri: /^fr(i(day)?)?/i, sat: /^sa(t(urday)?)?/i, future: /^next/i, past: /^last|past|prev(ious)?/i, add: /^(\+|after|from)/i, subtract: /^(\-|before|ago)/i, yesterday: /^yesterday/i, today: /^t(oday)?/i, tomorrow: /^tomorrow/i, now: /^n(ow)?/i, millisecond: /^ms|milli(second)?s?/i, second: /^sec(ond)?s?/i, minute: /^min(ute)?s?/i, hour: /^h(ou)?rs?/i, week: /^w(ee)?k/i, month: /^m(o(nth)?s?)?/i, day: /^d(ays?)?/i, year: /^y((ea)?rs?)?/i, shortMeridian: /^(a|p)/i, longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i, timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i, ordinalSuffix: /^\s*(st|nd|rd|th)/i, timeContext: /^\s*(\:|a|p)/i }, abbreviatedTimeZoneStandard: { GMT: "-000", EST: "-0400", CST: "-0500", MST: "-0600", PST: "-0700" }, abbreviatedTimeZoneDST: { GMT: "-000", EDT: "-0500", CDT: "-0600", MDT: "-0700", PDT: "-0800"} };
  }
});

Date.getMonthNumberFromName = function (name) {
  var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase(); for (var i = 0; i < n.length; i++) { if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) { return i; } }
  return -1;
}; Date.getDayNumberFromName = function (name) {
  var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase(); for (var i = 0; i < n.length; i++) { if (n[i].toLowerCase() == s || m[i].toLowerCase() == s) { return i; } }
  return -1;
}; Date.isLeapYear = function (year) { return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); }; Date.getDaysInMonth = function (year, month) { return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]; }; Date.getTimezoneOffset = function (s, dst) { return (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()] : Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()]; }; Date.getTimezoneAbbreviation = function (offset, dst) {
  var n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard, p; for (p in n) { if (n[p] === offset) { return p; } }
  return null;
}; Date.prototype.clone = function () { return new Date(this.getTime()); }; Date.prototype.compareTo = function (date) {
  if (isNaN(this)) { throw new Error(this); }
  if (date instanceof Date && !isNaN(date)) { return (this > date) ? 1 : (this < date) ? -1 : 0; } else { throw new TypeError(date); }
}; Date.prototype.equals = function (date) { return (this.compareTo(date) === 0); }; Date.prototype.between = function (start, end) { var t = this.getTime(); return t >= start.getTime() && t <= end.getTime(); }; Date.prototype.addMilliseconds = function (value) { this.setMilliseconds(this.getMilliseconds() + value); return this; }; Date.prototype.addSeconds = function (value) { return this.addMilliseconds(value * 1000); }; Date.prototype.addMinutes = function (value) { return this.addMilliseconds(value * 60000); }; Date.prototype.addHours = function (value) { return this.addMilliseconds(value * 3600000); }; Date.prototype.addDays = function (value) { return this.addMilliseconds(value * 86400000); }; Date.prototype.addWeeks = function (value) { return this.addMilliseconds(value * 604800000); }; Date.prototype.addMonths = function (value) { var n = this.getDate(); this.setDate(1); this.setMonth(this.getMonth() + value); this.setDate(Math.min(n, this.getDaysInMonth())); return this; }; Date.prototype.addYears = function (value) { return this.addMonths(value * 12); }; Date.prototype.add = function (config) {
  if (typeof config == "number") { this._orient = config; return this; }
  var x = config; if (x.millisecond || x.milliseconds) { this.addMilliseconds(x.millisecond || x.milliseconds); }
  if (x.second || x.seconds) { this.addSeconds(x.second || x.seconds); }
  if (x.minute || x.minutes) { this.addMinutes(x.minute || x.minutes); }
  if (x.hour || x.hours) { this.addHours(x.hour || x.hours); }
  if (x.month || x.months) { this.addMonths(x.month || x.months); }
  if (x.year || x.years) { this.addYears(x.year || x.years); }
  if (x.day || x.days) { this.addDays(x.day || x.days); }
  return this;
}; Date._validate = function (value, min, max, name) {
  if (typeof value != "number") { throw new TypeError(value + " is not a Number."); } else if (value < min || value > max) { throw new RangeError(value + " is not a valid value for " + name + "."); }
  return true;
}; Date.validateMillisecond = function (n) { return Date._validate(n, 0, 999, "milliseconds"); }; Date.validateSecond = function (n) { return Date._validate(n, 0, 59, "seconds"); }; Date.validateMinute = function (n) { return Date._validate(n, 0, 59, "minutes"); }; Date.validateHour = function (n) { return Date._validate(n, 0, 23, "hours"); }; Date.validateDay = function (n, year, month) { return Date._validate(n, 1, Date.getDaysInMonth(year, month), "days"); }; Date.validateMonth = function (n) { return Date._validate(n, 0, 11, "months"); }; Date.validateYear = function (n) { return Date._validate(n, 1, 9999, "seconds"); }; Date.prototype.set = function (config) {
  var x = config; if (!x.millisecond && x.millisecond !== 0) { x.millisecond = -1; }
  if (!x.second && x.second !== 0) { x.second = -1; }
  if (!x.minute && x.minute !== 0) { x.minute = -1; }
  if (!x.hour && x.hour !== 0) { x.hour = -1; }
  if (!x.day && x.day !== 0) { x.day = -1; }
  if (!x.month && x.month !== 0) { x.month = -1; }
  if (!x.year && x.year !== 0) { x.year = -1; }
  if (x.millisecond != -1 && Date.validateMillisecond(x.millisecond)) { this.addMilliseconds(x.millisecond - this.getMilliseconds()); }
  if (x.second != -1 && Date.validateSecond(x.second)) { this.addSeconds(x.second - this.getSeconds()); }
  if (x.minute != -1 && Date.validateMinute(x.minute)) { this.addMinutes(x.minute - this.getMinutes()); }
  if (x.hour != -1 && Date.validateHour(x.hour)) { this.addHours(x.hour - this.getHours()); }
  if (x.month !== -1 && Date.validateMonth(x.month)) { this.addMonths(x.month - this.getMonth()); }
  if (x.year != -1 && Date.validateYear(x.year)) { this.addYears(x.year - this.getFullYear()); }
  if (x.day != -1 && Date.validateDay(x.day, this.getFullYear(), this.getMonth())) { this.addDays(x.day - this.getDate()); }
  if (x.timezone) { this.setTimezone(x.timezone); }
  if (x.timezoneOffset) { this.setTimezoneOffset(x.timezoneOffset); }
  return this;
}; Date.prototype.clearTime = function () { this.setHours(0); this.setMinutes(0); this.setSeconds(0); this.setMilliseconds(0); return this; }; Date.prototype.isLeapYear = function () { var y = this.getFullYear(); return (((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)); }; Date.prototype.isWeekday = function () { return !(this.is().sat() || this.is().sun()); }; Date.prototype.getDaysInMonth = function () { return Date.getDaysInMonth(this.getFullYear(), this.getMonth()); }; Date.prototype.moveToFirstDayOfMonth = function () { return this.set({ day: 1 }); }; Date.prototype.moveToLastDayOfMonth = function () { return this.set({ day: this.getDaysInMonth() }); }; Date.prototype.moveToDayOfWeek = function (day, orient) { var diff = (day - this.getDay() + 7 * (orient || +1)) % 7; return this.addDays((diff === 0) ? diff += 7 * (orient || +1) : diff); }; Date.prototype.moveToMonth = function (month, orient) { var diff = (month - this.getMonth() + 12 * (orient || +1)) % 12; return this.addMonths((diff === 0) ? diff += 12 * (orient || +1) : diff); }; Date.prototype.getDayOfYear = function () { return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000); }; Date.prototype.getWeekOfYear = function (firstDayOfWeek) {
  var y = this.getFullYear(), m = this.getMonth(), d = this.getDate(); var dow = firstDayOfWeek || Date.CultureInfo.firstDayOfWeek; var offset = 7 + 1 - new Date(y, 0, 1).getDay(); if (offset == 8) { offset = 1; }
  var daynum = ((Date.UTC(y, m, d, 0, 0, 0) - Date.UTC(y, 0, 1, 0, 0, 0)) / 86400000) + 1; var w = Math.floor((daynum - offset + 7) / 7); if (w === dow) { y--; var prevOffset = 7 + 1 - new Date(y, 0, 1).getDay(); if (prevOffset == 2 || prevOffset == 8) { w = 53; } else { w = 52; } }
  return w;
}; Date.prototype.isDST = function () { console.log('isDST'); return this.toString().match(/(E|C|M|P)(S|D)T/)[2] == "D"; }; Date.prototype.getTimezone = function () { return Date.getTimezoneAbbreviation(this.getUTCOffset, this.isDST()); }; Date.prototype.setTimezoneOffset = function (s) { var here = this.getTimezoneOffset(), there = Number(s) * -6 / 10; this.addMinutes(there - here); return this; }; Date.prototype.setTimezone = function (s) { return this.setTimezoneOffset(Date.getTimezoneOffset(s)); }; Date.prototype.getUTCOffset = function () { var n = this.getTimezoneOffset() * -10 / 6, r; if (n < 0) { r = (n - 10000).toString(); return r[0] + r.substr(2); } else { r = (n + 10000).toString(); return "+" + r.substr(1); } }; Date.prototype.getDayName = function (abbrev) { return abbrev ? Date.CultureInfo.abbreviatedDayNames[this.getDay()] : Date.CultureInfo.dayNames[this.getDay()]; }; Date.prototype.getMonthName = function (abbrev) { return abbrev ? Date.CultureInfo.abbreviatedMonthNames[this.getMonth()] : Date.CultureInfo.monthNames[this.getMonth()]; }; Date.prototype._toString = Date.prototype.toString;
Date.prototype.toString = function (format) {
  var self = this;
  var p = function p(s) {
    return (s.toString().length == 1) ? "0" + s : s;
  };
  return format ? format.replace(/\\h|\\H|\\m|\\s|\\y|\\d|\\M|\\t|\\z|\\|dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?|\\/g, function (format) {
    switch (format) {
      case "hh": return p(self.getHours() < 13 ? self.getHours() : (self.getHours() - 12));
      case "h": return self.getHours() < 13 ? self.getHours() : (self.getHours() - 12);
      case "HH": return p(self.getHours());
      case "H": return self.getHours();
      case "mm": return p(self.getMinutes());
      case "m": return self.getMinutes();
      case "ss": return p(self.getSeconds());
      case "s": return self.getSeconds();
      case "yyyy": return self.getFullYear();
      case "yy": return self.getFullYear().toString().substring(2, 4);
      case "dddd": return self.getDayName();
      case "ddd": return self.getDayName(true);
      case "dd": return p(self.getDate());
      case "d": return self.getDate().toString();
      case "MMMM": return self.getMonthName();
      case "MMM": return self.getMonthName(true);
      case "MM": return p((self.getMonth() + 1));
      case "M": return self.getMonth() + 1;
      case "t": return self.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
      case "tt": return self.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
      case "zzz":
      case "zz":
      case "z": return "";
      case "\\h": return "h";
      case "\\H": return "H";
      case "\\m": return "m";
      case "\\s": return "s";
      case "\\y": return "y";
      case "\\d": return "d";
      case "\\M": return "M";
      case "\\t": return "t";
      case "\\z": return "z";
      case "\\": return "";
    }
  }) : this._toString();
};
Date.now = function () { return new Date(); }; Date.today = function () { return Date.now().clearTime(); }; Date.prototype._orient = +1; Date.prototype.next = function () { this._orient = +1; return this; }; Date.prototype.last = Date.prototype.prev = Date.prototype.previous = function () { this._orient = -1; return this; }; Date.prototype._is = false; Date.prototype.is = function () { this._is = true; return this; }; Number.prototype._dateElement = "day"; Number.prototype.fromNow = function () { var c = {}; c[this._dateElement] = this; return Date.now().add(c); }; Number.prototype.ago = function () { var c = {}; c[this._dateElement] = this * -1; return Date.now().add(c); }; (function () {
  var $D = Date.prototype, $N = Number.prototype; var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/), mx = ("january february march april may june july august september october november december").split(/\s/), px = ("Millisecond Second Minute Hour Day Week Month Year").split(/\s/), de; var df = function (n) {
    return function () {
      if (this._is) { this._is = false; return this.getDay() == n; }
      return this.moveToDayOfWeek(n, this._orient);
    };
  }; for (var i = 0; i < dx.length; i++) { $D[dx[i]] = $D[dx[i].substring(0, 3)] = df(i); }
  var mf = function (n) {
    return function () {
      if (this._is) { this._is = false; return this.getMonth() === n; }
      return this.moveToMonth(n, this._orient);
    };
  }; for (var j = 0; j < mx.length; j++) { $D[mx[j]] = $D[mx[j].substring(0, 3)] = mf(j); }
  var ef = function (j) {
    return function () {
      if (j.substring(j.length - 1) != "s") { j += "s"; }
      return this["add" + j](this._orient);
    };
  }; var nf = function (n) { return function () { this._dateElement = n; return this; }; }; for (var k = 0; k < px.length; k++) { de = px[k].toLowerCase(); $D[de] = $D[de + "s"] = ef(px[k]); $N[de] = $N[de + "s"] = nf(de); }
} ()); Date.prototype.toJSONString = function () { return this.toString("yyyy-MM-ddThh:mm:ssZ"); }; Date.prototype.toShortDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern); }; Date.prototype.toLongDateString = function () { return this.toString(Date.CultureInfo.formatPatterns.longDatePattern); }; Date.prototype.toShortTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern); }; Date.prototype.toLongTimeString = function () { return this.toString(Date.CultureInfo.formatPatterns.longTimePattern); }; Date.prototype.getOrdinal = function () { switch (this.getDate()) { case 1: case 21: case 31: return "st"; case 2: case 22: return "nd"; case 3: case 23: return "rd"; default: return "th"; } };
(function () {
  Date.Parsing = { Exception: function (s) { this.message = "Parse error at '" + s.substring(0, 10) + " ...'"; } }; var $P = Date.Parsing; var _ = $P.Operators = { rtoken: function (r) { return function (s) { var mx = s.match(r); if (mx) { return ([mx[0], s.substring(mx[0].length)]); } else { throw new $P.Exception(s); } }; }, token: function (s) { return function (s) { return _.rtoken(new RegExp("^\s*" + s + "\s*"))(s); }; }, stoken: function (s) { return _.rtoken(new RegExp("^" + s)); }, until: function (p) {
    return function (s) {
      var qx = [], rx = null; while (s.length) {
        try { rx = p.call(this, s); } catch (e) { qx.push(rx[0]); s = rx[1]; continue; }
        break;
      }
      return [qx, s];
    };
  }, many: function (p) {
    return function (s) {
      var rx = [], r = null; while (s.length) {
        try { r = p.call(this, s); } catch (e) { return [rx, s]; }
        rx.push(r[0]); s = r[1];
      }
      return [rx, s];
    };
  }, optional: function (p) {
    return function (s) {
      var r = null; try { r = p.call(this, s); } catch (e) { return [null, s]; }
      return [r[0], r[1]];
    };
  }, not: function (p) {
    return function (s) {
      try { p.call(this, s); } catch (e) { return [null, s]; }
      throw new $P.Exception(s);
    };
  }, ignore: function (p) { return p ? function (s) { var r = null; r = p.call(this, s); return [null, r[1]]; } : null; }, product: function () {
    var px = arguments[0], qx = Array.prototype.slice.call(arguments, 1), rx = []; for (var i = 0; i < px.length; i++) { rx.push(_.each(px[i], qx)); }
    return rx;
  }, cache: function (rule) {
    var cache = {}, r = null; return function (s) {
      try { r = cache[s] = (cache[s] || rule.call(this, s)); } catch (e) { r = cache[s] = e; }
      if (r instanceof $P.Exception) { throw r; } else { return r; }
    };
  }, any: function () {
    var px = arguments; return function (s) {
      var r = null; for (var i = 0; i < px.length; i++) {
        if (px[i] == null) { continue; }
        try { r = (px[i].call(this, s)); } catch (e) { r = null; }
        if (r) { return r; }
      }
      throw new $P.Exception(s);
    };
  }, each: function () {
    var px = arguments; return function (s) {
      var rx = [], r = null; for (var i = 0; i < px.length; i++) {
        if (px[i] == null) { continue; }
        try { r = (px[i].call(this, s)); } catch (e) { throw new $P.Exception(s); }
        rx.push(r[0]); s = r[1];
      }
      return [rx, s];
    };
  }, all: function () { var px = arguments, _ = _; return _.each(_.optional(px)); }, sequence: function (px, d, c) {
    d = d || _.rtoken(/^\s*/); c = c || null; if (px.length == 1) { return px[0]; }
    return function (s) {
      var r = null, q = null; var rx = []; for (var i = 0; i < px.length; i++) {
        try { r = px[i].call(this, s); } catch (e) { break; }
        rx.push(r[0]); try { q = d.call(this, r[1]); } catch (ex) { q = null; break; }
        s = q[1];
      }
      if (!r) { throw new $P.Exception(s); }
      if (q) { throw new $P.Exception(q[1]); }
      if (c) { try { r = c.call(this, r[1]); } catch (ey) { throw new $P.Exception(r[1]); } }
      return [rx, (r ? r[1] : s)];
    };
  }, between: function (d1, p, d2) { d2 = d2 || d1; var _fn = _.each(_.ignore(d1), p, _.ignore(d2)); return function (s) { var rx = _fn.call(this, s); return [[rx[0][0], r[0][2]], rx[1]]; }; }, list: function (p, d, c) { d = d || _.rtoken(/^\s*/); c = c || null; return (p instanceof Array ? _.each(_.product(p.slice(0, -1), _.ignore(d)), p.slice(-1), _.ignore(c)) : _.each(_.many(_.each(p, _.ignore(d))), px, _.ignore(c))); }, set: function (px, d, c) {
    d = d || _.rtoken(/^\s*/); c = c || null; return function (s) {
      var r = null, p = null, q = null, rx = null, best = [[], s], last = false; for (var i = 0; i < px.length; i++) {
        q = null; p = null; r = null; last = (px.length == 1); try { r = px[i].call(this, s); } catch (e) { continue; }
        rx = [[r[0]], r[1]]; if (r[1].length > 0 && !last) { try { q = d.call(this, r[1]); } catch (ex) { last = true; } } else { last = true; }
        if (!last && q[1].length === 0) { last = true; }
        if (!last) {
          var qx = []; for (var j = 0; j < px.length; j++) { if (i != j) { qx.push(px[j]); } }
          p = _.set(qx, d).call(this, q[1]); if (p[0].length > 0) { rx[0] = rx[0].concat(p[0]); rx[1] = p[1]; }
        }
        if (rx[1].length < best[1].length) { best = rx; }
        if (best[1].length === 0) { break; }
      }
      if (best[0].length === 0) { return best; }
      if (c) {
        try { q = c.call(this, best[1]); } catch (ey) { throw new $P.Exception(best[1]); }
        best[1] = q[1];
      }
      return best;
    };
  }, forward: function (gr, fname) { return function (s) { return gr[fname].call(this, s); }; }, replace: function (rule, repl) { return function (s) { var r = rule.call(this, s); return [repl, r[1]]; }; }, process: function (rule, fn) { return function (s) { var r = rule.call(this, s); return [fn.call(this, r[0]), r[1]]; }; }, min: function (min, rule) {
    return function (s) {
      var rx = rule.call(this, s); if (rx[0].length < min) { throw new $P.Exception(s); }
      return rx;
    };
  }
  }; var _generator = function (op) {
    return function () {
      var args = null, rx = []; if (arguments.length > 1) { args = Array.prototype.slice.call(arguments); } else if (arguments[0] instanceof Array) { args = arguments[0]; }
      if (args) { for (var i = 0, px = args.shift(); i < px.length; i++) { args.unshift(px[i]); rx.push(op.apply(null, args)); args.shift(); return rx; } } else { return op.apply(null, arguments); }
    };
  }; var gx = "optional not ignore cache".split(/\s/); for (var i = 0; i < gx.length; i++) { _[gx[i]] = _generator(_[gx[i]]); }
  var _vector = function (op) { return function () { if (arguments[0] instanceof Array) { return op.apply(null, arguments[0]); } else { return op.apply(null, arguments); } }; }; var vx = "each any all".split(/\s/); for (var j = 0; j < vx.length; j++) { _[vx[j]] = _vector(_[vx[j]]); }
} ()); (function () {
  var flattenAndCompact = function (ax) {
    var rx = []; for (var i = 0; i < ax.length; i++) { if (ax[i] instanceof Array) { rx = rx.concat(flattenAndCompact(ax[i])); } else { if (ax[i]) { rx.push(ax[i]); } } }
    return rx;
  }; Date.Grammar = {}; Date.Translator = { hour: function (s) { return function () { this.hour = Number(s); }; }, minute: function (s) { return function () { this.minute = Number(s); }; }, second: function (s) { return function () { this.second = Number(s); }; }, meridian: function (s) { return function () { this.meridian = s.slice(0, 1).toLowerCase(); }; }, timezone: function (s) { return function () { var n = s.replace(/[^\d\+\-]/g, ""); if (n.length) { this.timezoneOffset = Number(n); } else { this.timezone = s.toLowerCase(); } }; }, day: function (x) { var s = x[0]; return function () { this.day = Number(s.match(/\d+/)[0]); }; }, month: function (s) { return function () { this.month = ((s.length == 3) ? Date.getMonthNumberFromName(s) : (Number(s) - 1)); }; }, year: function (s) { return function () { var n = Number(s); this.year = ((s.length > 2) ? n : (n + (((n + 2000) < Date.CultureInfo.twoDigitYearMax) ? 2000 : 1900))); }; }, rday: function (s) { return function () { switch (s) { case "yesterday": this.days = -1; break; case "tomorrow": this.days = 1; break; case "today": this.days = 0; break; case "now": this.days = 0; this.now = true; break; } }; }, finishExact: function (x) {
    x = (x instanceof Array) ? x : [x]; var now = new Date(); this.year = now.getFullYear(); this.month = now.getMonth(); this.day = 1; this.hour = 0; this.minute = 0; this.second = 0; for (var i = 0; i < x.length; i++) { if (x[i]) { x[i].call(this); } }
    this.hour = (this.meridian == "p" && this.hour < 13) ? this.hour + 12 : this.hour; if (this.day > Date.getDaysInMonth(this.year, this.month)) { throw new RangeError(this.day + " is not a valid value for days."); }
    var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second); if (this.timezone) { r.set({ timezone: this.timezone }); } else if (this.timezoneOffset) { r.set({ timezoneOffset: this.timezoneOffset }); }
    return r;
  }, finish: function (x) {
    x = (x instanceof Array) ? flattenAndCompact(x) : [x]; if (x.length === 0) { return null; }
    for (var i = 0; i < x.length; i++) { if (typeof x[i] == "function") { x[i].call(this); } }
    if (this.now) { return new Date(); }
    var today = Date.today(); var method = null; var expression = !!(this.days != null || this.orient || this.operator); if (expression) {
      var gap, mod, orient; orient = ((this.orient == "past" || this.operator == "subtract") ? -1 : 1); if (this.weekday) { this.unit = "day"; gap = (Date.getDayNumberFromName(this.weekday) - today.getDay()); mod = 7; this.days = gap ? ((gap + (orient * mod)) % mod) : (orient * mod); }
      if (this.month) { this.unit = "month"; gap = (this.month - today.getMonth()); mod = 12; this.months = gap ? ((gap + (orient * mod)) % mod) : (orient * mod); this.month = null; }
      if (!this.unit) { this.unit = "day"; }
      if (this[this.unit + "s"] == null || this.operator != null) {
        if (!this.value) { this.value = 1; }
        if (this.unit == "week") { this.unit = "day"; this.value = this.value * 7; }
        this[this.unit + "s"] = this.value * orient;
      }
      return today.add(this);
    } else {
      if (this.meridian && this.hour) { this.hour = (this.hour < 13 && this.meridian == "p") ? this.hour + 12 : this.hour; }
      if (this.weekday && !this.day) { this.day = (today.addDays((Date.getDayNumberFromName(this.weekday) - today.getDay()))).getDate(); }
      if (this.month && !this.day) { this.day = 1; }
      return today.set(this);
    }
  }
  }; var _ = Date.Parsing.Operators, g = Date.Grammar, t = Date.Translator, _fn; g.datePartDelimiter = _.rtoken(/^([\s\-\.\,\/\x27]+)/); g.timePartDelimiter = _.stoken(":"); g.whiteSpace = _.rtoken(/^\s*/); g.generalDelimiter = _.rtoken(/^(([\s\,]|at|on)+)/); var _C = {}; g.ctoken = function (keys) {
    var fn = _C[keys]; if (!fn) {
      var c = Date.CultureInfo.regexPatterns; var kx = keys.split(/\s+/), px = []; for (var i = 0; i < kx.length; i++) { px.push(_.replace(_.rtoken(c[kx[i]]), kx[i])); }
      fn = _C[keys] = _.any.apply(null, px);
    }
    return fn;
  }; g.ctoken2 = function (key) { return _.rtoken(Date.CultureInfo.regexPatterns[key]); }; g.h = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour)); g.hh = _.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/), t.hour)); g.H = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour)); g.HH = _.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour)); g.m = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.minute)); g.mm = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.minute)); g.s = _.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/), t.second)); g.ss = _.cache(_.process(_.rtoken(/^[0-5][0-9]/), t.second)); g.hms = _.cache(_.sequence([g.H, g.mm, g.ss], g.timePartDelimiter)); g.t = _.cache(_.process(g.ctoken2("shortMeridian"), t.meridian)); g.tt = _.cache(_.process(g.ctoken2("longMeridian"), t.meridian)); g.z = _.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/), t.timezone)); g.zz = _.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/), t.timezone)); g.zzz = _.cache(_.process(g.ctoken2("timezone"), t.timezone)); g.timeSuffix = _.each(_.ignore(g.whiteSpace), _.set([g.tt, g.zzz])); g.time = _.each(_.optional(_.ignore(_.stoken("T"))), g.hms, g.timeSuffix); g.d = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/), _.optional(g.ctoken2("ordinalSuffix"))), t.day)); g.dd = _.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/), _.optional(g.ctoken2("ordinalSuffix"))), t.day)); g.ddd = g.dddd = _.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"), function (s) { return function () { this.weekday = s; }; })); g.M = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/), t.month)); g.MM = _.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/), t.month)); g.MMM = g.MMMM = _.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month)); g.y = _.cache(_.process(_.rtoken(/^(\d\d?)/), t.year)); g.yy = _.cache(_.process(_.rtoken(/^(\d\d)/), t.year)); g.yyy = _.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/), t.year)); g.yyyy = _.cache(_.process(_.rtoken(/^(\d\d\d\d)/), t.year)); _fn = function () { return _.each(_.any.apply(null, arguments), _.not(g.ctoken2("timeContext"))); }; g.day = _fn(g.d, g.dd); g.month = _fn(g.M, g.MMM); g.year = _fn(g.yyyy, g.yy); g.orientation = _.process(g.ctoken("past future"), function (s) { return function () { this.orient = s; }; }); g.operator = _.process(g.ctoken("add subtract"), function (s) { return function () { this.operator = s; }; }); g.rday = _.process(g.ctoken("yesterday tomorrow today now"), t.rday); g.unit = _.process(g.ctoken("minute hour day week month year"), function (s) { return function () { this.unit = s; }; }); g.value = _.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/), function (s) { return function () { this.value = s.replace(/\D/g, ""); }; }); g.expression = _.set([g.rday, g.operator, g.value, g.unit, g.orientation, g.ddd, g.MMM]); _fn = function () { return _.set(arguments, g.datePartDelimiter); }; g.mdy = _fn(g.ddd, g.month, g.day, g.year); g.ymd = _fn(g.ddd, g.year, g.month, g.day); g.dmy = _fn(g.ddd, g.day, g.month, g.year); g.date = function (s) { return ((g[Date.CultureInfo.dateElementOrder] || g.mdy).call(this, s)); }; g.format = _.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function (fmt) { if (g[fmt]) { return g[fmt]; } else { throw Date.Parsing.Exception(fmt); } }), _.process(_.rtoken(/^[^dMyhHmstz]+/), function (s) { return _.ignore(_.stoken(s)); }))), function (rules) { return _.process(_.each.apply(null, rules), t.finishExact); }); var _F = {}; var _get = function (f) { return _F[f] = (_F[f] || g.format(f)[0]); }; g.formats = function (fx) {
    if (fx instanceof Array) {
      var rx = []; for (var i = 0; i < fx.length; i++) { rx.push(_get(fx[i])); }
      return _.any.apply(null, rx);
    } else { return _get(fx); }
  }; g._formats = g.formats(["yyyy-MM-ddTHH:mm:ss", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "d"]); g._start = _.process(_.set([g.date, g.time, g.expression], g.generalDelimiter, g.whiteSpace), t.finish); g.start = function (s) {
    try { var r = g._formats.call({}, s); if (r[1].length === 0) { return r; } } catch (e) { }
    return g._start.call({}, s);
  };
} ()); Date._parse = Date.parse; Date.parse = function (s) {
  var r = null; if (!s) { return null; }
  try { r = Date.Grammar.start.call({}, s); } catch (e) { return null; }
  return ((r[1].length === 0) ? r[0] : null);
}; Date.getParseFunction = function (fx) {
  var fn = Date.Grammar.formats(fx); return function (s) {
    var r = null; try { r = fn.call({}, s); } catch (e) { return null; }
    return ((r[1].length === 0) ? r[0] : null);
  };
}; Date.parseExact = function (s, fx) { return Date.getParseFunction(fx)(s); };;
/**
 * @license jahashtable, a JavaScript implementation of a hash table. It creates a single constructor function called
 * Hashtable in the global scope.
 *
 * http://www.timdown.co.uk/jshashtable/
 * Copyright 2013 Tim Down.
 * Version: 3.0
 * Build date: 17 July 2013
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Hashtable=function(t){function n(t){return typeof t==p?t:""+t}function e(t){var r;return typeof t==p?t:typeof t.hashCode==y?(r=t.hashCode(),typeof r==p?r:e(r)):n(t)}function r(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])}function i(t,n){return t.equals(n)}function u(t,n){return typeof n.equals==y?n.equals(t):t===n}function o(n){return function(e){if(null===e)throw new Error("null is not a valid "+n);if(e===t)throw new Error(n+" must not be undefined")}}function s(t,n,e,r){this[0]=t,this.entries=[],this.addEntry(n,e),null!==r&&(this.getEqualityFunction=function(){return r})}function a(t){return function(n){for(var e,r=this.entries.length,i=this.getEqualityFunction(n);r--;)if(e=this.entries[r],i(n,e[0]))switch(t){case E:return!0;case K:return e;case q:return[r,e[1]]}return!1}}function l(t){return function(n){for(var e=n.length,r=0,i=this.entries,u=i.length;u>r;++r)n[e+r]=i[r][t]}}function f(t,n){for(var e,r=t.length;r--;)if(e=t[r],n===e[0])return r;return null}function h(t,n){var e=t[n];return e&&e instanceof s?e:null}function c(){var n=[],i={},u={replaceDuplicateKey:!0,hashCode:e,equals:null},o=arguments[0],a=arguments[1];a!==t?(u.hashCode=o,u.equals=a):o!==t&&r(u,o);var l=u.hashCode,c=u.equals;this.properties=u,this.put=function(t,e){g(t),d(e);var r,o,a=l(t),f=null;return r=h(i,a),r?(o=r.getEntryForKey(t),o?(u.replaceDuplicateKey&&(o[0]=t),f=o[1],o[1]=e):r.addEntry(t,e)):(r=new s(a,t,e,c),n.push(r),i[a]=r),f},this.get=function(t){g(t);var n=l(t),e=h(i,n);if(e){var r=e.getEntryForKey(t);if(r)return r[1]}return null},this.containsKey=function(t){g(t);var n=l(t),e=h(i,n);return e?e.containsKey(t):!1},this.containsValue=function(t){d(t);for(var e=n.length;e--;)if(n[e].containsValue(t))return!0;return!1},this.clear=function(){n.length=0,i={}},this.isEmpty=function(){return!n.length};var y=function(t){return function(){for(var e=[],r=n.length;r--;)n[r][t](e);return e}};this.keys=y("keys"),this.values=y("values"),this.entries=y("getEntries"),this.remove=function(t){g(t);var e,r=l(t),u=null,o=h(i,r);return o&&(u=o.removeEntryForKey(t),null!==u&&0==o.entries.length&&(e=f(n,r),n.splice(e,1),delete i[r])),u},this.size=function(){for(var t=0,e=n.length;e--;)t+=n[e].entries.length;return t}}var y="function",p="string",v="undefined";if(typeof encodeURIComponent==v||Array.prototype.splice===t||Object.prototype.hasOwnProperty===t)return null;var g=o("key"),d=o("value"),E=0,K=1,q=2;return s.prototype={getEqualityFunction:function(t){return typeof t.equals==y?i:u},getEntryForKey:a(K),getEntryAndIndexForKey:a(q),removeEntryForKey:function(t){var n=this.getEntryAndIndexForKey(t);return n?(this.entries.splice(n[0],1),n[1]):null},addEntry:function(t,n){this.entries.push([t,n])},keys:l(0),values:l(1),getEntries:function(t){for(var n=t.length,e=0,r=this.entries,i=r.length;i>e;++e)t[n+e]=r[e].slice(0)},containsKey:a(E),containsValue:function(t){for(var n=this.entries,e=n.length;e--;)if(t===n[e][1])return!0;return!1}},c.prototype={each:function(t){for(var n,e=this.entries(),r=e.length;r--;)n=e[r],t(n[0],n[1])},equals:function(t){var n,e,r,i=this.size();if(i==t.size()){for(n=this.keys();i--;)if(e=n[i],r=t.get(e),null===r||r!==this.get(e))return!1;return!0}return!1},putAll:function(t,n){for(var e,r,i,u,o=t.entries(),s=o.length,a=typeof n==y;s--;)e=o[s],r=e[0],i=e[1],a&&(u=this.get(r))&&(i=n(r,u,i)),this.put(r,i)},clone:function(){var t=new c(this.properties);return t.putAll(this),t}},c.prototype.toQueryString=function(){for(var t,e=this.entries(),r=e.length,i=[];r--;)t=e[r],i[r]=encodeURIComponent(n(t[0]))+"="+encodeURIComponent(n(t[1]));return i.join("&")},c}();;
!function(e){function r(e,r,t){this.dec=e,this.group=r,this.neg=t}function t(){for(var e=0;e<s.length;e++)for(var r=s[e],t=0;t<r.length;t++)a.put(r[t],e)}function n(e,n){0==a.size()&&t();var i=".",o=",",l="-";0==n&&(-1!=e.indexOf("_")?e=e.split("_")[1].toLowerCase():-1!=e.indexOf("-")&&(e=e.split("-")[1].toLowerCase()));var u=a.get(e);if(u){var s=f[u];s&&(i=s[0],o=s[1])}return new r(i,o,l)}var a=new Hashtable,i=["ae","au","ca","cn","eg","gb","hk","il","in","jp","sk","th","tw","us"],o=["at","br","de","dk","es","gr","it","nl","pt","tr","vn"],l=["bg","cz","fi","fr","no","pl","ru","se"],u=["ch"],f=[[".",","],[",","."],[","," "],[".","'"]],s=[i,o,l,u];e.fn.formatNumber=function(r,t,n){return this.each(function(){null==t&&(t=!0),null==n&&(n=!0);var a;a=e(this).is(":input")?new String(e(this).val()):new String(e(this).text());var i=e.formatNumber(a,r);return t&&(e(this).is(":input")?e(this).val(i):e(this).text(i)),n?i:void 0})},e.formatNumber=function(r,t){for(var t=e.extend({},e.fn.formatNumber.defaults,t),a=n(t.locale.toLowerCase(),t.isFullLocale),i=(a.dec,a.group,a.neg,"0#-,."),o="",l=!1,u=0;u<t.format.length;u++){if(-1!=i.indexOf(t.format.charAt(u))){if(0==u&&"-"==t.format.charAt(u)){l=!0;continue}break}o+=t.format.charAt(u)}for(var f="",u=t.format.length-1;u>=0&&-1==i.indexOf(t.format.charAt(u));u--)f=t.format.charAt(u)+f;t.format=t.format.substring(o.length),t.format=t.format.substring(0,t.format.length-f.length);var s=new Number(r);return e._formatNumber(s,t,f,o,l)},e._formatNumber=function(r,t,a,i,o){var t=e.extend({},e.fn.formatNumber.defaults,t),l=n(t.locale.toLowerCase(),t.isFullLocale),u=l.dec,f=l.group,s=l.neg;null!=t.overrideGroupSep&&(f=t.overrideGroupSep),null!=t.overrideDecSep&&(u=t.overrideDecSep),null!=t.overrideNegSign&&(s=t.overrideNegSign);var c=!1;if(isNaN(r)){if(1!=t.nanForceZero)return"";r=0,c=!0}(1==t.isPercentage||t.autoDetectPercentage&&"%"==a.charAt(a.length-1))&&(r=100*r);var g="";if(t.format.indexOf(".")>-1){var h=u,d=t.format.substring(t.format.lastIndexOf(".")+1);if(1==t.round)r=new Number(r.toFixed(d.length));else{var m=r.toString();m.lastIndexOf(".")>0&&(m=m.substring(0,m.lastIndexOf(".")+d.length+1)),r=new Number(m)}var v=new Number(r.toString().substring(r.toString().indexOf(".")));decimalString=new String(v.toFixed(d.length)),decimalString=decimalString.substring(decimalString.lastIndexOf(".")+1);for(var p=0;p<d.length;p++)if("#"!=d.charAt(p)||"0"==decimalString.charAt(p)){if("#"==d.charAt(p)&&"0"==decimalString.charAt(p)){var S=decimalString.substring(p);if(S.match("[1-9]")){h+=decimalString.charAt(p);continue}break}"0"==d.charAt(p)&&(h+=decimalString.charAt(p))}else h+=decimalString.charAt(p);g+=h}else r=Math.round(r);var b=Math.floor(r);0>r&&(b=Math.ceil(r));var x="";x=-1==t.format.indexOf(".")?t.format:t.format.substring(0,t.format.indexOf("."));var N="";if(0!=b||"#"!=x.substr(x.length-1)||c){var w=new String(Math.abs(b)),A=9999;-1!=x.lastIndexOf(",")&&(A=x.length-x.lastIndexOf(",")-1);for(var O=0,p=w.length-1;p>-1;p--)N=w.charAt(p)+N,O++,O==A&&0!=p&&(N=f+N,O=0);if(x.length>N.length){var F=x.indexOf("0");if(-1!=F)for(var D=x.length-F,L=x.length-N.length-1;N.length<D;){var P=x.charAt(L);","==P&&(P=f),N=P+N,L--}}}return N||-1===x.indexOf("0",x.length-1)||(N="0"),g=N+g,0>r&&o&&i.length>0?i=s+i:0>r&&(g=s+g),t.decimalSeparatorAlwaysShown||g.lastIndexOf(u)==g.length-1&&(g=g.substring(0,g.length-1)),g=i+g+a},e.fn.parseNumber=function(r,t,n){null==t&&(t=!0),null==n&&(n=!0);var a;a=e(this).is(":input")?new String(e(this).val()):new String(e(this).text());var i=e.parseNumber(a,r);return i&&(t&&(e(this).is(":input")?e(this).val(i.toString()):e(this).text(i.toString())),n)?i:void 0},e.parseNumber=function(r,t){var t=e.extend({},e.fn.parseNumber.defaults,t),a=n(t.locale.toLowerCase(),t.isFullLocale),i=a.dec,o=a.group,l=a.neg;null!=t.overrideGroupSep&&(o=t.overrideGroupSep),null!=t.overrideDecSep&&(i=t.overrideDecSep),null!=t.overrideNegSign&&(l=t.overrideNegSign);for(var u="1234567890",f=".-",s=t.strict;r.indexOf(o)>-1;)r=r.replace(o,"");r=r.replace(i,".").replace(l,"-");var c="",g=!1;(1==t.isPercentage||t.autoDetectPercentage&&"%"==r.charAt(r.length-1))&&(g=!0);for(var h=0;h<r.length;h++)if(u.indexOf(r.charAt(h))>-1)c+=r.charAt(h);else if(f.indexOf(r.charAt(h))>-1)c+=r.charAt(h),f=f.replace(r.charAt(h),"");else{if(t.allowPostfix)break;if(s){c="NaN";break}}var d=new Number(c);if(g){d/=100;var m=c.indexOf(".");if(-1!=m){var v=c.length-m-1;d=d.toFixed(v+2)}else d=d.toFixed(2)}return d},e.fn.parseNumber.defaults={locale:"us",decimalSeparatorAlwaysShown:!1,isPercentage:!1,autoDetectPercentage:!0,isFullLocale:!1,strict:!1,overrideGroupSep:null,overrideDecSep:null,overrideNegSign:null,allowPostfix:!1},e.fn.formatNumber.defaults={format:"#,###.00",locale:"us",decimalSeparatorAlwaysShown:!1,nanForceZero:!0,round:!0,isFullLocale:!1,overrideGroupSep:null,overrideDecSep:null,overrideNegSign:null,isPercentage:!1,autoDetectPercentage:!0},Number.prototype.toFixed=function(r){return e._roundNumber(this,r)},e._roundNumber=function(e,r){var t=Math.pow(10,r||0),n=String(Math.round(e*t)/t);if(r>0){var a=n.indexOf(".");for(-1==a?(n+=".",a=0):a=n.length-(a+1);r>a;)n+="0",a++}return n}}(jQuery);;
namespace('nms.altitude', function (undefined) {
  /// indique si l'élément est un nombre.
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  // Note(Slepine) : Vincent et moi savont que ceci ne fonctionne seulement que pour les CustomFieldValues
  // Field contenant la regex de date
  var _dateReg = /^(\d{4})[./-](\d{2})[./-](\d{2}) (\d{2}):(\d{2}):(\d{2})$/;

  /// indique si l'élément est une date.
  function isDate(date, _setter) {
    // Effectue les validation de base
    var result = date instanceof Date && !isNaN(date.valueOf());

    // Valide le résultat
    if (!result) {
      // Execute la regex
      var match = _dateReg.exec(date);

      // S'il y a un match
      if (match != null) {
        // Valide qu'il y a un setter
        if (_setter) {
          // Exécute le Setter
          _setter(new Date(match[1], (match[2] - 1), match[3], match[4], match[5], match[6]));
        }

        // Définit que la date fonctionne
        result = true;
      }
    }

    // Retourne le résultat
    return result
  }

  // indique si une valeur est booleans
  function isBoolean(value) {
    if (value) {
      return value.toString().toLowerCase() == "true" || value.toString().toLowerCase() == "false";
    }
    return false;
  }

  //Indique si une valeur est vide 
  function isEmpty(value, considerZeroAsEmpty) {
    return value == null || value === "" || (considerZeroAsEmpty && +value === 0);
  }

  // Format une taille pour que ce soit lisible
  function getReadableFileSizeString(fileSizeInBytes) {
    var i = -1;
    var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);

    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };

  // indique si une valeur contient du html
  function isHtml(value) {
    return /<[a-z][\s\S]*>/i.test(value);
  }

  this.BrokerTemplateHelper = this.BrokerTemplateHelper ||
     {
       /// extrait les brokers du template.
       extractBrokers: function ($clone, additionnalBrokerSelector, data, dataIdPropertyName) {
         // liste des brokers customfields et properties
         var brokers = {
           customFields: {},
           properties: {}
         };
         // recherche les brokers
         $clone.find("[data-broker]" + additionnalBrokerSelector).each(function (index, elem) {

           // On vérifie si le parent est bien l'élément à modifié
           if (dataIdPropertyName == null || (data != null && data[dataIdPropertyName] != undefined && $(elem).parents("[data-Identifier]:first").attr("data-Identifier") === data[dataIdPropertyName])) {
             // pour chaque broker, récupère la configuration
             var config = JSON.parse($(this).attr("data-broker"));
             // si on a pas de propriété on est un customfield
             if (config.PropertyName == 0) {
               // customfield
               if (!brokers.customFields.hasOwnProperty(config.CustomFieldGuid)) {
                 // crée l'élément dans la liste.
                 brokers.customFields[config.CustomFieldGuid] = [];
               }
               // pousse le customfieldé
               brokers.customFields[config.CustomFieldGuid].push({ broker: this, valuePropertyName: (config.ResultValuePropertyName && config.ResultValuePropertyName != "" ? config.ResultValuePropertyName : null) });
             }
             else {
               // propriété
               if (!brokers.properties.hasOwnProperty(config.PropertyName)) {
                 // crée la liste pour cette propriété
                 brokers.properties[config.PropertyName] = [];
               }
               // ajoute la propriété
               brokers.properties[config.PropertyName].push({ broker: this, valuePropertyName: (config.ResultValuePropertyName && config.ResultValuePropertyName != "" ? config.ResultValuePropertyName : null) });
             }
           }
         });

         function appendCustomField() {
           var $this = $(this),
             dynamicClassNames = $this.attr('data-dynamicClassNames');
           $.each(dynamicClassNames.split(' '), function (index, item) {
             var config = item.split('|');
             if (config.length == 2) {
               var props = config[1].split(":");
               if (props.length == 2 && props[1] != '00000000-0000-0000-0000-000000000000') {
                 if (!brokers.customFields.hasOwnProperty(props[1])) {
                   brokers.customFields[props[1]] = [];
                 }
               }
             }
           });
         };

         if ($clone.is('[data-dynamicClassNames]')) {
           appendCustomField.call($clone[0]);
         }

         // extrait les customfields des classnames dynamiques
         $clone.find('[data-dynamicClassNames]').each(appendCustomField);

         return brokers;
       },
       /// extrait les propriétés additionnelles du template.
       extractCustomDatas: function ($clone, additionnalBrokerSelector, data, dataIdPropertyName) {
         // Liste des propriétés additionnelles
         var customDatas = [];
         //Note(SJOYAL) : Supporter le additionnalBrokerSelector au besoin. Actuellement non valide car j'envois des selecteurs associé aux broker. Ex: Créé un nouveau data-attribute customIdentifier et y mettre la meme valeur que le brokerIdentifier puis ajouter le data-attribute a tout les controles avec du customdata?
         // recherche les propriétés additionnelles
         $clone.find("[data-setValueDelegate]").each(function (index, elem) {
           // On vérifie si le parent est bien l'élément à modifié
           if (dataIdPropertyName == null || (data != null && data[dataIdPropertyName] != undefined && $(elem).parents("[data-Identifier]:first").attr("data-Identifier") === data[dataIdPropertyName])) {
             var setValueString = $(this).attr("data-setValueDelegate"),
                 setValueDelegate = null;

             // Si on a une fonction a appelé pour l'initialisation on l'ajoute a la liste
             if (setValueString != null && setValueString != "") {
               setValueDelegate = new Function("item, data", setValueString + "(item, data);");
               customDatas.push({ elem: this, setValueDelegate: setValueDelegate });
             }
           }
         });

         return customDatas;
       },
       /// applique le template pour un élément de data.
       applyDataToElement: function (config) {
         // Initialisation des variables pouvant provenir de la config (des arguments)
         var data = config.data ? config.data : null,
           $clone = config.$clone ? config.$clone : null,
           propertyTypes = config.propertyTypes ? config.propertyTypes : null,
           urlPropertyName = config.urlPropertyName ? config.urlPropertyName : null,
           displayResultImage = typeof config.displayResultImage === 'boolean' ? config.displayResultImage : true,
           setImagePropertiesDelegate = config.setImagePropertiesDelegate ? config.setImagePropertiesDelegate : null,
           brokerIdentifierPrefix = config.brokerIdentifierPrefix ? config.brokerIdentifierPrefix : null,
           dataIdPropertyName = config.dataIdPropertyName ? config.dataIdPropertyName : null,
           targetBlank = config.targetBlank ? config.targetBlank : false,
           // Initialisation des variables internes
           additionnalBrokerSelector = brokerIdentifierPrefix != null && brokerIdentifierPrefix.length > 0 ? "[brokeridentifier^=" + brokerIdentifierPrefix + "]" : "",
           exclusionSelector = function () { return true; },
           brokers = {},
           customDatas = {};

         if (config.exclusionClassName) {
           exclusionSelector = function () { return $(this).closest("." + config.exclusionClassName).length == 0 };
         }

         function applyDynamicClassName() {
           var $this = $(this),
             dynamicClassNames = $this.attr('data-dynamicClassNames');
           // pas de dynamic classnames sans customfields.
           if (data && data.CustomFieldValues) {
             // classnames sur les propriétés
             for (var prop in propertyTypes) {
               (function (propertyType, value) {
                 var find = '|' + propertyType + ':00000000-0000-0000-0000-000000000000';
                 while (dynamicClassNames.indexOf(find) >= 0) {
                   dynamicClassNames = dynamicClassNames.replace(find, value.toString().replace(/\W/g, ''));
                 }
               })(propertyTypes[prop], data[prop]);
             }
             // classnames sur les customfields.
             for (var cfIndex = 0; cfIndex < data.CustomFieldValues.length; cfIndex++) {
               (function (identifierGuid, value) {
                 var find = '|0:' + identifierGuid;
                 while (dynamicClassNames.indexOf(find) >= 0) {
                   dynamicClassNames = dynamicClassNames.replace(find, value.toString().replace(/\W/g, ''));
                 }
               })(data.CustomFieldValues[cfIndex].CustomFieldGuid, data.CustomFieldValues[cfIndex].Value);
             }

             $this[0].className = $this.attr("data-staticClassNames") + ' ' + dynamicClassNames;
           }
         };

         if ($clone != null && $clone.length > 0) {

           if ($clone.filter(exclusionSelector).is('[data-dynamicClassNames]')) {
             applyDynamicClassName.call($clone[0]);
           }
           // remplace les clasnames dynamiques
           $clone.find('[data-dynamicClassNames]').filter(exclusionSelector).each(applyDynamicClassName);

           if (data != null && dataIdPropertyName != null && typeof (data[dataIdPropertyName]) !== "undefined" && data[dataIdPropertyName] != null) {
             // On stocke l'identifiant de l'élément dans la zone parent
             $clone.attr("data-Identifier", data[dataIdPropertyName]);
           }

           // recherche les brokers à remplir
           brokers = nms.altitude.BrokerTemplateHelper.extractBrokers($clone, additionnalBrokerSelector, data, dataIdPropertyName);

           // recherche les propriétés additionnelles
           customDatas = nms.altitude.BrokerTemplateHelper.extractCustomDatas($clone, additionnalBrokerSelector, data, dataIdPropertyName);

           // vide le contenu du broker     
           for (var broker in brokers.properties) {
             $(brokers.properties[broker]).empty();
           }

           for (var broker in brokers.customFields) {
             $(brokers.customFields[broker]).empty();
           }

           if (data != null) {
             // set l'url des liens
             $clone.find("a[data-link]" + additionnalBrokerSelector).each(function (ix, elem) {
               var config = null,
                 customFieldValueFiltered,
                 customFieldValue,
                 mediaType;

               // On vérifie si le parent est bien l'élément à modifié
               if (dataIdPropertyName == null || (data != null && data[dataIdPropertyName] != undefined && $(elem).parents("[data-Identifier]:first").attr("data-Identifier") === data[dataIdPropertyName])) {
                 if ($(this).attr("data-link-config")) {
                   config = JSON.parse($(this).attr("data-link-config"));
                 }

                 if (config && config.CustomFieldGuid) {
                   customFieldValueFiltered = $.grep(data.CustomFieldValues, function (item) { return item.CustomFieldGuid == config.CustomFieldGuid; });

                   if (customFieldValueFiltered.length) {
                     customFieldValue = customFieldValueFiltered[0].Value;
                   }

                   if (customFieldValue) {

                     // Si on est un hyperlink
                     if (customFieldValue.ContentType === 5) {
                       if (typeof (customFieldValue.HyperLinkType) != "undefined") {
                         $(elem).attr('href', customFieldValue.Href);
                         if (config.UseLinkAsText && !config.HideLinkPrefix) {
                           $(elem).text(customFieldValue.Href);
                         } else if (config.UseLinkAsText && config.HideLinkPrefix) {
                           var url = customFieldValue.Href;
                           url = url.replace("http://", "");
                           url = url.replace("https://", "");
                           url = url.replace("mailto:", "");
                           $(elem).text(url);
                         }
                       }
                     } else {
                       //todo getMediaType from int
                       switch (customFieldValue.ContentType) {
                         case 0:
                           mediaType = "Image";
                           break;
                         case 1:
                           mediaType = "Audio";
                           break;
                         case 2:
                           mediaType = "Video";
                           break;
                         case 4:
                           mediaType = "Document";
                           break;
                         case 7:
                           mediaType = "Flash";
                           break;
                       }

                       $(elem).attr('href', "/" + Altitude3_LongCultureID + "/gpc/_media/" + mediaType + "/" + customFieldValue.ItemFileName + customFieldValue.ItemFileExtension);
                     }
                   } else {
                     $(this).removeAttr('href');
                   }
                 } else if (urlPropertyName != null) {
                   $(elem).attr('href', data[urlPropertyName]);
                 }
               }
             });

             // Transforme les valeurs des unités de mesure
             function getUnitStringValue(property, unitEnum) {
               if (brokers.properties[propertyTypes[property]]) {
                 for (unit in unitEnum) {
                   if (unitEnum[unit] == data[property]) {
                     data[property] = unit;
                   }
                 }
               }
             }

             getUnitStringValue("WeightUnit", NmsWeightUnitEnum);
             getUnitStringValue("DephtUnit", NmsLengthUnitEnum);
             getUnitStringValue("HeightUnit", NmsLengthUnitEnum);
             getUnitStringValue("WidthUnit", NmsLengthUnitEnum);
             

             if (propertyTypes != null) {
               // pour chaque propriété, on applique  le texte au broker.
               for (var name in data) {
                 if (brokers.properties[propertyTypes[name]]) {
                   $.map(brokers.properties[propertyTypes[name]], function (item) {
                     nms.altitude.BrokerTemplateHelper.applySingleDataValueToElement($(item.broker), data[name], item.valuePropertyName, data[urlPropertyName], setImagePropertiesDelegate, targetBlank, $clone);
                   });
                 }
               }
             }

             // pour chaque customfield on applique le texte au broker.
             if (data.CustomFieldValues) {
               for (var cfIndex = 0; cfIndex < data.CustomFieldValues.length; cfIndex++) {
                 if (brokers.customFields[data.CustomFieldValues[cfIndex].CustomFieldGuid]) {

                   $.map(brokers.customFields[data.CustomFieldValues[cfIndex].CustomFieldGuid], function (item) {
                     nms.altitude.BrokerTemplateHelper.applySingleDataValueToElement($(item.broker), data.CustomFieldValues[cfIndex].Value, item.valuePropertyName, data[urlPropertyName], setImagePropertiesDelegate, targetBlank, $clone);
                   });
                 }
               }
             }

             // pour chaque propriété aditionnelle avec un fonctionnement particulier (ex: rating)
             for (var cdIndex = 0; cdIndex < customDatas.length; cdIndex++) {
               customDatas[cdIndex].setValueDelegate(customDatas[cdIndex].elem, data);
             }

             // on enleve les brokers vides.
             $clone.find(additionnalBrokerSelector + "[data-broker]:empty, [data-pricingBroker]:empty").each(function () {
               var $broker = $(this),
                   deleteParentZone = $broker.attr("data-deleteParentZone") === "true",
                   deleteParentTableRow = $broker.attr("data-deleteParentTableRow") === "true";

               if ($broker.is('img')) {
                 // si c'est un broker d'image on met l'image pas d'image.
                 if (!$broker.attr('src') && displayResultImage) {
                   $broker.attr('src', '/_images/NoImage.png');
                 }

                 // Note(Slepine) : Le ProductImageBroker utilise l'attribute imgBroker, tandis que le ProductLink utilise l'attribute link && link-config pour effectuer leur gestion de liens
                 //                 Donc ici nous visons seulement les image NoImage qui ont un liens définit comme parent.
                 if ($broker.parent().is("a[data-imgBroker]") && !$broker.parent().attr("href")) {
                   $broker.parent().attr({
                     href: data.ProductModelUrl
                   });
                 }

               }
               else {
                 // On cache les zones parents au besoin
                 if (deleteParentZone || deleteParentTableRow) {
                   if (deleteParentZone) {
                     $broker.parents(".forBroker:first").hide();
                   }
                   if (deleteParentTableRow) {
                     $broker.parents("tr:first").hide();
                   }
                 } else {
                   // On ca cache le broker
                   $broker.hide();
                 }

                 if ($broker.attr("data-deleteClassName")) {
                   $clone.find("." + $broker.attr("data-deleteClassName")).hide();
                 }
               }
             });
           }
         }
       },
       applySingleDataValueToElement: function ($item, value, valuePropertyName, dataUrl, setImagePropertiesDelegate, targetBlank, $parentZone) {
         var valueFormat = $item.attr("data-format"),
             valueAsHtml = $item.attr("data-valueAsHtml"),
             considerZeroAsEmpty = $item.attr("data-considerZeroAsEmpty") === "true",
             deleteParentZone = $item.attr("data-deleteParentZone") === "true",
             deleteParentTableRow = $item.attr("data-deleteParentTableRow") === "true",
             classNameToDelete = $item.attr("data-deleteClassName"),
             value = typeof (value) !== "undefined" ? value : null,
             firstParent = $item.parents(":first"),
             conf = null,
             formatValue = null;

         // On vérifie si on doit extraire une propriété particuliere de la valeur
         if (!isEmpty(value, considerZeroAsEmpty) && valuePropertyName != null && valuePropertyName != "") {
           value = value[valuePropertyName] || "";

           // Si notre sous propriété est un nombre et que c'est la taille on la format
           if (isNumber(value)) {
             if (+value && valuePropertyName.toLowerCase() === "size" || valuePropertyName.toLowerCase() === "filesize") {
               value = getReadableFileSizeString(value);
             }
           }
         }

         if (!isEmpty(value, considerZeroAsEmpty)) {
           // applique les valeurs à l'image
           if ($item.is("img")) {
             if (!isEmpty(dataUrl) && $item.parent().is("a[data-imgBroker]")) {
               $item.parent().attr({
                 href: dataUrl
               });
               if (targetBlank) {
                 $item.parent().attr('target', '_blank');
               }
             }

             // vide l'url de l'image
             $item.attr('src', '');
             // applique les valeurs à l'image
             if (typeof (value.ContentType) != "undefined" && value.ContentType === 0) {
               if (setImagePropertiesDelegate != null) {
                 conf = $item.attr("data-categorizedConfig");
                 conf = ((conf != null && conf != "null" && conf.length) ? JSON.parse(conf)[0] : null);
                 setImagePropertiesDelegate($item, value, conf);
               }
             }

             // ajoute l'url si on est un lien.
             if (firstParent.is("a")) {
               // Note(Slepine): Dans le cas que l'on a une image avec un liens déjà définit par un broker, on veut garder ce liens
               // Valide s'il y a un HRef possède déjà un lien
               if (firstParent.attr("href") == null && !isEmpty(dataUrl)) {
                 firstParent.attr({
                   href: dataUrl
                 });
                 if (targetBlank) {
                   firstParent.attr('target', '_blank');
                 }
               }
             }

             // Format de base pour gérer les valeurs en texte
           } else {
             // ajoute l'url de la page si on est un lien.
             if (!isEmpty(dataUrl) && $item.is("a")) {
               $item.attr({
                 href: dataUrl
               });
               if (targetBlank) {
                 $item.attr('target', '_blank');
               }
             }

             // format html seulement si on a spécifié qu'on le voulait     
             if (valueAsHtml && valueAsHtml.toLowerCase() === "true" && isHtml(value)) {
               $item.html(value);
               $item.show();
             } else {
               // On affiche les parents du broker
               if (deleteParentZone || deleteParentTableRow) {
                 if (deleteParentZone) {
                   $item.parents(".forBroker:first").show();
                 }
                 if (deleteParentTableRow) {
                   $item.parents("tr:first").show();
                 }
               } else {
                 $item.show();
               }

               if (classNameToDelete) {
                 $parentZone.find("." + classNameToDelete).show();
               }

               $item.text(value);

               // applique le format de valeur.
               if (valueFormat) {
                 // format de nombre
                 if (isNumber(value)) {
                   if (+value || +value === 0) {
                     $item.formatNumber({ format: valueFormat, locale: Altitude3_ShortCultureID });
                   }
                   else {
                     $item.text('');
                   }

                 } // format de date 
                 else if (isDate(value, function (dateValue) { value = dateValue; })) {
                   $item.text(value.toString(valueFormat));

                 } // format boolean (remplacement de valeur)
                 else if (isBoolean(value)) {
                   // valide si le valueformate est du json (format booléan pour le moment)
                   try {
                     formatValue = JSON.parse(valueFormat);
                     if (formatValue[value]) {
                       $item.text(formatValue[value]);
                     }
                   } catch (e) {
                     // on ne fait rien
                   }
                 }
               } // Si c'est une date mais sans formattage
               else if (isDate(value, function (dateValue) { value = dateValue; })) {
                 $item.text(value.toString());
               }
             }
           }
         } else if (!$item.is("img")) {
           $item.text('');
         }
         else {
           $item.attr('src', '');
         }
       },
       getCustomFieldGuids: function ($element) {
         var guids = $element.find('.CustomFieldSelector').map(function (index, item) {
           return nms.altitude.BrokerTemplateHelper.getCustomFieldGuid($(item));
         }).toArray();
         $("[data-broker]").each(function (index) {
           // pour chaque broker, récupère la configuration
           var config = JSON.parse($(this).attr("data-broker"));
           // si on a pas de propriété on est un customfield
           if (config.PropertyName == 0) {
             // customfield
             guids.push(config.CustomFieldGuid);
           }
         });

         // Retrouve les liens de produits et ajoute leurs customfield dans la liste
         $("[data-link-config]").each(function () {
           var config = JSON.parse($(this).attr("data-link-config"));
           if (!$.map(guids, function (item) { if (config.CustomFieldGuid == item) { return item; } }).length) {
             guids.push(config.CustomFieldGuid);
           }
         });

         // ajoute a la liste de guids de customfields les customfields configurés sur les classnames dynamiques
         function appendCustomField() {
           var $this = $(this),
             dynamicClassNames = $this.attr('data-dynamicClassNames');
           $.each(dynamicClassNames.split(' '), function (index, item) {
             var config = item.split('|');
             if (config.length == 2) {
               var props = config[1].split(":");
               if (props.length == 2 && props[1] != '00000000-0000-0000-0000-000000000000') {
                 guids.push(props[1]);
               }
             }
           })
         }

         // extrait les customfields des classnames dynamiques
         $('[data-dynamicClassNames]').each(appendCustomField);

         return guids;
       },
       // retourne un guid de champs personnalisé a partir d'un élément.
       getCustomFieldGuid: function ($cf) {
         var configStr = $cf.attr('data-config'),
              config = (configStr) ? JSON.parse(configStr) : null;

         if (config && config.Facet) {
           return config.Facet.IdentifierGuid;
         }

         return null;
       }
     };



  // retorune le constructeur.
  this.BrokerTemplate = this.BrokerTemplate || function ($templateContainer, noDataText, config) {
    var self = this,
      // Initialisation des variables pouvant provenir de la config (des arguments)
      urlPropertyName = config.urlPropertyName ? config.urlPropertyName : null,
      propertyTypes = config.propertyTypes ? config.propertyTypes : null,
      displayResultImage = typeof config.displayResultImage === 'boolean' ? config.displayResultImage : true,
      setImagePropertiesDelegate = config.setImagePropertiesDelegate ? config.setImagePropertiesDelegate : null,
      brokerIdentifierPrefix = config.brokerIdentifierPrefix ? config.brokerIdentifierPrefix : null,
      dataIdPropertyName = config.dataIdPropertyName ? config.dataIdPropertyName : null;

    // s'assure que le text n'est pas null sinon il ne s'applique pas.
    noDataText = noDataText ? noDataText : '';

    // Valide si les Children ont été trouvé
    if ($templateContainer.children().length == 0) {
      // Force la résolution à nouveau du sélecteur
      $templateContainer = $($templateContainer.selector);
    }

    // container du template
    self.$container = $templateContainer;

    // template à cloner
    self.$template = $templateContainer.children(":first").detach();

    // vide les url d'images.
    self.$template.find('img[data-broker]').attr('src', '');

    self.$container.show();

    /// retourne les customfieldguids dans le template.
    self.extractCustomFieldGuids = function () {
      var customFieldGuids = [];
      // recherche les broker
      self.$template.find("[data-broker]").each(function () {
        var config = JSON.parse($(this).attr("data-broker"));
        if (config.PropertyName == 0 && !$.map(customFieldGuids, function (item) { if (config.CustomFieldGuid == item) { return item; } }).length) {
          // customfield
          customFieldGuids.push(config.CustomFieldGuid);
        }
      });

      self.$template.find("[data-link-config]").each(function () {
        var config = JSON.parse($(this).attr("data-link-config"));
        if (!$.map(customFieldGuids, function (item) { if (config.CustomFieldGuid == item) { return item; } }).length) {
          // customfield
          customFieldGuids.push(config.CustomFieldGuid);
        }
      });

      function appendCustomField() {
        var $this = $(this),
          dynamicClassNames = $this.attr('data-dynamicClassNames');
        $.each(dynamicClassNames.split(' '), function (index, item) {
          var config = item.split('|');
          if (config.length == 2) {
            var props = config[1].split(":");
            if (props.length == 2 && props[1] != '00000000-0000-0000-0000-000000000000') {
              customFieldGuids.push(props[1]);
            }
          }
        });
      }

      if (self.$template.is('[data-dynamicClassNames]')) {
        appendCustomField.call(self.$template[0]);
      }

      // extrait les customfields des classnames dynamiques
      self.$template.find('[data-dynamicClassNames]').each(appendCustomField);

      return customFieldGuids;
    }

    /// retourne les arguments des propriétés additionnelle dans le template.
    self.extractCustomDataArgs = function () {
      var customDataArgs = {};

      // On retrouve et on appel les fonctions pour retrouvés les arguments
      self.$template.find("[data-appendQueryArgsDelegate]").each(function () {
        var appendArgsString = $(this).attr("data-appendQueryArgsDelegate"),
            appendArgsDelegate = null;

        if (appendArgsString != null) {
          appendArgsDelegate = new Function("item, args", "return " + appendArgsString + "(item, args);");
          $.extend(customDataArgs, appendArgsDelegate(this, customDataArgs));
        }
      });

      return customDataArgs;
    };

    /// applique le template pour la liste de data.
    self.applyTemplate = function (dataList) {

      // vide le container
      self.$container.empty();
      // crée le template pour chaque élément de la liste.
      for (var i = 0; i < dataList.length; i++) {
        self.applySingleTemplate(dataList[i]);
      }
      // lance l'évenement de templating completed
      self.$container.trigger("templatingCompleted");
    };

    /// affiche le texte no results.
    self.applyNoDataFound = function () {
      self.$container.text(noDataText);
      self.$container.trigger("noDataFound");
    };

    /// applique le template pour un élément de data.
    self.applySingleTemplate = function (data) {

      // crée un clone du template et l'ajoute au container.
      var $clone = self.$template.clone().appendTo(self.$container);
      nms.altitude.BrokerTemplateHelper.applyDataToElement({
        data: data,
        $clone: $clone,
        propertyTypes: propertyTypes,
        urlPropertyName: urlPropertyName,
        setImagePropertiesDelegate: setImagePropertiesDelegate,
        brokerIdentifierPrefix: brokerIdentifierPrefix,
        dataIdPropertyName: dataIdPropertyName,
        displayResultImage: displayResultImage
      });

      self.$container.trigger('singleTemplatingCompleted', [$clone, data]);
    };
  };



});;
namespace('nms.altitude', function () {
  // retourne la function de datapager;
  this.HashWatcher = function (parser) {
    var self = this,
        listeners = [];
    // ajoute un watcher.
    self.addWatcher = function (delegate) {
      listeners.push(delegate);
    };

    // notifie qu'on a eu des changements
    self.notifyChanges = function (hashObj) {
      for (var listenerIndex = 0; listenerIndex < listeners.length; listenerIndex++) {
        listeners[listenerIndex](hashObj);
      }
    }

    // load les changements du hash.
    self.loadFromHash = function (ignoreNotifications) {
      var hash = location.hash.replace(/^#\/?/, ''),
        hashObj = null;
      if (hash) {
        // essaie de parser le hash
        try {
          hashObj = parser(hash);
        } catch (ex) {
          // si le parsing ne fonctionne pas, on ne fait rien.
        }
        // si on a un objet a partir du hash (le parsing a fonctionner)
        if (hashObj) {
          // notifie les changements.
          if (!ignoreNotifications) {
            self.notifyChanges(hashObj);
          }
          return hashObj;
        }
      }
      return null;
    }

    // active l'écoute d'url
    self.enable = function () {
      // s'enregistre au hashchange pour rappeler le delegate fourni dans le constructeur
      $(window).bind('hashchange', function () {
        // loadfromhash retournera le args provenant du hash
        self.loadFromHash();
      });
    }
  };
});;
namespace('nms.altitude', function () {
  // retourne la function de datapager;
  this.DataPager = this.DataPager || function ($resultPager, config, onNavigateDelegate) {
    var self = this;
    self.index = 0; // index en cours.
    self.visibleItemsCount = 0; // nombre d'éléments visibles.
    self.totalCount = 0; // nombre total d'éléments.
    self.$resultPager = $resultPager; // élément qui contient le pager.
    config = $.extend({
      PageCount: 5,
      DisplayFirstAndLastButtons: true,
      DisplayPageNumberButtons: true,
      DisplayPreviousAndNextButtons: true,
      FirstText: '<<',
      FirstLibraryItemID: 0,
      PreviousText: '<',
      PreviousLibraryItemID: 0,
      NextText: '>',
      NextLibraryItemID: 0,
      LastText: '>>',
      LastLibraryItemID: 0
    }, config); // la config ne peut être null ou undefined.


    function onNavigate() {
      if (!$(document.body).is(".nms_isLoading")) {
        onNavigateDelegate.apply(null, arguments);
      }
    }

    /// calcule le range du pager
    function calculateRange(currentPageIndex) {
      var currentPage = currentPageIndex / self.visibleItemsCount, // page en cours
       totalPages = getPageCount(), // nombre total de pages
       middle = parseInt(config.PageCount / 2), //milieu de l'intervale
       minPage = (currentPage > middle) ? currentPage - middle : 0, // page min
       maxPage = ((minPage + config.PageCount) >= totalPages) ? totalPages : minPage + config.PageCount, // page max
        range = { // range à retourner
          trailingStart: minPage > 0,
          start: minPage,
          end: maxPage,
          trailingEnd: maxPage < totalPages,
          totalPages: totalPages
        };
      // ajustement du start si on est à la fin.
      if (maxPage == totalPages && totalPages > config.PageCount) {
        range.start = range.end - config.PageCount;
      }
      return range;
    }

    /// ajoute un bouton de navigation
    function addNavigationButton(libraryItemId, text, action, enabled, className) {
      // ajoute le lien du pager
      var a = $("<a></a>", {
        text: libraryItemId > 0 ? '' : text,
        click: function () {
          if (!a.is("[disabled]")) {
            action();
          }
        },
        disabled: !enabled,
        'class': className
      }).appendTo(self.$resultPager);
      if (libraryItemId > 0) {
        //si on a spécifier une image le src se trouvera dans le text.
        $("<img />", { src: text }).appendTo(a);
      }
    }

    /// retourne le nombre total de pages.
    function getPageCount() {
      var totalPageCount = Math.round(self.totalCount / self.visibleItemsCount);
      if (totalPageCount < self.totalCount / self.visibleItemsCount) {
        totalPageCount++;
      }
      return totalPageCount;
    }

    self.hidePager = function () {
      $resultPager.hide();
    };

    self.showPager = function () {
      $resultPager.show();
    };

    /// construit le pager
    self.buildPager = function (currentPageIndex) {
      var currentPage = currentPageIndex / self.visibleItemsCount,
       range = calculateRange(currentPageIndex);

      self.$resultPager.empty();

      // bouton first
      if (typeof config.DisplayFirstAndLastButtons !== 'boolean' || config.DisplayFirstAndLastButtons === true) {
        addNavigationButton(config.FirstLibraryItemID, config.FirstText, function () {
          onNavigate(0);
        }, currentPage > 0, 'GpcPagerFirst');
      }

      // bouton previous
      if (typeof config.DisplayPreviousAndNextButtons !== 'boolean' || config.DisplayPreviousAndNextButtons === true) {
        addNavigationButton(config.PreviousLibraryItemID, config.PreviousText, function () {
          onNavigate((currentPage - 1) * self.visibleItemsCount);
        }, currentPage > 0, 'GpcPagerPrevious');
      }

      // ajoute les ... s'il y a des résultats non affichés
      // si l'index commence après 0 on ajoute les ...
      if (range.trailingStart) {
        $("<span></span>").text("...").addClass("hiddenResults GpcPagerTrailing").appendTo(self.$resultPager);
      }

      // pour chaque page entre le début et la fin.
      if (typeof config.DisplayPageNumberButtons !== 'boolean' || config.DisplayPageNumberButtons === true) {
        for (var pageIndex = range.start; pageIndex < range.end; pageIndex++) {
          (function (index) {
            // crée le pager
            var $page = $("<a></a>", {
              text: (pageIndex + 1).toString(),
              click: function () {
                onNavigate(index * self.visibleItemsCount);
              }
            }).appendTo(self.$resultPager);
            // si c'est la page en cours on ajoute le class "selected"
            if (currentPageIndex / self.visibleItemsCount == pageIndex) {
              $page.addClass("selected");
            }

          })(pageIndex);
        }
      }

      // si ca ne s'arrete pas a la derniere page, affiche les ... a la fin
      if (range.trailingEnd) {
        $("<span></span>").text("...").addClass("hiddenResults GpcPagerTrailing").appendTo(self.$resultPager);
      }

      // bouton next
      if (typeof config.DisplayPreviousAndNextButtons !== 'boolean' || config.DisplayPreviousAndNextButtons === true) {
        addNavigationButton(config.NextLibraryItemID, config.NextText, function () {
          onNavigate((currentPage + 1) * self.visibleItemsCount);
        }, (currentPage + 1) < range.totalPages, 'GpcPagerNext');
      }

      // bouton last
      if (typeof config.DisplayFirstAndLastButtons !== 'boolean' || config.DisplayFirstAndLastButtons === true) {
        addNavigationButton(config.LastLibraryItemID, config.LastText, function () {
          onNavigate((range.totalPages - 1) * self.visibleItemsCount);
        }, (currentPage + 1) < range.totalPages, 'GpcPagerLast');
      }
    };
  };
});
;
namespace('nms.altitude', function () {
  // retourne la function de datapager;
  this.OrderSelector = this.OrderSelector || function ($element, orderedFields, ressources, onChangeDelegate, cssPrefix, isDescByDefault) {
    var self = this;
    var isPreview = false;
    if (!window.Altitude3_LongCultureID) {
      isPreview = true;
    }
    // éléments d'ordonnancement
    self.$element = $element;

    /// retourne les champs à ordonner.
    self.orderedFields = (function () {
      var arr = [];
      if (orderedFields) {
        $.each(orderedFields, function (index, item) {
          //si c'est par relevency, on ne met pas croissant / décroissant
          if (item.PropertyName == 1048576) {
            arr.push(JSON.stringify({
              PropertyName: item.PropertyName,
              IdentifierGuid: item.IdentifierGuid,
              IsDesc: true,
              Text: item.Name
            }));
          }
          else {
            arr.push(JSON.stringify({
              PropertyName: item.PropertyName,
              IdentifierGuid: item.IdentifierGuid,
              IsDesc: (isDescByDefault ? true : false),
              Text: item.Name + " " + (isDescByDefault ? ressources.Desc : ressources.Asc)
            }));
            arr.push(JSON.stringify({
              PropertyName: item.PropertyName,
              IdentifierGuid: item.IdentifierGuid,
              IsDesc: (isDescByDefault ? false : true),
              Text: item.Name + " " + (isDescByDefault ? ressources.Asc : ressources.Desc)
            }));
          }
        });

      }
      return arr;
    })();

    // set le order dans le ui
    self.setOrder = function (args) {
      // force la sélection du premier
      var selectFirst = false;
      if (!args.OrderBy) {
        var itemObj = JSON.parse(self.orderedFields[0]);
        if (itemObj !== null) {
          // initialise le count.
          args.OrderBy = {
            PropertyName: itemObj.PropertyName,
            IdentifierGuid: itemObj.IdentifierGuid
          };
          args.IsDescOrder = itemObj.IsDesc;
        }
      }


      if ($element.length) {
        // si on est en ordre de relevency mais qu'on a pas de recherche, on ordonne par le premier choix.
        selectFirst = (args.OrderBy != null && args.OrderBy.PropertyName == 1048576 && args.Search == '');


        $element.find('[data-value]').each(function () {
          var $this = $(this);
          var itemObj = JSON.parse($this.attr('data-value'));

          if (selectFirst || (itemObj.PropertyName == args.OrderBy.PropertyName && itemObj.IdentifierGuid == args.OrderBy.IdentifierGuid && itemObj.IsDesc == args.IsDescOrder)) {
            $this.addClass('selected');
            $element.find('.' + cssPrefix + 'WrapFakeSelectBox div:first').text($this.text());
            // si on sélectionne le premier, on change le propertyname et on reset la variable.
            if (selectFirst) {
              args.OrderBy.PropertyName = itemObj.PropertyName;
              selectFirst = false;
            }

          }
          else {
            $this.removeClass('selected');
          }
          // si c'est l'option de relevency mais qu'on a pas de recherche, on l'affiche pas.
          if (itemObj.PropertyName == 1048576 && args.Search == '') {
            $this.hide();
          } else {
            $this.show();
          }
        });
      }
    };


    // crée les sélecteurs d'ordre.
    nms.altitude.Selector.create($element, cssPrefix, self.orderedFields,
     function (item) {
       var itemObj = JSON.parse(item);
       return itemObj.Text;
     },
     function (item) {
       var itemObj = JSON.parse(item);
       if (onChangeDelegate) {
         onChangeDelegate(itemObj);
       }
     });
  }

  // controle de sélection
  this.Selector = {
    /// crée un élément de sélecteur.
    create: function ($selectorElement, cssPrefix, items, getTextDelegate, onClick) {
      var $divContainer = $("<div>", { 'class': cssPrefix + "WrapFakeSelectBox" }),
        $span = $("<div />", { 'class': cssPrefix + "FakeSelectValue" }).appendTo($divContainer),
        $container = $("<div />", { 'class': cssPrefix + 'FakeSelect' }).hide().appendTo($divContainer);

      if (items) {
        $.each(items, function (index, item) {
          var div = $("<div />", {
            'class': cssPrefix + 'FakeSelectOption',
            'data-value': item,
            text: getTextDelegate(item),
            click: function () {
              onClick(item);
              $selectorElement.find('.' + cssPrefix + 'FakeSelectValue').text(div.text());
            }
          }).appendTo($container);
          if (index == 0) {
            $span.text(div.text());
          }
        });
      }

      // ferme ou ouvre le container.
      $divContainer.click(function () {
        var $containerClicked = $(this).find("." + cssPrefix + 'FakeSelect');
        if (!$(document.body).is(".nms_isLoading")) {
          $containerClicked.slideToggle(200);
        }
      });

      $divContainer.appendTo($selectorElement);
    }
  };
});
;
(function () {

  // Expression de recherche du keyword de recherche
  var searchWordExpression = new RegExp("(#|&)keyword=[^&=]*($|&|=)");

  // Retourne le keyword de recherche de site si possible
  function getSiteSearchKeyWordFromHash() {
    // Obtient la recherche
    var qaMatch = searchWordExpression.exec(document.location.href);

    // Valide si la recherche match existe
    if (qaMatch != null && qaMatch.length > 0) {
      // Récupère la valeur du QA
      var qaValue = qaMatch[0].split('=')[1];
      return decodeURIComponent(qaValue);
    }

    return null;
  };

  namespace('nms.altitude', function () {
    //explorateur de facettes
    this.FacetExplorer = function ($element, settings) {
      var self = this,
        init = true,
       getDataQuery = settings.getDataQuery,
       getCountQuery = settings.getCountQuery,
       def = $.Deferred(),
       siteSearch = getSiteSearchKeyWordFromHash();

      var isPreview = false;
      if (!window.Altitude3_LongCultureID) {
        isPreview = true;
      } else if ($element.find(".FacetedNavigation:first").children("[data-multipleSelection='true']").length) {
        getDataQuery = function () {
          var def = settings.getDataQuery();
          getDataQuery = nms.utils.fct.delayedPromise(settings.getDataQuery, 500);
          return def;
        }
        getCountQuery = function () {
          var def = settings.getCountQuery();
          getCountQuery = nms.utils.fct.delayedPromise(settings.getCountQuery, 500);
          return def;
        }
      }
      // element de l'explorateur de facettes.
      self.$element = $element;
      // crée le argsHelper qui servira a manipuler l'url.
      self.argsHelper = new nms.altitude.facet.ArgsHelper($.extend({
        Facets: [], // sélection de facettes de navigation
        Search: '', // recherche
        OrderBy: null,
        IsDescOrder: true,
        Index: 0,
        Count: 0
      }, siteSearch == null ? {} : { Search: siteSearch, keyword: siteSearch }));

      // haswatcher, permet de suivre les changements du hash de l'url
      self.hashWatcher = new nms.altitude.HashWatcher(function (hash) {
        //note(vbeaulieu):fix pour le refactor du customfieldGuid à IdentifierGuid
        hash = hash.replace(/CustomFieldGuid/g, 'IdentifierGuid');
        return URLON.parse(hash);
      });
      // navigation par facettes
      self.navigation = new nms.altitude.facet.Navigation(self.$element.find(".FacetedNavigation:first"), self.argsHelper, self.hashWatcher, settings.noElementCss, settings.cssPrefix, settings.getSingleCountQuery);
      // resultats
      self.results = new nms.altitude.facet.Results(self.$element.find("." + settings.cssPrefix + "FacetedResults:first"), settings, self.argsHelper, self.hashWatcher);
      // recherche
      self.search = new nms.altitude.facet.Search($("[data-search]"), self.argsHelper, self.hashWatcher);
      // retourne les guids de customfields dans le template (pour utilisation avec la requete.)
      self.customFieldGuids = self.results.brokerTemplate.extractCustomFieldGuids();
      // retourne les propriétés aditionnelle
      self.customDataArgs = self.results.brokerTemplate.extractCustomDataArgs();

      // s'assure que les arguments ont les valeurs permises et reset l'url avec l'argument
      var tempArgs = self.hashWatcher.loadFromHash(true);

      if (tempArgs) {
        ensureHashIsValid(tempArgs);
        location.hash = URLON.stringify(tempArgs);
      }

      /// 
      function ensureHashIsValid(hashToValidate) {
        if (hashToValidate) {
          if (!hashToValidate.Index || hashToValidate.Index < 0) {
            hashToValidate.Index = 0;
          }
          self.results.countSelector.ensureCount(hashToValidate);
        }
      };

      /// set le texte des brokers de facettes.
      function setFacetBrokers(facets) {
        // pour chaque broker de facette dans la page. (peuvent être n'importe ou dans la page)
        $("[data-facetBroker]").each(function () {
          // on cache le broker
          var $this = $(this).hide().empty(),
            // récupere la configuration du broker
            brokerConfiguration = JSON.parse($this.attr("data-broker"));
          // on cherche dans les facettes sélectionnées celle correspondante au broker
          var facetSearch = $.grep(facets, function (item, index) {
            return item.PropertyName == brokerConfiguration.PropertyName && item.IdentifierGuid == brokerConfiguration.CustomFieldGuid;
          });
          // si on a des résultats on récupère le premier
          var facet = facetSearch.length ? facetSearch[0] : null;
          // avec la facette
          if (facet) {
            // on affiche le broker
            $this.show();
            // on va setter le texte
            $.each(facet.Values, function (index, item) {
              var text = $("." + settings.cssPrefix + "MenuItem[data-value='" + item + "'] a").text();
              // si on a une valeur c'est directement le texte
              if (facet.Values.length == 1) {
                $this.text(text);
              }
              else {
                // si on a plusieurs valeurs on ajoute des span pour chaque valeurs.
                $("<span>" + text + "</span>").appendTo($this);
              }
            });
          }
        });
      };

      /// excute la requete.
      function internalExecuteQuery() {
        // deferred pour le loading
        var prodDef, countDef;

        // appel au webservicce+    
        NmsLoadingManager.Start();
        // affiche les brokers de facette
        setFacetBrokers(self.argsHelper.args.Facets);
        // lance la requete
        prodDef = getDataQuery();

        // va chercher le compte par facettes.
        if (self.navigation.refreshCount || self.search.refreshCount) {
          self.navigation.disableNavigation();
          self.search.refreshCount = false;
          countDef = getCountQuery();
        } else {
          countDef = $.Deferred().resolve();
        }
        $.when(prodDef, countDef).then(function () {
          NmsLoadingManager.Stop();
          def.resolve();
        })
      }

      if (!isPreview) {
        // met le hash par défaut si l'url n'en a pas.
        (function () {
          var hash = location.hash.replace(/^#\/?/, '');
          if (!hash) {
            var $meta = $("meta[name='facetConfiguration']");
            if ($meta.length) {
              var metaContent = $meta.attr("content");
              var meta = URLON.parse(metaContent.indexOf('#') === 0 ? metaContent.substring(1) : metaContent);
              ensureHashIsValid(meta);
              location.hash = URLON.stringify(meta);
            }
          }
        })();
        // indique qu'il y a un hash ou pasé
        var hasHash = false;
        self.hashWatcher.addWatcher(function (hashObj) {
          if (hashObj.keyword == undefined) {
            self.argsHelper.args = hashObj;
            self.results.dataPager.visibleItemsCount = self.argsHelper.args.Count;
            internalExecuteQuery();
            // si le watcher est appelé c'est qu'on a un hash.
            hasHash = true;
            // mise a jour du hash des cultureseletors
            updateCultureSelectorHash();
          }
        });
        // initialisation.
        self.hashWatcher.loadFromHash();
        // applique le count au template.
        self.results.dataPager.visibleItemsCount = self.argsHelper.args.Count;
        // s'il n'y a pas eu de hash on lance manuellement le notify changes.
        if (!hasHash) {
          self.hashWatcher.notifyChanges(self.argsHelper.args);
        }
        // active l'écoute de l'url lorsque le deferred est completé.
        def.done(function () {
          self.hashWatcher.enable();
          init = false;
        });
      }

      /// Fonction qui met a jours des href des cultures selector pour avoir le bon hash
      function updateCultureSelectorHash(item) {
        $('.CultureSelectorLink').each(function (index, item) {
          if (item.href !== "") {
            var hashIndex = item.href.indexOf('#');
            item.href = (hashIndex > 0 ? item.href.substring(0, hashIndex) : item.href) + location.hash;
          }
        });
      };
    };
  });

  namespace('nms.altitude.facet', function () {

    // résultats de facette
    this.Results = function ($element, settings, argsHelper, hashWatcher) {
      var self = this,
        // controle de compte total
        $PagedResultTotalCount = $("." + settings.cssPrefix + "PagedResultTotalCount").empty(),
        // controle de compte des éléments affichés
        $PagedResultCurrentCount = $("." + settings.cssPrefix + "PagedResultCurrentCount").empty();

      var isPreview = false;
      if (!window.Altitude3_LongCultureID) {
        isPreview = true;
      }
      // element des résultats.
      self.$element = $element;
      // haswatcher, permet de suivre les changements du hash de l'url
      self.hashWatcher = hashWatcher;
      // configuration
      self.configuration = self.$element.attr("data-config") ? JSON.parse(self.$element.attr("data-config")) : {};
      // engin de templating
      self.brokerTemplate = new window.nms.altitude.BrokerTemplate(self.$element.find(settings.brokerTemplateSettings.resultSelector), self.configuration.NoResultText, settings.brokerTemplateSettings);
      // pager
      self.dataPager = new nms.altitude.DataPager($("." + settings.cssPrefix + "ResultPager").empty(), self.configuration, argsHelper.setQueryHash);
      // controle de sélection du nombre d'éléments par page.
      self.countSelector = new nms.altitude.facet.CountSelector($("." + settings.cssPrefix + "PagerCountSelector"), self.configuration, argsHelper, hashWatcher, settings.cssPrefix);
      // controle de sélection d'ordre des résultats.
      self.order = new nms.altitude.OrderSelector($("." + settings.cssPrefix + "ResultOrderSelector").empty(), self.configuration.OrderedFields, settings.ressources, onOrderChange, settings.cssPrefix, self.configuration.IsDescByDefault);

      // Appel sur le changement d'ordonnancement
      function onOrderChange(newOrder) {
        argsHelper.setProperties({
          OrderBy: {
            PropertyName: newOrder.PropertyName,
            IdentifierGuid: newOrder.IdentifierGuid
          },
          IsDescOrder: newOrder.IsDesc,
          Index: 0
        }, true);
      };

      /// applique le compte au UI
      self.applyCount = function (returnCount, queryTotalCount) {
        // on met à jour le compte total.
        self.dataPager.totalCount = queryTotalCount;
        $PagedResultTotalCount.text(queryTotalCount);
        $PagedResultCurrentCount.text("" + (returnCount > 0 ? argsHelper.args.Index + 1 : 0) + " - " + (argsHelper.args.Index + returnCount).toString());
      }

      // applique les changements avec les résultats.
      self.processResult = function (items, totalCount) {
        if (totalCount == 0) {
          self.brokerTemplate.applyNoDataFound();
          self.applyCount(0, 0);
          self.dataPager.buildPager(0);
        }
        else {
          // applique le template.
          self.brokerTemplate.applyTemplate(items);
          self.applyCount(items.length, totalCount);
          self.dataPager.buildPager(argsHelper.args.Index);
        }

      }

      // s'enregistre au changement de hash.
      hashWatcher.addWatcher(function (hashObj) {
        self.countSelector.setCount(hashObj);
        self.order.setOrder(hashObj);
        self.dataPager.visibleItemsCount = hashObj.Count;
      });
    };

    // sélecteur du compte
    this.CountSelector = function ($element, configuration, argsHelper, hashWatcher, cssPrefix) {
      var self = this;
      var isPreview = false;
      if (!window.Altitude3_LongCultureID) {
        isPreview = true;
      }
      // vide le contenu du controle de sélection de nombre d'éléments par page. (qui n'est pas du texte)
      $element.children(":not('." + cssPrefix + "ItemsPerPageText')").remove();

      // si on veut tout les éléments on ajoute l'option (par défaut le max est 1000)
      if (configuration.ShowAllItems) {
        configuration.ItemsPerPage.push(1000);
      }

      if (configuration.ItemsPerPage) {
        // selon le visuel voulu pour la sélection d'éléments par page
        if (configuration.ItemsPerPageAsDiv) {
          // en div
          $.each(configuration.ItemsPerPage, function (index, item) {
            var div = $("<div />", {
              text: item == 1000 ? configuration.ShowAllItemsText : item,
              'data-value': item,
              'class': cssPrefix + 'DisplayOption',
              click: function () {
                $(this).addClass("selected");
                argsHelper.setProperties({ Count: item, Index: 0 }, true);
              }
            }).appendTo($element);
          });
        }
        else {
          // en dropdown.
          nms.altitude.facet.Selector.create($element, cssPrefix, configuration.ItemsPerPage,
           function (item) {
             return item == 1000 ? configuration.ShowAllItemsText : item;
           },
           function (item) {
             argsHelper.setProperties({ Count: item, Index: 0 }, true);
           });
        }
      }

      // set le count dans le ui
      self.setCount = function (args) {
        self.ensureCount(args);
        $element.find('[data-value]').each(function () {
          var $this = $(this);
          if ($this.attr('data-value') == args.Count) {
            $this.addClass('selected');
            $element.find('.' + cssPrefix + 'WrapFakeSelectBox div:first').text($this.text())
          }
          else {
            $this.removeClass('selected');
          }
        });
      };

      // valide que le compte retourné est valide sinon le change.
      self.ensureCount = function (args) {
        var found = $.grep(configuration.ItemsPerPage, function (value) {
          return (value == args.Count);
        });

        if (!found.length) {
          args.Count = configuration.ItemsPerPage[0];
        }
      }
      // s'assure que le count fait parti des valeurs possibles.
      self.ensureCount(argsHelper.args)
      // initialise le count.
      argsHelper.setProperties({ Count: argsHelper.args.Count, Index: 0 }, false);
    }

    // recherche de facettes.
    this.Search = function ($element, argsHelper, hashWatcher) {
      var self = this;
      var isPreview = false;
      if (!window.Altitude3_LongCultureID) {
        isPreview = true;
      }
      self.$element = $element;
      // indique si le controle de recherche nécéssite un refresh du compte.
      self.refreshCount = false;
      // set la recherche et exécute la requete.
      self.setSearch = function (newSearch, launchSearch) {
        self.refreshCount = true;
        argsHelper.setProperties({
          Index: 0,
          Search: newSearch
        }, launchSearch);
        self.$element.filter("[data-forceredirection='false']").find("input").val(newSearch);

        // Valide si le PageTracker existe, si on a un mot de recherche
        if (typeof (_gaq) != "undefined" && newSearch) {
          // Effectue le tracking
          _gaq.push(['_trackPageview', '/?keyword=' + newSearch]);
        }

        if (typeof ga != 'undefined') {
          ga('send', 'pageview', '/?keyword=' + newSearch);
        }
      };

      // fix pour le X de ie
      self.$element.filter("[data-forceredirection='false']").find("input").mousedown(function () {
        var $this = $(this),
          currVal = $this.val();
        if (currVal) {
          setTimeout(function () {
            newVal = $this.val();
            if (!newVal) {
              $this.parent("[data-search]:first").find("img").click();
            }
          }, 500);
        }
      });

      // sur le enter dans le textbox de recherche
      self.$element.filter("[data-forceredirection='false']").find("input").keypress(function (ev) {
        if (ev.which == 13) {
          $(this).parent("[data-search]:first").find("img").click();
          return false;
        }
      });

      // sur le click de l'image de recherche
      self.$element.filter("[data-forceredirection='false']").find("img").css('cursor', 'pointer').click(function () {
        self.setSearch($(this).closest("[data-search]").find("input[type='text']").val(), true);
      });

      // s'enregistre sur le changement de hash pour changer la recherche
      hashWatcher.addWatcher(function (hashObj) {
        if (hashObj && argsHelper.args.Search != hashObj.Search) {
          self.setSearch(hashObj.Search, false);
        }
      });

    };

    // controle de sélection
    this.Selector = {
      /// crée un élément de sélecteur.
      create: function ($selectorElement, cssPrefix, items, getTextDelegate, onClick) {
        var $divContainer = $("<div>", { 'class': cssPrefix + "WrapFakeSelectBox" }),
            $span = $("<div />", { 'class': cssPrefix + "FakeSelectValue" }).appendTo($divContainer),
            $container = $("<div />", { 'class': cssPrefix + 'FakeSelect' }).hide().appendTo($divContainer);

        if (items) {
          $.each(items, function (index, item) {
            var div = $("<div />", {
              'class': cssPrefix + 'FakeSelectOption',
              'data-value': item,
              text: getTextDelegate(item),
              click: function () {
                onClick(item);
                $selectorElement.find('.' + cssPrefix + 'FakeSelectValue').text(div.text());
              }
            }).appendTo($container);
            if (index == 0) {
              $span.text(div.text());
            }
          });
        }

        // ferme ou ouvre le container.
        $divContainer.click(function () {
          var $containerClicked = $(this).find("." + cssPrefix + 'FakeSelect');
          if (!$(document.body).is(".nms_isLoading")) {
            $containerClicked.slideToggle(200);
          }
        });

        $divContainer.appendTo($selectorElement);
      }
    };
  });

})();;
(function () {

  namespace('nms.altitude.facet', function () {
    // Helper des args.
    this.ArgsHelper = function (args, setQueryHashOverload) {
      var self = this;

      /// argument a utiliser
      self.args = args;

      //set la valeur au argProperties
      self.setProperties = function (argsProperties, setHash) {
        for (var prop in argsProperties) {
          self.args[prop] = argsProperties[prop];
        }
        if (setHash) {
          self.setQueryHash();
        }
      }

      /// change la sélection.
      self.toggleFacet = function (facet, isMultipleSelection, isSelected, isRange, isResetSelection) {
        // si on reset la sélection avec cette facette, on vide l'array de facettes.
        if (isResetSelection) {
          self.args.Facets = []
        }
        var existing = getFacetFromArgs(facet);
        // retourne la facette existante
        if (isSelected) {
          if (facet.Value == "00000000-0000-0000-0000-000000000000") {
            if (existing) {
              self.args.Facets.splice($.inArray(existing, self.args.Facets), 1);
            }
          } else {
            if (!existing) {
              existing = createSelection(facet.CustomFieldGuid || facet.IdentifierGuid, facet.PropertyName, facet.ValueType, facet.IdentifierGuidType, facet.ParentTagGuid);
            }

            if (!isMultipleSelection) {
              $.each(existing.Values, function (ix, val) { self.toggleDynamicFacets(val); });
              existing.Values = [];
            }
            // si c'est une sélection de range
            if (isRange) {
              existing.Values = ["" + facet.Value.start + "," + facet.Value.end];
            }
            else {
              // sinon c'est une facette normale
              existing.Values.push(facet.Value);
            }
          }
        }
        else {
          if (existing) {
            if (isRange) {
              // s'il n'y a plus de valeurs sélectionnées on supprime.
              self.args.Facets.splice($.inArray(existing, self.args.Facets), 1);

            } else {
              // recherche l'index existant
              var index = jQuery.inArray(facet.Value, existing.Values);
              if (index >= 0) {
                existing.Values.splice(index, 1);
              }
              if (!existing.Values.length) {
                // s'il n'y a plus de valeurs sélectionnées on supprime.
                self.args.Facets.splice($.inArray(existing, self.args.Facets), 1);
              }

              self.toggleDynamicFacets(facet.Value);
            }
          }
        }

        self.setQueryHash(0);
      };

      // Cache récursivement les facettes dynamiques pour une guid d'étiquette qui a été retiré de la facette
      self.toggleDynamicFacets = function (parentTagGuid) {
        var removedGuids = [];

        // retire les facettes dont le parent est le guid recu en argument.
        self.args.Facets = $.grep(self.args.Facets, function (elem) {
          // Garde l'élément
          if (!elem.ParentTagGuid || elem.ParentTagGuid != parentTagGuid) {
            return true;
          }

          // ne garde pas l'élément et ajoute ses étiquettes dans les valeurs retirées 
          removedGuids = removedGuids.concat(elem.Values);
          return false;
        });

        // Parcours les étiquettes déselectionnées dans le processus pour refaire le processus
        $.each(removedGuids, function (ix, elem) {
          self.toggleDynamicFacets(elem);
        });
      }

      /// exécute la navigation.
      self.setQueryHash = (function () {
        var queryTimeout = 0;
        // méthode d'exécution de la recherche.
        function _executeHashChange(newIndex) {
          // si on a un nouvel index et qu'on est pas en init.
          if (newIndex != undefined /*&& !init*/) {
            self.args.Index = newIndex;
          }
          else {
            if (self.args.Index > 0) {
              self.args.Index = 0;
            }
          }

          // Valide si un index est présent
          if (self.args.Index == undefined) {
            // S'assure que l'index est initialisé
            self.args.Index = 0;
          }

          if (self.args.Facets) {
            self.args.Facets.sort(function (a, b) {
              if (a.IdentifierGuid < b.IdentifierGuid) {
                return -1;
              }

              if (a.IdentifierGuid > b.IdentifierGuid) {
                return 1;
              }

              return 0;
            });
          }

          if (setQueryHashOverload) {
            // exécute le delegate qui change l'url
            setQueryHashOverload("#" + URLON.stringify(self.args));
          }
          else {
            // change le hash (comportement par défaut)
            window.location.href = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + "#" + URLON.stringify(self.args);
          }
        }

        // fonction qui sera retournée pour éviter les appels concurents.
        return function (newIndex) {
          if (queryTimeout) {
            clearTimeout(queryTimeout);
            queryTimeout = null;
          }
          // exécute après un délais prédéfinit.
          queryTimeout = setTimeout(function () {
            _executeHashChange(newIndex);
          }, 500);
        };
      })();

      // crée une sélection de facette.
      function createSelection(identifierGuid, propertyName, valueType, identifierGuidType, parentTagGuid) {
        var selection = {
          IdentifierGuid: identifierGuid,
          PropertyName: propertyName,
          ValueType: valueType,
          Values: []
        };
        if (identifierGuidType) {
          selection.IdentifierGuidType = identifierGuidType;
        }

        if (parentTagGuid) {
          selection.ParentTagGuid = parentTagGuid;
        }

        self.args.Facets.push(selection);
        return selection;
      };

      /// retourne la facette des args.
      function getFacetFromArgs(facet) {
        var search = $.map(self.args.Facets, function (item) {
          if (item.IdentifierGuid == facet.IdentifierGuid && item.PropertyName == facet.PropertyName) {
            return item
          }
          return null;
        });
        return search.length ? search[0] : null;
      };

    };


  });

})();;
(function () {
  // Helper de la navigation.
  namespace('nms.altitude.facet.FacetNavigationHelper', function () {
    var self = this;

    /// Retrouve si une facette par son IdentifierGuid
    function GetFacetByIdentifierGuid(facets, facetGuid) {
      if (facets != null && facetGuid != '00000000-0000-0000-0000-000000000000') {
        for (var i = 0; i < facets.length; i++) {
          if (facets[i].IdentifierGuid === facetGuid) {
            return facets[i];
          }
        }
      }
      return null;
    };

    /// Retrouve si une étiquette est sélectionné
    function isTagSelected(selectedFacets, tagGuid) {
      if (selectedFacets != null && tagGuid != '00000000-0000-0000-0000-000000000000') {
        for (var i = 0; i < selectedFacets.length; i++) {
          if (selectedFacets[i].Values != null) {
            for (var j = 0; j < selectedFacets[i].Values.length; j++) {
              if (selectedFacets[i].Values[j] === tagGuid) {
                return true;
              }
            }
          }
        }
      }
      return false;
    };

    /// Retrouve si une étiquette est sélectionné
    function isParentInFacets(facets, tagGuid) {
      if (facets != null && tagGuid != '00000000-0000-0000-0000-000000000000') {
        for (var i = 0; i < facets.length; i++) {
          if (facets[i].Values != null) {
            for (var j = 0; j < facets[i].Values.length; j++) {
              if (facets[i].Values[j] === tagGuid) {
                return true;
              }
            }
          }
        }
      }
      return false;
    }

    /// Retourne la liste des étiquettes à compter (seulement celles qui seront visible)
    self.getCountedTags = function ($element, configurationFacets, selectedFacets) {
      var countedTags = [];

      for (var i = 0; i < configurationFacets.length; i++) {
        if (configurationFacets[i].ClassificationGuid === '00000000-0000-0000-0000-000000000000') {
          // Si la facets est un catalogue on doit vérifier s'il sera affiché
          if (configurationFacets[i].IdentifierGuidType == 3) {
            if (configurationFacets[i].ParentTagGuid !== '00000000-0000-0000-0000-000000000000') {
              if ((isTagSelected(selectedFacets, configurationFacets[i].ParentTagGuid) || !isParentInFacets(configurationFacets, configurationFacets[i].ParentTagGuid))
                   && (!configurationFacets[i].IsMutuallyExclusive || configurationFacets[i].ShowResultCount)) {
                countedTags = countedTags.concat(configurationFacets[i].OrderedCustomFieldValueGuids);
              }
            } else if (!configurationFacets[i].IsMutuallyExclusive || configurationFacets[i].ShowResultCount) { // Si ce n'est pas un catalogue ou si le catalogue n'a pas de parent, il sera visible
              countedTags = countedTags.concat(configurationFacets[i].OrderedCustomFieldValueGuids);
            }
          }
        }
      }

      return countedTags;
    };

    /// Retourne la liste des facets qui seront visible
    self.getVisibleFacets = function (configurationFacets, selectedFacets) {
      var newConfigurationFacets = [];

      for (var i = 0; i < configurationFacets.length; i++) {
        // Si la facets est un catalogue on doit vérifier s'il sera affiché
        if (configurationFacets[i].IdentifierGuidType == 3 && configurationFacets[i].ParentTagGuid !== '00000000-0000-0000-0000-000000000000') {
          if ((isTagSelected(selectedFacets, configurationFacets[i].ParentTagGuid) || !isParentInFacets(configurationFacets, configurationFacets[i].ParentTagGuid))
               && (!configurationFacets[i].IsMutuallyExclusive || configurationFacets[i].ShowResultCount)) {
            newConfigurationFacets.push(configurationFacets[i]);
          }
        } else if (!configurationFacets[i].IsMutuallyExclusive || configurationFacets[i].ShowResultCount) { // Si ce n'est pas un catalogue ou si le catalogue n'a pas de parent, il sera visible si on a un count ou on doit en faire la desactivation
          newConfigurationFacets.push(configurationFacets[i]);
        }
      }

      return newConfigurationFacets;
    };

    /// Retourne la liste des étiquettes de classifications à compter (seulement celles qui seront visible)
    self.getCountedClassificationTags = function ($element, configurationFacets, selectedFacets) {
      var countedClassificationTags = {};

      for (var i = 0; i < configurationFacets.length; i++) {
        if (configurationFacets[i].ClassificationGuid !== '00000000-0000-0000-0000-000000000000') {
          // Si la facets est un catalogue on doit vérifier s'il sera affiché
          if (configurationFacets[i].IdentifierGuidType == 3) {
            if (configurationFacets[i].ParentTagGuid !== '00000000-0000-0000-0000-000000000000') {
              if (isTagSelected(selectedFacets, configurationFacets[i].ParentTagGuid) || !isParentInFacets(configurationFacets, configurationFacets[i].ParentTagGuid)) {
                countedClassificationTags[configurationFacets[i].IdentifierGuid] = getAllOrSelectedTags(configurationFacets[i], selectedFacets);
              }
            } else { // Si le catalogue n'a pas de parent, il sera visible
              countedClassificationTags[configurationFacets[i].IdentifierGuid] = getAllOrSelectedTags(configurationFacets[i], selectedFacets);
            }
          }
        }
      }

      return countedClassificationTags;
    };

    /// Obtient la liste de jsute l'étiquette de sélectionné s'il y en a une sinon de toutes les étiquettes de la section
    function getAllOrSelectedTags(configurationFacet, selectedFacets) {
      var selectedFacet = GetFacetByIdentifierGuid(selectedFacets, configurationFacet.IdentifierGuid);

      // Regarde si on a trouvé une étiquette dans la selection pour ce catalogue
      if (selectedFacet != null && selectedFacet.Values.length > 0) {
        return selectedFacet.Values;
      } else {
        return configurationFacet.OrderedCustomFieldValueGuids;
      }
    };

    /// Retourne la liste des facets de classification
    self.getClassificationFacets = function (configurationFacets, selectedFacets) {
      var classificationConfigurationFacets = [],
        configurationFacet = null;

      for (var i = 0; i < configurationFacets.length; i++) {
        if (configurationFacets[i].ClassificationGuid !== '00000000-0000-0000-0000-000000000000') {
          classificationConfigurationFacets.push(configurationFacets[i]);
        }
      }
      return classificationConfigurationFacets;
    };

    /// Retourne la liste des étiquettes à compter (seulement celles qui seront visible)
    self.getSelectedCatalogTags = function (selectedFacets) {
      var selectedCatalogTags = {};

      for (var i = 0; i < selectedFacets.length; i++) {
        if (+selectedFacets[i].IdentifierGuidType === 3) {
          selectedCatalogTags[selectedFacets[i].IdentifierGuid] = selectedFacets[i].Values;
        }
      }

      return selectedCatalogTags;
    };

  });
})();;
(function () {


  namespace('nms.altitude.facet', function () {

    // navigation par facette avec redirection.
    this.RedirectionNavigation = function ($element, redirectionUrl, cssPrefix, defaultGetQueryCount, isRedirectOnSelect, noElementCss) {
      var self = this,
        isInit = true,
        isPreview = false,
        getQueryCount = defaultGetQueryCount,
        def = $.Deferred(),
        isRedirectOnSelect = (isRedirectOnSelect !== undefined ? isRedirectOnSelect : true), // Indique si on veut rediriger sur une selection
        lastRedirectUrl = null, // Garde le dernier url de redirection si on ne redirige pas sur une selection
        noElementCss = noElementCss == undefined ? null : noElementCss,
        hasHash = false;

      // element de la navigation
      self.$element = $element;

      if (!window.Altitude3_LongCultureID) {
        isPreview = true;
      } else if ($element.children("[data-multipleSelection='true']").length) {
        getQueryCount = function () {
          var def = defaultGetQueryCount();
          getQueryCount = nms.utils.fct.delayedPromise(defaultGetQueryCount, 500);
          return def;
        }
      }

      // crée le argsHelper qui servira a manipuler l'url.
      self.argsHelper = new nms.altitude.facet.ArgsHelper({
        Facets: [], // sélection de facettes de navigation
        Search: '', // recherche
        OrderBy: null,
        IsDescOrder: true,
        Index: 0,
        Count: 0
      },// redirection vers la page sélectionner
        function (hash) {
          var newRedirectUrl = "";

          if (!isInit) {
            if (!isPreview) {
              newRedirectUrl = redirectionUrl + hash;
            }
            else {
              newRedirectUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + hash;
            }

            if (isRedirectOnSelect) {
              self.redirectTo(newRedirectUrl);
            } else {
              lastRedirectUrl = newRedirectUrl;
              // Mise a jour de l'url actif pour relancer le getCount
              window.location.href = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + hash;
            }
          }
        });

      /// Redirige manuellement
      self.redirectTo = function (newRedirectUrl) {
        if (!isInit) {
          if (!isPreview) {
            window.location = newRedirectUrl;
          }
          else {
            window.location.href = newRedirectUrl;
          }
        }
      };

      // S'attache sur un trigger pour lancer manuellement la redirection
      // Exemple d'appel : $(document).trigger('onFacetRedirectToLastUrl', null);
      $(document).bind("onFacetRedirectToLastUrl", function () {
        if (lastRedirectUrl != null) {
          self.redirectTo(lastRedirectUrl);
        }
      });

      // haswatcher, permet de suivre les changements du hash de l'url
      self.hashWatcher = new nms.altitude.HashWatcher(function (hash) {
        //note(vbeaulieu):fix pour le refactor du customfieldGuid à IdentifierGuid
        hash = hash.replace(/CustomFieldGuid/g, 'IdentifierGuid');
        return URLON.parse(hash);
      });

      // navigation par facettes
      self.navigation = new nms.altitude.facet.Navigation($element, self.argsHelper, self.hashWatcher, noElementCss, cssPrefix);

      // met le hash par défaut si l'url n'en a pas.
      (function () {
        var hash = location.hash.replace(/^#\/?/, '');
        if (!hash) {
          var $meta = $("meta[name='facetConfiguration']");
          if ($meta.length) {
            location.hash = $meta.attr("content");
          }
        }
      })();

      /// excute la requete interne de la navigation : GetFacetCount
      function internalExecuteQuery() {
        // va chercher le compte par facettes.
        if (self.navigation.refreshCount) {
          self.navigation.disableNavigation();
          NmsLoadingManager.Start();

          getQueryCount().done(function () {
            NmsLoadingManager.Stop();
            def.resolve();
          });
        } else {
          def.resolve();
        }
      };

      self.hashWatcher.addWatcher(function (hashObj) {
        if (hashObj.keyword == undefined) {
          self.argsHelper.args = hashObj;

          if (!isPreview) {
            if (!isRedirectOnSelect || isInit) {
              internalExecuteQuery();
            } else {
              NmsLoadingManager.Stop();
            }
            // si le watcher est appelé c'est qu'on a un hash.
            hasHash = true;
          }
        }
      });

      // initialisation.
      self.hashWatcher.loadFromHash();

      if (isPreview) {
        if (getQueryCount) {
          // indique que l'initialisation est terminée.
          getQueryCount().done(function () {
            isInit = false;
          });
        }
        else {
          isInit = false;
        }
      } else {
        // s'il n'y a pas eu de hash on lance manuellement le notify changes.
        if (!hasHash) {
          self.hashWatcher.notifyChanges(self.argsHelper.args);
        }

        // active l'écoute de l'url lorsque le deferred est completé.
        def.done(function () {
          self.hashWatcher.enable();
          isInit = false;
          if (!isRedirectOnSelect) {
            self.argsHelper.setQueryHash();
          }
        });
      }
    };


    // base de la navigation par facette
    this.Navigation = function ($element, argsHelper, hashWatcher, noElementCss, cssPrefix, getSingleCountQuery) {
      var self = this;
      var isPreview = false;
      if (!window.Altitude3_LongCultureID) {
        isPreview = true;
      }
      // element de la navigation
      self.$element = $element;
      // haswatcher, permet de suivre les changements du hash de l'url
      self.hashWatcher = hashWatcher;
      // configuration
      self.configuration = self.$element.attr("data-config") ? JSON.parse(self.$element.attr("data-config")) : {};
      // indique si la navigation par facette nécéssite un refresh du count
      self.refreshCount = true;
      // tags comptés
      self.countedTags = [];
      // ajoute les tags comptés.
      $element.find("[data-identifierGuidType='3'] li").each(function () {
        self.countedTags.push($(this).attr("data-value"));
      });

      /// Méthode pour désactiver la navigation, jusqu'au retour de l'appel du comptes de nombre d'éléments par facettes
      self.disableNavigation = function () {
        self.$element.find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid][data-isMutuallyExclusive='false']").addClass(noElementCss);
        self.$element.find("[data-isMutuallyExclusive='false']").find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid]").addClass(noElementCss);
        self.$element.find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid]").children("span").text("");
        self.$element.children("[data-multipleSelection]").find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid]").attr("disabled", true);
        self.refreshCount = false;
      };

      /// Méthode pour extraire un dictionnaire contenant la liste de toutes les facettes de la navigation pour ensuite l'utiliser lors de l'appliation des résultats du compte
      // Note(sjoyal) : Fait ainsi afin de minimiser les finds jquery et ainsi optimiser l'exécution du code
      function extractFacetDictionary($facetValues) {
        var facetDictionary = {};

        for (var i = 0, length = $facetValues.length; i < length; i++) {
          (function () {
            var $this = $($facetValues[i]),
                valueIdentifierGuid = $this[0].getAttribute("data-valueIdentifierGuid"),
                identifierGuid = $this[0].getAttribute("data-identifierGuid"),
                propertyName = $this[0].getAttribute("data-propertyName"),
                value = $this[0].getAttribute("data-value");

            // On intitialise le premier niveau du dictionnaire au besoin
            if (facetDictionary[identifierGuid] == undefined) {
              facetDictionary[identifierGuid] = {};
            }

            // On intitialise le deuxième niveau du dictionnaire au besoin
            if (facetDictionary[identifierGuid][propertyName] == undefined) {
              facetDictionary[identifierGuid][propertyName] = {};
            }

            // On intitialise le troisième niveau du dictionnaire au besoin
            if (facetDictionary[identifierGuid][propertyName][valueIdentifierGuid] == undefined) {
              facetDictionary[identifierGuid][propertyName][valueIdentifierGuid] = [];
            }

            // On ajoute la facette et sa valeur dans le dictionnaire
            facetDictionary[identifierGuid][propertyName][valueIdentifierGuid].push({ "value": value != undefined ? value : null, "$element": $this });
          })();
        }

        return facetDictionary;
      };

      /// Méthode qui supprime la classe indiquant un compte à 0 et mettant a jour le compte pour chaque valeur de facette
      function activateFacetWithCount(facetCount, facetDictionary) {
        for (var i = 0; i < facetCount.length; i++) {
          // On tente de retrouver la facette dans le dictionnaire selon la valeur de ses différentes propriétés
          var facetByIdentifierGuid = facetDictionary[facetCount[i].IdentifierGuid] != undefined ? facetDictionary[facetCount[i].IdentifierGuid] : null,
              facetByPropertyName = facetByIdentifierGuid != null && facetByIdentifierGuid[facetCount[i].PropertyName] != undefined ? facetByIdentifierGuid[facetCount[i].PropertyName] : null,
              facetElements = facetByPropertyName != null && facetByPropertyName[facetCount[i].ValueIdentifierGuid] != undefined ? facetByPropertyName[facetCount[i].ValueIdentifierGuid] : null;

          // On valide que la facette à bien été retrouvé
          if (facetElements != undefined && facetElements.length > 0) {
            // On valide si la facette représente une intervalle de valeur
            if (facetCount[i].Range) {
              $.each(facetElements, function (index, item) {
                var $element = item.$element,
                    ranges = item.value.split(",");

                // On active les intervalles qui ont des produits
                if (ranges.length == 2 && ranges[0] == facetCount[i].Range.Item1 && ranges[1] == facetCount[i].Range.Item2) {
                  $element.removeClass(noElementCss).children("span").text("(" + facetCount[i].Count + ")");
                }
              });
            }
            else {
              for (var j = 0, length = facetElements.length; j < length; j++) {
                // On active les valeurs qui ont des produits
                facetElements[j].$element.removeClass(noElementCss).children("span").text("(" + facetCount[i].Count + ")");
                if (facetElements[j].$element.is(".currentValue")) {
                  facetElements[j].$element.parent().siblings(".FacetMenuDropDownSelectedValue").text(facetElements[j].$element.text());
                }
              }
            }
          }
        }
      };

      /// Méthode qui active et désactive les facettes selon les classifications recues
      function applyClassificationTags($classificationSections, classificationsTags) {
        var $classificationSection = null,
            classificationGuid = null,
            catalogGuid = null,
            isMutuallyExclusive = null,
            classificationCatalogTags = null,
            validClassificationTags = null,
            classificationTagsLi = null,
            $classificationTagLi = null,
            tagGuid = null;

        // On itère sur les sections de classifications
        for (var i = 0; i < $classificationSections.length; i++) {
          // Créé la varialbe jquery
          $classificationSection = $($classificationSections[i]);
          // Retrouve le guid de la classification
          classificationGuid = $classificationSection.attr("data-classificationGuid");
          // Retrouve le guid du catalog
          catalogGuid = $classificationSection.attr("data-catalogGuid");
          // Retrouve si la facette est en exclusion mutuelle
          isMutuallyExclusive = $classificationSection.attr("data-isMutuallyExclusive").toLowerCase() === "true";
          // Retrouve les différentes étiquettes dans la section du catalog
          classificationTagsLi = $classificationSection.find("[data-valueIdentifierGuid]");

          if (typeof (classificationsTags) != "undefined" && classificationsTags != null && classificationsTags.AssociatedClassificationTagsGuids != null && !isMutuallyExclusive) {
            // Retrouve les étiquettes de classifications pour les différents catalogues
            classificationCatalogTags = typeof (classificationsTags.AssociatedClassificationTagsGuids[classificationGuid]) === "undefined" ? [] : classificationsTags.AssociatedClassificationTagsGuids[classificationGuid];
            // Retrouve les étiquettes de classifications pour le catalog de la section actuelle
            validClassificationTags = typeof (classificationCatalogTags[catalogGuid]) != "undefined" ? classificationCatalogTags[catalogGuid] : [];

            // Itère sur les étiquettes dans le HTML
            for (var j = 0; j < classificationTagsLi.length; j++) {
              // Créé une variable jquery pour l'élément html de l'étiquette
              $classificationTagLi = $(classificationTagsLi[j]);
              // Retrouve le guid de l'étiquette
              tagGuid = $classificationTagLi.attr("data-valueIdentifierGuid");

              // Tente de retrouver l'étiquette parmi les étiquettes retrouné
              // Si la liste était vide, on considère toutes les étiquettes comme étant valide car actuellement il n'y a pas de cas ou on ne retrouve pas au moins une étiquette valide par catalogue
              if (validClassificationTags.indexOf(tagGuid) < 0) {
                $classificationTagLi.addClass(noElementCss);
              }
            }
          }
        }
      };

      /// Mise à jour des classes des catégories indiquant si la section à des valeurs avec des produits ou non
      function updateCategoryCount($menuCategory) {
        $menuCategory.each(function () {
          var $this = $(this);
          var dropDownMenuItems = null;
          var hasValidFacets = false;

          // Regarde si c'est un dropdown ou un ul en validant l'enfant de la facette
          if ($this.children(".FacetMenuDropDown").length > 0) {
            dropDownMenuItems = $this.find("." + cssPrefix + "DropDownMenuItem");

            // Valide si au moins une des options du dropdown à des produits
            hasValidFacets = (function () {
              for (var i = 0, length = dropDownMenuItems.length; i < length; i++) {
                if (!$(dropDownMenuItems[i]).hasClass(noElementCss) || $(dropDownMenuItems[i]).hasClass("currentValue")) {
                  return true;
                }
              }
              return false
            })();

            // Indique si la section(facette) à des produits ou non
            if (!hasValidFacets) {
              $this.addClass("noFacets");
            }
            else {
              $this.removeClass("noFacets");
            }
          } else {
            if ($this.children("ul").children("." + noElementCss + ":not(.selected)").length == $this.children("ul").children().length) {
              $this.addClass("noFacets");
            }
            else {
              $this.removeClass("noFacets");
            }
          }
        });
      };

      /// Gestion des valeurs de facettes à désactiver
      function updateFacetToDisabled($facets, $facetsToUpdate, $requiredfacet) {
        // ne disable jamais les sélection multiple ou les catalogues ou les rangeslider
        $facets.find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid]").removeAttr("disabled");

        // disabler les éléments qui ne sont pas dnas une sélection multiple et qui n'ont pas de résultats.
        $facetsToUpdate.find("." + noElementCss + ":not(.currentValue, .selected)").attr("disabled", true).children("span").text("");
        $facetsToUpdate.find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid]:not(." + noElementCss + ")").removeAttr("disabled");

        $requiredfacet.each(function (ix, elem) {
          var selectedElems = $(elem).find("input[type='checkbox']:checked, .selected");
          if (selectedElems.length == 1) {
            selectedElems.attr("disabled", true);
          }
        });
      };

      /// Gestion des valeurs de facettes à cacher
      function updateFacetToHide($categoryToHide) {
        // Retrouve les valeurs de facettes à valider
        var $facetsToHideToValidate = $categoryToHide.find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid]:not([data-parentTagGuid])");
        var toShow = [];
        var toHide = [];

        // Itère sur chacun des valeurs et les ajoutes dans la bonne liste selon s'ils ont la classe indiquant s'il n'ont aucun produit
        for (var i = 0, length = $facetsToHideToValidate.length; i < length; i++) {
          var $facetValue = $($facetsToHideToValidate[i]);
          if (!$facetValue.hasClass(noElementCss) || $facetValue.hasClass("currentValue") || $facetValue.hasClass("selected")) {
            toShow.push($facetsToHideToValidate[i]);
          } else {
            toHide.push($facetsToHideToValidate[i]);
          }
        }

        // Note(sjoyal) : fait ainsi et non avec show et hide car plus performant
        $(toShow).css({ 'display': '' });
        $(toHide).css({ 'display': 'none' });

        // Affiche ou cache les sections de facettes
        $categoryToHide.filter(".noFacets").css({ 'display': 'none' });
        $categoryToHide.filter(":not(.noFacets, [data-parentTagGuid])").css({ 'display': '' });
      };

      // applique le compte par facettes pour une sélection précise de facette
      self.applyFilterFacetCount = function (facetCount, classificationsTags, $filterElements) {
        var facetDictionary = null;

        if ($filterElements.length > 0) {
          facetDictionary = extractFacetDictionary($filterElements.find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid][data-value]"));

          // section appliquant le compte aux facettes
          activateFacetWithCount(facetCount, facetDictionary);

          // Section appliquant les étiquettes de classifications valide/invalide
          applyClassificationTags($filterElements.filter("[data-classificationGuid]"), classificationsTags);

          // section appliquant le compte aux sections
          updateCategoryCount($filterElements.filter("." + cssPrefix + "MenuCategory"));

          //Note(sjoyal) : contraire au cas standart on se permet ici de désactiver les sélection multiples car les résultats devraient être valide
          // section désactivant les valeurs sans compte
          updateFacetToDisabled($filterElements.filter("[data-multipleSelection]"), $filterElements.filter("[data-multipleSelection='false'][data-isRangeSlider!='true']"), $filterElements.filter("[data-isRequired='true']"));

          // section cachant les valeurs sans compte
          updateFacetToHide($filterElements.filter("[data-hideIfNoResult='true']"));

          // lance l'évenement de completion de l'application du compte
          self.$element.trigger("FilterNavigationCountCompleted");
        }
      };

      // applique le compte par facettes pour toutes les sections
      self.applyFacetCount = function (facetCount, classificationsTags) {
        var facetDictionary = extractFacetDictionary(self.$element.find("[data-valueIdentifierGuid][data-propertyName][data-identifierGuid][data-value]"));

        // section appliquant le compte aux facettes
        activateFacetWithCount(facetCount, facetDictionary);

        // Section appliquant les étiquettes de classifications valide/invalide
        applyClassificationTags(self.$element.children("[data-classificationGuid]"), classificationsTags);

        // section appliquant le compte aux sections
        updateCategoryCount(self.$element.children("." + cssPrefix + "MenuCategory"));

        // section désactivant les valeurs sans compte
        updateFacetToDisabled($element.children("[data-multipleSelection]"), $element.children("[data-multipleSelection='false'][data-isMutuallyExclusive='false'][data-isRangeSlider!='true']"), $element.find("[data-isRequired='true']"));

        // section cachant les valeurs sans compte
        updateFacetToHide($element.children("[data-hideIfNoResult='true']"));

        // lance l'évenement de completion de l'application du compte
        self.$element.trigger("NavigationCountCompleted");
      };

      // active les facettes en range sliders.
      function enableRangeSliders($cfli) {
        // pour les range sliders
        $cfli.children("ul").children("li").find("div[data-rangeSlider]").each(setRangeSlider);

        // fonction pour le foreach.
        function setRangeSlider() {
          var $this = $(this),
            $li = $this.parents("li:first"),
            sliderConfig = JSON.parse($this.attr("data-rangeSlider")),
            min = sliderConfig.Start,
            max = sliderConfig.Start + (sliderConfig.Interval * sliderConfig.IntervalCount);

          var facet = {
            IdentifierGuid: $li.attr("data-identifierGuid"),
            IdentifierGuidType: $li.parents("[data-identifierGuidType]:first").attr("data-identifierGuidType"),
            PropertyName: $li.attr("data-propertyName"),
            ValueType: $li.attr("data-type")
          };

          $this.rangeSlider({
            arrows: false,
            bounds: {
              min: min,
              max: max
            },
            valueLabels: "change",
            defaultValues: { min: min, max: max },
            step: sliderConfig.Interval,
            formatter: function (val) {
              if (val == min) {
                return "min";
              }
              else if (val == max) {
                return "max";
              }
              else {
                return val;
              }
            }
          }).bind("userValuesChanged", function (e, data) {
            facet.Value = { start: data.values.min, end: data.values.max == max ? -1 : data.values.max };
            // sélectionne le range. Si celui ci est de 0 à -1, ca veut dire qu'on a pas de range, on va donc l'enlever des facettes.
            argsHelper.toggleFacet(facet, false, (facet.Value.start > 0 || facet.Value.end > 0 || (facet.Value.end == -1 && facet.Value.start > 0)), true, false);
            self.refreshCount = true;
          });;
          // si on est en preview on veut le min max
          // note(vbeaulieu) : valider si on peut l'enlever grace au defaultValue.
          if (isPreview) {
            $this.rangeSlider("values", min, max);
          }

          if (self.hashWatcher) {
            // écoute les changements de hash
            hashWatcher.addWatcher(function (hashObj) {
              var found = false;
              if (hashObj && hashObj.Facets) {
                // parcours les facettes pour trouver une facette correspondant à la sélection.
                $.each(hashObj.Facets, function (index, _facet) {
                  if (facet.IdentifierGuid == _facet.IdentifierGuid
                    && facet.PropertyName == _facet.PropertyName
                    && facet.ValueType == _facet.ValueType) {
                    found = true;
                    var values = _facet.Values.length ? _facet.Values[0].split(',') : [0, -1],
                      range = {
                        start: 0,
                        end: -1
                      };
                    if (values.length == 2) {
                      range.start = (+values[0]);
                      range.end = (+values[1]);
                    }
                    var basicValues = $this.rangeSlider("values");

                    if (range.end == -1 || range.end == 0) {
                      if (basicValues.min != range.start || basicValues.max != max) {
                        self.refreshCount = true;
                      }
                      $this.rangeSlider("values", range.start, max);
                    }
                    else {
                      if (basicValues.min != range.start || basicValues.max != range.end) {
                        self.refreshCount = true;
                      }
                      $this.rangeSlider("values", range.start, range.end);
                    }
                  }
                });
              }
              if (!found) {
                self.refreshCount = true;
                $this.rangeSlider("values", min, max);
              }
            });
          };
        }
      }

      /// Code dynamique qui active les facettes
      function enableFacets($cfli, config, $items, onClick, isSelectedDelegate, selectDelegate, deSelectDelegate, watcherEndDelegate) {
        var identifierGuidType = $cfli.attr("data-identifierGuidType"),
            parentTagGuid = $cfli.attr("data-parentTagGuid"),
            firstValueType = $items.attr("data-type"),
            facets = [];

        // pour chaque item de la facette
        for (var i = 0, length = $items.length; i < length; i++) {
          setToggleFacet($items[i]);
        }

        // sous function pour chaque élément
        function setToggleFacet(element) {
          var $valueElement = $(element);

          var facet = {
            IdentifierGuid: config.IdentifierGuid,
            IdentifierGuidType: identifierGuidType,
            PropertyName: config.PropertyName,
            ValueType: $valueElement.attr("data-type"),
            Value: $valueElement.attr("data-value"),
            ValueIdentifierGuid: $valueElement.attr("data-valueIdentifierGuid"),
            ParentTagGuid: parentTagGuid
          };

          // Ajoute chacune des facettes a une liste pour les gérer sur le changement d'URL
          facets.push($.extend({}, facet, { $element: $valueElement }));

          // attache le code à faire sur une sélection/désélection
          $valueElement.click(function (e) { onClick.call(this, e, $valueElement, facet); });
        }

        // Attache un seul watcher pour tout la section
        if (self.hashWatcher) {
          // écoute les changements de hash
          hashWatcher.addWatcher(function (hashObj) {

            if (hashObj && hashObj.Facets) {
              // Tente de retrouver la facette dans la sélection(URL)
              var hashFacet = (function () {
                var _facet = null;
                for (var i = 0; i < hashObj.Facets.length; i++) {
                  _facet = hashObj.Facets[i];
                  if (config.IdentifierGuid == _facet.IdentifierGuid && config.PropertyName == _facet.PropertyName && firstValueType == _facet.ValueType) {
                    return _facet;
                  }
                }
                return null;
              })();

              // Itère sur toutes les facettes
              for (var i = 0, length = facets.length; i < length; i++) {
                (function () {
                  var facet = facets[i],
                      isSelected = isSelectedDelegate(facet.$element);

                  // Regarde si la facette est dans l'URL : si elle est sélectionné
                  if (hashFacet != null && hashFacet.Values.indexOf(facet.Value) >= 0) {
                    if (!isSelected) {
                      self.refreshCount = true;
                      selectDelegate(facet.$element);
                    }
                  } else {
                    if (isSelected) {
                      self.refreshCount = true;
                      deSelectDelegate(facet.$element);
                    }
                  }
                  // Lance le code de gestion des section/facette dynamique selon leur parent
                  toggleIfDynamicFacets(facet.Value, isSelected, facet.ValueIdentifierGuid);
                })();
              }
            }

            // Lance le code en argument au besoin
            if (watcherEndDelegate != undefined) {
              watcherEndDelegate();
            }
          });
        }
      };

      // active les facettes en liste déroulantes.
      function enableDropDownFacet($cfli, config) {
        var $ddl = $cfli.children(".FacetMenuDropDown"), // conteneur du drop down
            $list = $ddl.children(".FacetMenuDropDownValues").hide(), // liste déroulante
            $value = $ddl.children(".FacetMenuDropDownSelectedValue"), // div de la valeur
            $items = $list.children("." + cssPrefix + "DropDownMenuItem"), // Liste des items du dropdown
            dataIsMutuallyExclusive = $cfli.attr("data-isMutuallyExclusive"),
            isMutuallyExclusive = dataIsMutuallyExclusive == undefined ? false : dataIsMutuallyExclusive.toLowerCase() === "true",
            timeOut;

        // Initialise le texte par défaut.
        $value.text(config.DropDownWaterMark || $list.find('.CFVID0').text() || '');

        // sur le click on toggle le dropdown.
        $ddl.click(toggleDropdown);

        function toggleDropdown() {
          var isOpen = $list.is(":visible"),
              isFacetExclusionLoaded = $cfli.attr("data-FacetExclusionLoaded") === "true";

          if (!isOpen) {
            // On valide si on doit appeler le compte pour avoir un exclusion mutuelle précise
            if (isMutuallyExclusive && !isFacetExclusionLoaded && getSingleCountQuery != undefined) {
              getSingleCountQuery($cfli, function () {
                $list.slideToggle();
                // Mise a jour de l'attribut indiquant que le compte précis a été calculer pour cette section
                $cfli.attr("data-FacetExclusionLoaded", true);
              });
            } else {
              $list.slideToggle();
            }
          } else {
            $list.slideToggle();
          }
        };

        // Sur le départ de la souris hors du dropdown
        $ddl.mouseleave(function () {
          var isOpen = $list.is(":visible");
          if (isOpen) {
            timeOut = setTimeout(function () {
              $list.slideUp();
            }, 500);
          }
        });

        // Sur la retour de la souris dans le dropdown
        $ddl.mouseenter(function () {
          if (timeOut) {
            clearTimeout(timeOut);
          }
        });

        // Appel le code d'intialisation dynamique
        enableFacets($cfli, config, $items, onOptionFacetClick,
                     function ($elem) { return $elem.hasClass("currentValue") },
                     function ($elem) { $elem.addClass("currentValue"); },
                     function ($elem) { $elem.removeClass("currentValue"); }, watcherEndDelegate);

        // Gestion du click sur le selection/désélection d'une valeur du dropdown
        function onOptionFacetClick(event, $option, facet) {
          var isSelected = $option.hasClass('currentValue');
          $value.text(isSelected ? (config.DropDownWaterMark || $list.find('.CFVID0').text() || '') : $option.text());
          toggleIfDynamicFacets(facet.Value, true, facet.ValueIdentifierGuid);
          argsHelper.toggleFacet(facet, false, !isSelected, false, config.IsResetSelection);
          self.refreshCount = true;
          if (isSelected) {
            $option.removeClass('currentValue');
          }
        };

        // Fonction à faire a la fin de chaque appel de watcher pour changer la valeur sélectionné du dropdown
        function watcherEndDelegate() {
          var $selectedvalue = $items.filter(".currentValue");
          // Affiche le texte par défaut si on a aucune sélection
          if (!$selectedvalue.length) {
            $value.text(config.DropDownWaterMark || $list.find('.CFVID0').text() || '');
          } else if ($value.text() !== $selectedvalue.text()) {
            $value.text($selectedvalue.text());
          }

          // Mise a jour de l'attribut indiquant que le compte précis a été calculer pour cette section
          $cfli.attr("data-FacetExclusionLoaded", false);
        };
      };

      /// active les facettes en toggle
      function enableToggleFacets($cfli, config) {
        var $list = $cfli.children("ul"),
            $items = $list.children("." + cssPrefix + "MenuItem"); // Liste des items

        enableFacets($cfli, config, $items, onToggleFacetClick,
                     function ($elem) { return $elem.hasClass("selected") },
                     function ($elem) { $elem.addClass("selected"); },
                     function ($elem) { $elem.removeClass("selected"); });

        function onToggleFacetClick(event, $li, facet) {
          if (!$li.attr("disabled")) {
            if (!$li.hasClass("selected") && !config.IsMultipleSelection) {
              $cfli.children("ul").children("li").removeClass("selected");
            }
            $li.toggleClass("selected");
            if (!isPreview) {
              // Note(sjoyal) : On vérifie si la sélection multiple est possible et si oui on permet plusieurs selection avant de lancer l'appel
              if ($cfli.attr("data-multipleSelection") === "true") {
                self.$element.find("[data-multipleSelection] li").filter(function () {
                  return $(this).parents("li:first")[0] != $cfli[0];
                }).attr("disabled", true);
              } else {
                self.$element.find("[data-multipleSelection] li").attr("disabled", true);
              }
            }

            toggleIfDynamicFacets(facet.Value, $li.hasClass('selected'), facet.ValueIdentifierGuid);
            argsHelper.toggleFacet(facet, config.IsMultipleSelection, $li.hasClass("selected"), false, config.IsResetSelection);
            self.refreshCount = true;
          }
        };
      };

      /// active les facettes en checkbox
      function enableCheckboxFacets($cfli, config) {
        var $items = $cfli.find("ul>li");

        // Appel le code d'intialisation dynamique
        enableFacets($cfli, config, $items, onCheckboxFacetClick,
                     function ($elem) { return $elem.find("input[type='checkbox']:first").prop('checked') },
                     function ($elem) { $elem.find("input[type='checkbox']:first").prop('checked', true); },
                     function ($elem) { $elem.find("input[type='checkbox']:first").removeProp('checked'); });

        // gestion du click pour sélectionner/désélectionner la valeur
        function onCheckboxFacetClick(event, $valueLi, facet) {
          var $chk = $valueLi.find("input[type='checkbox']:first");

          if (!config.IsMultipleSelection) {
            // enleve les autres checkbox sélectoinné.
            $cfli.children("ul").children("li").children().each(function () {
              if (this != $chk[0]) {
                $(this).removeProp("checked");
              }
            });
          }
          if (event.target != $chk[0]) {
            if ($chk.prop("checked")) {
              $chk.removeProp("checked");
            } else {
              $chk.prop("checked", true);
            }
          }
          if (!isPreview) {
            self.$element.find("[data-multipleSelection] li").filter(function () {
              return $(this).parents("li:first")[0] != $cfli[0];
            }).attr("disabled", true);
          }

          toggleIfDynamicFacets(facet.Value, $chk.prop("checked"), facet.ValueIdentifierGuid, $chk);
          argsHelper.toggleFacet(facet, config.IsMultipleSelection, $chk.prop("checked"), false, config.IsResetSelection);
          self.refreshCount = true;
        };
      };

      /// Fonction qui valide s'il faut gérer les facettes dynamique et appel le code de mise a jour au besoin
      function toggleIfDynamicFacets(parentIdentifierGuid, isSelected, valueIdentifierGuid) {
        var hasDynamicFacets = self.$element.children("[data-parentTagGuid]:first").length > 0;

        if (hasDynamicFacets) {
          toggleDynamicFacets(parentIdentifierGuid, isSelected || (valueIdentifierGuid ? isOtherFacetSelected(valueIdentifierGuid) : false));
        }
      };

      /// Fonction qui met à jour les facettes dynamique
      function toggleDynamicFacets(identifierGuid, isSelected) {
        if (isSelected) {
          self.$element.children("[data-parentTagGuid='" + identifierGuid + "']").show();
        } else {
          self.$element.children("[data-parentTagGuid='" + identifierGuid + "']").hide()
        }
      };

      /// Fonction qui valide si une valeur est sélectionner dans le reste de la navigation
      function isOtherFacetSelected(valueIdentifierGuid) {
        var $sameValueFacets = self.$element.find("[data-valueIdentifierGuid=" + valueIdentifierGuid + "]");
        // Validation de checkbox fait avec is au lieu de directement dans le selecteur car le is retourne la bonne valeur si ce code est appeler durant le click du checkbox
        return $sameValueFacets.hasClass("selected") || $sameValueFacets.find("input").prop("checked");
      };

      /// set les évenements au li.
      function setCustomFieldLi($cfli, config) {
        var expendableChild = $cfli.children("ul, .FacetMenuDropDown");

        // ajoute la section refermable
        if (config.IsExpandableSection) {
          if (expendableChild.css("display") === "block") {
            $cfli.addClass("expanded");
          }
          $cfli.children("a").click(function () {
            if (expendableChild.css('display') === 'block') {
              $cfli.removeClass("expanded");
            }
            else {
              $cfli.addClass("expanded");
            }
            expendableChild.slideToggle();
          });
        }

        // active les facettes en range slider.
        enableRangeSliders($cfli);
        if (config.IsDropDown) {
          // active les facettes en toggle
          enableDropDownFacet($cfli, config);
        }
        else if (!config.IsCheckBoxSelection) {
          // active les facettes en toggle
          enableToggleFacets($cfli, config);
        }
        else {
          // active les facettes en checkbox
          enableCheckboxFacets($cfli, config);
        }
      };

      // initialisation des facettes.
      if (self.configuration) {
        $.each(self.configuration.Facets, function (index, item) {
          // s'assure qu'on a un propertyname qui n'est jamais undefined
          if (!item.PropertyName) {
            item.PropertyName = 0;
          }
          setCustomFieldLi(self.$element.children(".CFID" + item.IdentifierGuid + ".PROP" + item.PropertyName), item);
        });
      }
    };

  });

})();;
(function () {

  namespace('nms.altitude', function () {
    // explorateur de contact.
    this.ProductExplorer = nms.utils.fct.inherits(nms.altitude.FacetExplorer, function ($element, PropertyType, ressources, currencyId/*[Deprecated]*/) {
      var self = this;
      var isPreview = false,
        cultureId = window.Altitude3_LongCultureID;

      if (!cultureId) {
        if (window.CurrentUICultureID) {
          cultureId = CurrentUICultureID;
        }
        else {
          cultureId = '';
        }

        isPreview = true;
      }
      function getFormatedHash() {
        return location.hash.replace(/@/g, '').replace(/;/g, '').replace(/:/g, '').replace(/#/g, '') + cultureId + Altitude3_PageGuid;
      }


      // execute la requete.
      function getDataQuery() {
        //on scroll vis-a-vis les résultats seulement si on scrollé précédemment (pour ne pas scroller au refresh de la page)
        if ($(window).scrollTop() > 0) {
          $("html, body").animate({ scrollTop: $('.GpcFacetedResults').offset().top }, 500);
        }

        var deferred = $.Deferred();
        nms.altitude.currencyManager.getCurrentCurrency().done(function (currency) {
          // appel au webservice
          return AltitudeServices.Inventory.GetProductsByFacets(
            {
              data: {
                args: $.extend({
                  FacetsConfiguration: self.navigation.configuration,
                  CustomFieldGuids: self.customFieldGuids,
                  CultureId: cultureId,
                  CurrencyId: (currency ? currency.CurrencyId : -1)
                }, self.argsHelper.args, self.customDataArgs)
              },
              success: function (success) {
                self.results.processResult(success.Products, success.Count);
                deferred.resolve(success);
              },
              error: function () {
                NmsLoadingManager.Stop();
                deferred.reject();
              },
              parameters: getFormatedHash()
            });
        });

        return deferred;
      }

      /// Retourne le Deferred qui obtient les étiquettes de classifications valides selon la selection actuelle
      function getAssociatedClassificationTagsDeferred(classificationConfigurationFacets) {
        var isNotAllMutuallyExclusive = false;

        for (var i = 0; i < classificationConfigurationFacets.length; i++) {
          if (!classificationConfigurationFacets[i].IsMutuallyExclusive) {
            isNotAllMutuallyExclusive = true;
            break;
          }
        }

        if (classificationConfigurationFacets.length > 0 && isNotAllMutuallyExclusive) {
          return AltitudeServices.Inventory.GetAssociatedClassificationTags({
            args: {
              FacetsConfiguration: classificationConfigurationFacets,
              Facets: self.argsHelper.args.Facets
            }
          });
        }
        return $.when();
      };

      // exécute la requete de compte pour une seule facette
      function getSingleCountQuery($facet, onSuccess) {
        var configuration = $.extend({}, self.navigation.configuration), // Copie la config initiale pour ensuite la modifier sans affecter la config initiale
            dataIdentifierGuid = $facet.attr("data-catalogguid"),
            singleFacet = [],
            selectedFacets = [],
            customFieldGuids = [],
            countedTags = [],
            countedClassificationTags = {},
            classificationGuid = "00000000-0000-0000-0000-000000000000";

        if (dataIdentifierGuid == undefined) {
          dataIdentifierGuid = $facet.attr("data-customFieldIdentifierGuid");
        }

        NmsLoadingManager.Start();

        if (self.navigation && self.navigation.configuration && self.navigation.configuration.Facets.length) {

          // Retrouve uniquement la facette à compter
          singleFacet = $.grep(self.navigation.configuration.Facets, function (item) {
            if (item.ClassificationGuid !== '00000000-0000-0000-0000-000000000000') {
              classificationGuid = item.ClassificationGuid;
            }
            return item.IdentifierGuid === dataIdentifierGuid;
          });

          if (singleFacet.length > 0) {
            // Obtient les étiquettes selon si la facette est associé à une classification
            if (singleFacet[0].IdentifierGuidType == 3) {
              if (singleFacet[0].ClassificationGuid === '00000000-0000-0000-0000-000000000000') {
                countedTags = singleFacet[0].OrderedCustomFieldValueGuids;
              } else {
                countedClassificationTags[singleFacet[0].IdentifierGuid] = singleFacet[0].OrderedCustomFieldValueGuids;
              }
            } else {
              customFieldGuids.push(dataIdentifierGuid);
            }

            // Retrouve les sélection excluant la facette à compter
            selectedFacets = $.grep(self.argsHelper.args.Facets, function (item) {
              return item.IdentifierGuid !== dataIdentifierGuid;
            });

            // Initialise la liste des facets qui seront visibles avec la seule facette à compter
            configuration.Facets = singleFacet;

            return nms.altitude.currencyManager.getCurrentCurrency().done(function (currency) {
              $.when(AltitudeServices.Inventory.GetFacetCount({
                data: {
                  args: {
                    Facets: selectedFacets,
                    FacetsConfiguration: configuration,
                    CustomFieldGuids: customFieldGuids,
                    CultureId: cultureId,
                    CountedTags: countedTags,
                    CountedClassificationTags: countedClassificationTags,
                    Search: self.argsHelper.args.Search,
                    CurrencyId: (currency ? currency.CurrencyId : -1),
                    ClassificationGuid: classificationGuid
                  }
                },
                parameters: getFormatedHash(),
              }).then(function (facetCount) {
                // applique le compte par facette.
                self.navigation.applyFilterFacetCount(facetCount.FacetCount, null, $facet);
                onSuccess();
                NmsLoadingManager.Stop();
              }, function () {
                NmsLoadingManager.Stop();
              }));
            });
          }
        }
      };

      // exécute la requete de compte
      function getCountQuery() {
        var configuration = $.extend({}, self.navigation.configuration); // Copie la config initiale pour ensuite la modifier sans affecter la config initiale

        if (self.navigation && self.navigation.configuration && self.navigation.configuration.Facets.length) {
          // Mise à jour des étiquettes à compter
          self.navigation.countedTags = nms.altitude.facet.FacetNavigationHelper.getCountedTags($element, self.navigation.configuration.Facets, self.argsHelper.args.Facets);

          // Obtient la liste des facettes qui seront visibles (exclus les catalogues dont leur parent n'est pas sélectionné)
          configuration.Facets = nms.altitude.facet.FacetNavigationHelper.getVisibleFacets(self.navigation.configuration.Facets, self.argsHelper.args.Facets);

          // Obtention des configuration des classifications
          var classificationConfigurationFacets = nms.altitude.facet.FacetNavigationHelper.getClassificationFacets(self.navigation.configuration.Facets, self.argsHelper.args.Facets);
          var countedClassificationTags = nms.altitude.facet.FacetNavigationHelper.getCountedClassificationTags($element, self.navigation.configuration.Facets, self.argsHelper.args.Facets);

          // Notifie du lancement du compte pour les produits
          $(document).trigger(jQuery.Event("onProductCount", {
            selectedCatalogTags: nms.altitude.facet.FacetNavigationHelper.getSelectedCatalogTags(self.argsHelper.args.Facets)
          }));

          return nms.altitude.currencyManager.getCurrentCurrency().done(function (currency) {
            $.when(
            AltitudeServices.Inventory.GetFacetCount(
            {
              data: {
                args: {
                  Facets: self.argsHelper.args.Facets,
                  FacetsConfiguration: configuration,
                  CustomFieldGuids: self.customFieldGuids,
                  CultureId: cultureId,
                  CountedTags: self.navigation.countedTags,
                  CountedClassificationTags: countedClassificationTags,
                  Search: self.argsHelper.args.Search,
                  CurrencyId: (currency ? currency.CurrencyId : -1)
                }
              },
              parameters: getFormatedHash()
            }),
            getAssociatedClassificationTagsDeferred(classificationConfigurationFacets)
          ).then(function (facetCount, classificationTags) {
            // applique le compte par facette.
            self.navigation.applyFacetCount(facetCount.FacetCount, classificationTags);
          }, function () {
            NmsLoadingManager.Stop();
          });
          });
        }

        // pas besoin de faire le compte on retourne alors le deferred résolu.
        return $.Deferred().resolve();
      }


      // appel le base
      this.base.call(self, $element, {
        ressources: ressources,
        cssPrefix: 'Gpc',
        noElementCss: 'noProduct',
        brokerTemplateSettings: {
          resultSelector: ".GpcResultItemWrapper",
          urlPropertyName: "ProductModelUrl",
          propertyTypes: PropertyType,
          setImagePropertiesDelegate: function ($item, data, conf) {
            var urlDate = "" + data.ModificationDate.getFullYear() + "" + (data.ModificationDate.getMonth() + 1) + "" + data.ModificationDate.getDate() + "" + data.ModificationDate.getHours() + "" + data.ModificationDate.getMinutes() + "" + data.ModificationDate.getSeconds()
            $item.attr("src", "/" + Altitude3_LongCultureID + "/gpc/_media/image/" + urlDate + "/" + data.ItemFileName + (conf ? "_" + conf.Width + "x" + conf.Height : "") + data.ItemFileExtension);
            $item.attr("title", data.Title);
            $item.attr("alt", data.Alt);
          },
          brokerIdentifierPrefix: null,
          dataIdPropertyName: "IdentifierGuid"
        },
        getDataQuery: getDataQuery,
        getCountQuery: getCountQuery,
        getSingleCountQuery: getSingleCountQuery
      });
    });
  });

})();;
// Ajoute la méthode indexOf au Array, cette méthode es 
// disponible dans javascript 1.5 ie utilise 1.3
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (obj) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == obj) {
        return i;
      }
    }
    return -1;
  }
};
