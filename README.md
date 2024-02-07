# PluginsBP

# Class
## Plugin
> To register a global variable, like Permission variable, or Core, write var like this on the plugin file:
> globalThis.\[var_name\] = value;

- constructor(): call the constructor on your plugin call with super(); .
- add_user_array(): initialize an array specific for users.
- set_user_array(name, user, value): set value for array[name + user(id)].
- get_user_array(name, user): get value for array[name + user(id)].
- load(\[prefix\]): this will load a message with prefix (or not) ont the game, when the plugin will be loaded.
- start(\[prefix\]): this will load a message with prefix (or not) ont the game, when the plugin will start (after all plugins loaded).
- commands(plugin, json): setup commands for the plugin, 'plugin' argument will help for CorePlugin to get help for this plugin ex: '!help \[page\] \[plugin\]'.
- missingDependencies(keepPluginAlive, deps): load a message on world if deps length > 0, and stop plugin load if keepPluginAlive (WIP...).

## PluginManager
> You can call the PluginManager object with this: system.pluginMgr.
> Only after it initiated.

### Properties
- plugins[]: all plugins are register inside (name, path, obj) for each index.
- commandManager: [CommandManager](https://github.com/QuentinFTL/PluginsBP/blob/main/PluginsBPVoid/scripts/class/CommandManager.js) object for [PluginManager](https://github.com/QuentinFTL/PluginsBP/blob/main/PluginsBPVoid/scripts/class/PluginManager.js).

### Static Methods
- getPlayerByName(name): return the player if it exists, else undefined.
- showPlugins(sender): show '!plugin' message for sender.
- showHelp(sender, page_ = null, plugin_ = null): show '!help' message for sender.

## CommandManager
> Register your commands with this object !

### Properties
- prefix: string to replace '/' for commands.
- commands: Object array where commands will be stored in.

### Methods
- addJson(json, pluginName = ""): add commands from a json object, pluginName will help CorePlugin to search command with this name 


## Installation
Please place this folder in %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\(development_behavior_packs / behavior_packs), then reload minecraft.

# LOGS
 - 07/02/2024:
     -   PluginsBP (v0.0.2)
         -   methods added:
             -   load(string prefix): this method is called before start(), when the plugin load...
             -   getPlayerByName(string name): this return Player or undefined, if no player with name is found in game.

 - 06/02/2024:
     -   PluginsBP (v0.0.1)
