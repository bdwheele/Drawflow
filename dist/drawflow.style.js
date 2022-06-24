import {css} from "lit-element"; export const style = css`.drawflow,.drawflow .parent-node{position:relative}.drawflow .drawflow-node .input,.drawflow .drawflow-node .output{top:2px}.parent-drawflow{display:flex;overflow:hidden;touch-action:none;outline:0}.drawflow{width:100%;height:100%;user-select:none;perspective:0}.drawflow .drawflow-node{display:flex;align-items:center;position:absolute;min-height:40px;border-radius:4px;border:2px solid #000;color:#000;z-index:2}.drawflow .drawflow-node:hover{cursor:move}.drawflow .drawflow-node .inputs,.drawflow .drawflow-node .outputs{width:0}.drawflow .drawflow-node .drawflow_content_node{width:100%;display:block}.drawflow .drawflow-node .input,.drawflow .drawflow-node .output{position:relative;background:#fff;border-radius:50%;border:2px solid #000;cursor:crosshair;z-index:1;margin-bottom:5px}.col,.menu ul li{border-right:1px solid var(--border-color)}.drawflow svg{z-index:0;position:absolute;overflow:visible!important}.drawflow .connection{position:absolute;pointer-events:none;aspect-ratio:1/1}.drawflow .connection .main-path:hover{stroke:#1266ab;cursor:pointer}.drawflow .connection .main-path.selected{stroke:#43b993}.drawflow .connection .point{cursor:move;pointer-events:all}.drawflow .main-path{fill:none;stroke-width:5px;stroke:#4682b4}.drawflow-delete{position:absolute;display:block;width:30px;height:30px;z-index:4;line-height:30px;font-weight:700;text-align:center;border-radius:50%;font-family:monospace;cursor:pointer}.drawflow>.drawflow-delete{margin-left:-15px;margin-top:15px}.parent-node .drawflow-delete{right:-15px;top:-15px}.github-link,.them-edit-link{position:absolute;top:10px;color:#000}:root{--border-color:#cacaca;--background-color:#ffffff;--background-box-title:#f7f7f7}body,html{margin:0;padding:0;width:100vw;height:100vh;overflow:hidden;font-family:Roboto,sans-serif}.drag-drawflow,header{border-bottom:1px solid var(--border-color);padding-left:20px}.col,.modal{overflow:auto}header{height:66px}header h2{margin:0;line-height:66px}header a{color:#000}.them-edit-link{right:100px;font-size:40px}.them-edit-link a{text-decoration:none}.github-link{right:20px}.btn-clear,.btn-export{float:right;position:absolute;top:10px;color:#fff;font-weight:700}.wrapper{width:100%;height:calc(100vh - 67px);display:flex}.col{width:300px;height:100%}.drag-drawflow{line-height:50px;cursor:move;user-select:none}.bar-zoom svg,.btn-clear,.btn-export,.btn-lock,.menu ul li,.modal .close{cursor:pointer}.menu{position:absolute;height:40px;display:block;background:#fff;width:100%}.menu ul{padding:0;margin:0;line-height:40px}.menu ul li{display:inline-block;margin-left:10px;padding-right:10px;line-height:40px}.menu ul li.selected{font-weight:700}.btn-export{right:10px;border:1px solid #0e5ba3;background:#4ea9ff;padding:5px 10px;border-radius:4px;z-index:5}.btn-clear{right:85px;border:1px solid #96015b;background:#e3195a;padding:5px 10px;border-radius:4px;z-index:5}.bar-zoom,.btn-lock{position:absolute;bottom:10px;display:flex;font-size:24px;color:#fff;padding:5px 10px;background:#555;border-radius:4px;border-right:1px solid var(--border-color);z-index:5;float:right}.swal-wide{width:80%!important}.btn-lock{right:140px}.bar-zoom,.drawflow .drawflow-node .output{right:10px}.bar-zoom svg{padding-left:10px}.bar-zoom svg:nth-child(1){padding-left:0}#drawflow{position:relative;width:calc(100vw - 301px);height:100%;background:var(--background-color);background-size:25px 25px;background-image:linear-gradient(to right,#f1f1f1 1px,transparent 1px),linear-gradient(to bottom,#f1f1f1 1px,transparent 1px)}@media only screen and (max-width:768px){.col{width:50px}.col .drag-drawflow span{display:none}#drawflow{width:calc(100vw - 51px)}}.drawflow .drawflow-node{background:var(--background-color);border:1px solid var(--border-color);-webkit-box-shadow:0 2px 15px 2px var(--border-color);box-shadow:0 2px 15px 2px var(--border-color);padding:0;width:200px}.drawflow .drawflow-node.selected{background:#fff;border:1px solid #4ea9ff;-webkit-box-shadow:0 2px 20px 2px #4ea9ff;box-shadow:0 2px 20px 2px #4ea9ff}.drawflow .drawflow-node.selected .title-box{color:#22598c}.drawflow .connection .main-path{fill:none;pointer-events:all;stroke:#4ea9ff;stroke-width:3px}.drawflow .drawflow-node .input,.drawflow .drawflow-node .output{height:15px;width:15px;border:2px solid var(--border-color)}.drawflow .drawflow-node .input:hover,.drawflow .drawflow-node .output:hover{background:#4ea9ff}.drawflow .drawflow-node .input{left:-10px;background:#fff}.drawflow .drawflow-node .input .in_name{position:absolute;left:20px;background:#fff}.drawflow .drawflow-node .output .out_name{position:absolute;right:20px;background:#fff}.drawflow>.drawflow-delete{border:2px solid #43b993;background:#fff;color:#43b993;-webkit-box-shadow:0 2px 20px 2px #43b993;box-shadow:0 2px 20px 2px #43b993}.drawflow-delete{border:2px solid #4ea9ff;background:#fff;color:#4ea9ff;-webkit-box-shadow:0 2px 20px 2px #4ea9ff;box-shadow:0 2px 20px 2px #4ea9ff}.drawflow-node .title-box{height:50px;line-height:50px;background:var(--background-box-title);border-bottom:1px solid #e9e9e9;border-radius:4px 4px 0 0;padding-left:10px}.drawflow .title-box svg{position:initial}.drawflow-node .box{padding:10px 20px 20px;font-size:14px;color:#555}.drawflow-node .box p{margin-top:5px;margin-bottom:5px}.drawflow-node.welcome{width:250px}.drawflow-node.slack .title-box{border-radius:4px}.drawflow-node input,.drawflow-node select,.drawflow-node textarea{border-radius:4px;border:1px solid var(--border-color);height:30px;line-height:30px;font-size:16px;width:158px;color:#555}.drawflow-node textarea{height:100px}.drawflow-node.personalized{background:red;height:200px;text-align:center;color:#fff}.drawflow-node.personalized .input{background:#ff0}.drawflow-node.personalized .output{background:green}.drawflow-node.personalized.selected{background:#00f}.drawflow .connection .point{stroke:var(--border-color);stroke-width:2;fill:#fff}.drawflow .connection .point.selected,.drawflow .connection .point:hover{fill:#4ea9ff}.modal{display:none;position:fixed;z-index:7;left:0;top:0;width:100vw;height:100vh;background-color:#000;background-color:rgba(0,0,0,.7)}.modal-content{position:relative;background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:400px}.modal .close{color:#aaa;float:right;font-size:28px;font-weight:700}@media only screen and (max-width:768px){.modal-content{width:80%}}`;