"use strict";(self.webpackChunktauri_docs=self.webpackChunktauri_docs||[]).push([[724],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>b});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>T,frontMatter:()=>b,metadata:()=>h,toc:()=>_});var r=n(5680),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,s(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const b={sidebar_position:1},f="HTTP API",h={unversionedId:"docs/httpapi/http-api",id:"docs/httpapi/http-api",title:"HTTP API",description:"You can configure the service port in the configuration file: config service port",source:"@site/docs/docs/httpapi/http-api.md",sourceDirName:"docs/httpapi",slug:"/docs/httpapi/http-api",permalink:"/docs/httpapi/http-api",draft:!1,editUrl:"https://github.com/harlanc/xiu-doc/edit/main/docs/docs/httpapi/http-api.md",tags:[],version:"current",lastUpdatedAt:1728782941,formattedLastUpdatedAt:"Oct 13, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/httpapi/"},next:{title:"Record",permalink:"/docs/record/"}},y={},_=[{value:"Query Stream Information",id:"query-stream-information",level:2},{value:"Query the whole stream information",id:"query-the-whole-stream-information",level:3},{value:"Query specific stream",id:"query-specific-stream",level:3},{value:"Kickoff Client",id:"kickoff-client",level:2},{value:"Pull the RTSP stream from remote to xiu",id:"pull-the-rtsp-stream-from-remote-to-xiu",level:2},{value:"Start the Job",id:"start-the-job",level:3},{value:"Stop the Job",id:"stop-the-job",level:3}],g={toc:_},v="wrapper";function T(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.yg)(v,d(u(u({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",u({},{id:"http-api"}),"HTTP API"),(0,r.yg)("p",null,"You can configure the service port in the configuration file: ",(0,r.yg)("a",u({parentName:"p"},{href:"../configurations/config-file#http-api"}),"config service port")),(0,r.yg)("h2",u({},{id:"query-stream-information"}),"Query Stream Information"),(0,r.yg)("p",null,"Xiu has done some statistical work on the audio and video information of the stream, such as video resolution, bit rate, frame rate, etc., audio bit rate, sample rate, etc. (currently only supports the RTMP/HTTP-FLV protocol). You can use the following interface for querying"),(0,r.yg)("h3",u({},{id:"query-the-whole-stream-information"}),"Query the whole stream information"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"curl http://localhost:8000/api/query_whole_streams\n")),(0,r.yg)("p",null,"The query result\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "error_code": 0,\n    "desp": "succ",\n    "data": [\n        {\n            "publisher": {\n                "id": "17105457865882",\n                "start_time": "2024-03-16T07:36:26.337103+08:00",\n                "identifier": {\n                    "rtmp": {\n                        "app_name": "live",\n                        "stream_name": "source1"\n                    }\n                },\n                "remote_address": "127.0.0.1:55687",\n                "audio": {\n                    "bitrate(kbits/s)": 128,\n                    "channels": 2,\n                    "profile": "LC",\n                    "samplerate": 44100,\n                    "sound_format": "AAC"\n                },\n                "video": {\n                    "bitrate(kbits/s)": 1802,\n                    "codec": "H264",\n                    "frame_rate": 20,\n                    "gop": 60,\n                    "height": 1280,\n                    "level": "3.0",\n                    "profile": "Main",\n                    "width": 720\n                },\n                "recv_bitrate(kbits/s)": 1802\n            },\n            "subscriber_count": 0,\n            "subscribers": {\n\n            },\n            "total_recv_bytes": 22674195,\n            "total_send_bytes": 0\n        },\n        {\n            //publisher information\n            "publisher": {\n                //uuid\n                "id": "17105458011883",\n                //start time of pushing stream\n                "start_time": "2024-03-16T07:36:41.109177+08:00",\n                //stream identifier information\n                "identifier": {\n                    "rtmp": {\n                        "app_name": "live",\n                        "stream_name": "source"\n                    }\n                },\n                //client ip and port\n                "remote_address": "127.0.0.1:55764",\n                //audio information of stream\n                "audio": {\n                    "bitrate(kbits/s)": 128,\n                    "channels": 2,\n                    "profile": "LC",\n                    "samplerate": 44100,\n                    "sound_format": "AAC"\n                },\n                //video information of stream\n                "video": {\n                    "bitrate(kbits/s)": 1814,\n                    "codec": "H264",\n                    "frame_rate": 20,\n                    "gop": 60,\n                    "height": 1280,\n                    "level": "3.0",\n                    "profile": "Main",\n                    "width": 720\n                },\n                "recv_bitrate(kbits/s)": 1814\n            },\n            "subscriber_count": 2,\n            "subscribers": {\n                "17105458497472": {\n                    //subscriber\'s uuid\n                    "id": "17105458497472",\n                    //client ip and port\n                    "remote_address": "127.0.0.1:56450",\n                    "send_bitrate(kbits/s)": 1943,\n                    //start time of pulling stream\n                    "start_time": "2024-03-16T07:37:29.034025+08:00",\n                    "sub_type": "PlayerRtmp",\n                    //Total data transmission amount from the start of pulling the stream to the queried time point\n                    "total_send_bytes(kbits/s)": 6616470\n                },\n                "17105458720121": {\n                    "id": "17105458720121",\n                    "remote_address": "127.0.0.1:56583",\n                    "send_bitrate(kbits/s)": 2362,\n                    "start_time": "2024-03-16T07:37:52.999917+08:00",\n                    "sub_type": "PlayerHttpFlv",\n                    "total_send_bytes(kbits/s)": 1524128\n                }\n            },\n            //Total amount of data received from the start of streaming to the current query time\n            "total_recv_bytes": 18823366,\n            //Total amount of data sent to all subscribers from the start of streaming to the current query time\n            "total_send_bytes": 8762803\n        }\n    ]\n}\n')),(0,r.yg)("p",null,"Query topN streams by stream's subscriber count\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),"http://localhost:8000/api/query_whole_streams?top=1\n")),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "error_code": 0,\n    "desp": "succ",\n    "data": [\n        {\n            "publisher": {\n                "audio": {\n                    "bitrate(kbits/s)": 128,\n                    "channels": 2,\n                    "profile": "LC",\n                    "samplerate": 44100,\n                    "sound_format": "AAC"\n                },\n                "id": "17105458011883",\n                "identifier": {\n                    "rtmp": {\n                        "app_name": "live",\n                        "stream_name": "source"\n                    }\n                },\n                "recv_bitrate(kbits/s)": 1948,\n                "remote_address": "127.0.0.1:55764",\n                "start_time": "2024-03-16T07:36:41.109177+08:00",\n                "video": {\n                    "bitrate(kbits/s)": 1948,\n                    "codec": "H264",\n                    "frame_rate": 20,\n                    "gop": 60,\n                    "height": 1280,\n                    "level": "3.0",\n                    "profile": "Main",\n                    "width": 720\n                }\n            },\n            "subscriber_count": 2,\n            "subscribers": {\n                "17105458497472": {\n                    "id": "17105458497472",\n                    "remote_address": "127.0.0.1:56450",\n                    "send_bitrate(kbits/s)": 2076,\n                    "start_time": "2024-03-16T07:37:29.034025+08:00",\n                    "sub_type": "PlayerRtmp",\n                    "total_send_bytes(kbits/s)": 74392348\n                },\n                "17105458720121": {\n                    "id": "17105458720121",\n                    "remote_address": "127.0.0.1:56583",\n                    "send_bitrate(kbits/s)": 2076,\n                    "start_time": "2024-03-16T07:37:52.999917+08:00",\n                    "sub_type": "PlayerHttpFlv",\n                    "total_send_bytes(kbits/s)": 69300006\n                }\n            },\n            "total_recv_bytes": 91712283,\n            "total_send_bytes": 154540637\n        }\n    ]\n}\n')),(0,r.yg)("h3",u({},{id:"query-specific-stream"}),"Query specific stream"),(0,r.yg)("p",null,"Two parameters are supported: identifer and uuid. Identifier is a required field, while UUID is optional."),(0,r.yg)("p",null,"If only the identifier is specified, all information about this stream will be returned:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n     "identifier": {\n                "rtmp": {\n                    "app_name": "live",\n                    "stream_name": "source"\n                }\n            }\n}\' http://localhost:8000/api/query_stream\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "error_code": 0,\n    "desp": "succ",\n    "data": [\n        {\n            "publisher": {\n                "audio": {\n                    "bitrate(kbits/s)": 128,\n                    "channels": 2,\n                    "profile": "LC",\n                    "samplerate": 44100,\n                    "sound_format": "AAC"\n                },\n                "id": "17105458011883",\n                "identifier": {\n                    "rtmp": {\n                        "app_name": "live",\n                        "stream_name": "source"\n                    }\n                },\n                "recv_bitrate(kbits/s)": 1948,\n                "remote_address": "127.0.0.1:55764",\n                "start_time": "2024-03-16T07:36:41.109177+08:00",\n                "video": {\n                    "bitrate(kbits/s)": 1948,\n                    "codec": "H264",\n                    "frame_rate": 20,\n                    "gop": 60,\n                    "height": 1280,\n                    "level": "3.0",\n                    "profile": "Main",\n                    "width": 720\n                }\n            },\n            "subscriber_count": 2,\n            "subscribers": {\n                "17105458497472": {\n                    "id": "17105458497472",\n                    "remote_address": "127.0.0.1:56450",\n                    "send_bitrate(kbits/s)": 2076,\n                    "start_time": "2024-03-16T07:37:29.034025+08:00",\n                    "sub_type": "PlayerRtmp",\n                    "total_send_bytes(kbits/s)": 74392348\n                },\n                "17105458720121": {\n                    "id": "17105458720121",\n                    "remote_address": "127.0.0.1:56583",\n                    "send_bitrate(kbits/s)": 2076,\n                    "start_time": "2024-03-16T07:37:52.999917+08:00",\n                    "sub_type": "PlayerHttpFlv",\n                    "total_send_bytes(kbits/s)": 69300006\n                }\n            },\n            "total_recv_bytes": 91712283,\n            "total_send_bytes": 154540637\n        }\n    ]\n}\n')),(0,r.yg)("p",null,"If both the identifier and the subscriber's UUID are specified, only the information of the specified subscriber will be retained, and the information of other subscribers will be filtered out:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n     "identifier": {\n                "rtmp": {\n                    "app_name": "live",\n                    "stream_name": "source"\n                }\n            },\n     "uuid": "17105458497472"\n}\' http://localhost:8000/api/query_stream\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "error_code": 0,\n    "desp": "succ",\n    "data": [\n        {\n            "publisher": {\n                "audio": {\n                    "bitrate(kbits/s)": 127,\n                    "channels": 2,\n                    "profile": "LC",\n                    "samplerate": 44100,\n                    "sound_format": "AAC"\n                },\n                "id": "17105458011883",\n                "identifier": {\n                    "rtmp": {\n                        "app_name": "live",\n                        "stream_name": "source"\n                    }\n                },\n                "recv_bitrate(kbits/s)": 1782,\n                "remote_address": "127.0.0.1:55764",\n                "start_time": "2024-03-16T07:36:41.109177+08:00",\n                "video": {\n                    "bitrate(kbits/s)": 1782,\n                    "codec": "H264",\n                    "frame_rate": 20,\n                    "gop": 60,\n                    "height": 1280,\n                    "level": "3.0",\n                    "profile": "Main",\n                    "width": 720\n                }\n            },\n            "subscriber_count": 2,\n            "subscribers": {\n                "17105458497472": {\n                    "id": "17105458497472",\n                    "remote_address": "127.0.0.1:56450",\n                    "send_bitrate(kbits/s)": 1910,\n                    "start_time": "2024-03-16T07:37:29.034025+08:00",\n                    "sub_type": "PlayerRtmp",\n                    "total_send_bytes(kbits/s)": 219407398\n                }\n            },\n            "total_recv_bytes": 247625063,\n            "total_send_bytes": 466366197\n        }\n    ]\n}\n')),(0,r.yg)("p",null,"If both the identifier and the publisher's UUID are specified, all subscribers' information will be filtered out:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n     "identifier": {\n                "rtmp": {\n                    "app_name": "live",\n                    "stream_name": "source"\n                }\n            },\n     "uuid": "17105458011883"\n}\' http://localhost:8000/api/query_stream\n')),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "error_code": 0,\n    "desp": "succ",\n    "data": [\n        {\n            "publisher": {\n                "audio": {\n                    "bitrate(kbits/s)": 128,\n                    "channels": 2,\n                    "profile": "LC",\n                    "samplerate": 44100,\n                    "sound_format": "AAC"\n                },\n                "id": "17105458011883",\n                "identifier": {\n                    "rtmp": {\n                        "app_name": "live",\n                        "stream_name": "source"\n                    }\n                },\n                "recv_bitrate(kbits/s)": 1835,\n                "remote_address": "127.0.0.1:55764",\n                "start_time": "2024-03-16T07:36:41.109177+08:00",\n                "video": {\n                    "bitrate(kbits/s)": 1835,\n                    "codec": "H264",\n                    "frame_rate": 20,\n                    "gop": 60,\n                    "height": 1280,\n                    "level": "3.0",\n                    "profile": "Main",\n                    "width": 720\n                }\n            },\n            "subscriber_count": 2,\n            "subscribers": {\n\n            },\n            "total_recv_bytes": 311877631,\n            "total_send_bytes": 594871333\n        }\n    ]\n}\n')),(0,r.yg)("h2",u({},{id:"kickoff-client"}),"Kickoff Client"),(0,r.yg)("p",null,"The business users can kickoff illegal push/pull clients using the following interface:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "Content-Type: application/json" -d \'{"id": "17079922471661"}\' http://localhost:8000/kick_off_client\n')),(0,r.yg)("h2",u({},{id:"pull-the-rtsp-stream-from-remote-to-xiu"}),"Pull the RTSP stream from remote to xiu"),(0,r.yg)("h3",u({},{id:"start-the-job"}),"Start the Job"),(0,r.yg)("p",null,"xiu can pull the RTSP stream from a remote RTSP server to the local machine, and then publish it for viewers to watch, or remux it into RTMP/HTTP-FLV/HLS."),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n     "id" : "123",\n     "identifier": {\n                "rtsp": {\n                   "stream_path": "live/test"\n                }\n            },\n      "server_address":"localhost:5544",\n      "relay_type":"Pull"\n}\' http://localhost:8000/api/start_relay_stream\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"id: The ID is the task ID and must be unique, as this ID will be used to stop the task."),(0,r.yg)("li",{parentName:"ul"},"identifier: The stream identifier."),(0,r.yg)("li",{parentName:"ul"},"server_address: The address from which to pull the RTSP stream. For example, if the RTSP URL is rtsp://localhost:5544/live/test, then server_address is localhost:5544 and the stream_path in the identifier is live/test."),(0,r.yg)("li",{parentName:"ul"},'relay_type: Since this is pulling an RTSP stream, it should be set to "Pull".')),(0,r.yg)("p",null,"And the return value:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'{"error_code":0,"desp":"succ","data":null}\n')),(0,r.yg)("h3",u({},{id:"stop-the-job"}),"Stop the Job"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'curl -X POST -H "Content-Type: application/json" -d \'{\n     "id" : "123",\n     "relay_type":"Pull"\n}\' http://localhost:8000/api/stop_relay_stream\n')),(0,r.yg)("p",null,"And the return value:"),(0,r.yg)("pre",null,(0,r.yg)("code",u({parentName:"pre"},{className:"language-shell"}),'{"error_code":0,"desp":"succ","data":null}\n')))}T.isMDXComponent=!0}}]);