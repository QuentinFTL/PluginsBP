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
- [plugins\[\]](https://github.com/QuentinFTL/PluginsBP/blob/5210d0e8acfd4daed1ed6ef2d016f4de77bcdad9/PluginsBPVoid/scripts/class/PluginManager.js#L20): all plugins are register inside (name, path, obj) for each index.
- [commandManager](https://github.com/QuentinFTL/PluginsBP/blob/5210d0e8acfd4daed1ed6ef2d016f4de77bcdad9/PluginsBPVoid/scripts/class/PluginManager.js#L22): [CommandManager](https://github.com/QuentinFTL/PluginsBP/blob/main/PluginsBPVoid/scripts/class/CommandManager.js) object for [PluginManager](https://github.com/QuentinFTL/PluginsBP/blob/main/PluginsBPVoid/scripts/class/PluginManager.js).

### Static Methods
- [getPlayerByName(name)](https://github.com/QuentinFTL/PluginsBP/blob/dc95661c7df404b9fc79b1dfc8e31f5756a79f62/PluginsBPVoid/scripts/class/PluginManager.js#L70): return the player if it exists, else undefined.
- [showPlugins(sender)](https://github.com/QuentinFTL/PluginsBP/blob/dc95661c7df404b9fc79b1dfc8e31f5756a79f62/PluginsBPVoid/scripts/class/PluginManager.js#L101): show '!plugin' message for sender.
- [showHelp(sender, page_ = null, plugin_ = null)](https://github.com/QuentinFTL/PluginsBP/blob/dc95661c7df404b9fc79b1dfc8e31f5756a79f62/PluginsBPVoid/scripts/class/PluginManager.js#L120): show '!help' message for sender.

## CommandManager
> Register your commands with this object !

### Properties
- [prefix](https://github.com/QuentinFTL/PluginsBP/blob/2733be676688fcfd007d5f2a21de64eec93a69d5/PluginsBPVoid/scripts/class/CommandManager.js#L24C14-L24C20): string to replace '/' for commands.
- [commands](https://github.com/QuentinFTL/PluginsBP/blob/2733be676688fcfd007d5f2a21de64eec93a69d5/PluginsBPVoid/scripts/class/CommandManager.js#L25C14-L25C22): Object array where commands will be stored in.

### Methods
- [addJson(json, pluginName = "")](https://github.com/QuentinFTL/PluginsBP/blob/2733be676688fcfd007d5f2a21de64eec93a69d5/PluginsBPVoid/scripts/class/CommandManager.js#L30C5-L30C37): add commands from a json object, pluginName will help CorePlugin to search command with this name 


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
