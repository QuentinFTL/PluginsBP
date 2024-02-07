import { Player, system, world } from "@minecraft/server"; 
import { Color } from "./MinecraftConst";

export class Plugin {
    constructor() {
        this.name = this.constructor.name;
    }

    add_user_array() {
        this.uArray = {};
    }

    set_user_array(name, user, value) {
        this.uArray[name + user] = value;
    }

    get_user_array(name, user) {
        return this.uArray[name + user] ?? null;
    }

    load(pluginPrefix = "") {
        if(pluginPrefix != "") {
            world.sendMessage(pluginPrefix + ": Loading plugin...");
        }
        else
        {
            world.sendMessage("Loading plugin...");
        }
    }

    start(pluginPrefix = "") {
        if(pluginPrefix != "") {
            world.sendMessage(pluginPrefix + ": Plugin Started !");
        }
        else
        {
            world.sendMessage("Plugin Started !");
        }
    }

    stop() {

    }

    reload() {

    }

    pause() {

    }

    commands(plugin, json_) {

        system.pluginMgr.commandManager.addJson(json_, plugin);
    }

    missingDependencies(keepPluginAlive, deps) {
        console.warn("::"+typeof deps);
        if(typeof deps == "object") {
            let deps_ = "";

            for (let i = 0; i < deps.length; i++) {
                const dep = deps[i];
                deps_ += "\n    - "+dep;
            }


            world.sendMessage(Color.RED + this.name + " need "+deps.length+" missing dependenc"+(deps.length > 1 ? "ies": "y")+": "+ deps_);
        }
        else
        {
            this.missingDependencies(keepPluginAlive, [deps]);
        }
    }
}