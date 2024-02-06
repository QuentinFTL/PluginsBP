import { Player, system, world } from "@minecraft/server"; 

export class Plugin {
    constructor() {

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
}