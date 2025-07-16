const KirkaMarkerRegionDebug = {
    "name": "",
    "value": {
        "components": {
            "type": "compound",
            "value": {
                "minecraft:custom_model_data": {
                    "type": "int",
                    "value": 4
                },
                "minecraft:entity_data": {
                    "type": "compound",
                    "value": {
                        "NoGravity": {
                            "type": "byte",
                            "value": 1
                        },
                        "Pose": {
                            "type": "compound",
                            "value": {
                                "RightArm": {
                                    "type": "list",
                                    "value": {
                                        "type": "float",
                                        "value": [
                                            0,
                                            0,
                                            0
                                        ]
                                    }
                                }
                            }
                        },
                        "NoBasePlate": {
                            "type": "byte",
                            "value": 1
                        },
                        "Team": {
                            "type": "string",
                            "value": "region"
                        },
                        "Invulnerable": {
                            "type": "byte",
                            "value": 1
                        },
                        "id": {
                            "type": "string",
                            "value": "minecraft:armor_stand"
                        },
                        "Marker": {
                            "type": "byte",
                            "value": 1
                        },
                        "Invisible": {
                            "type": "byte",
                            "value": 1
                        },
                        "PortalCooldown": {
                            "type": "int",
                            "value": 2147483647
                        },
                        "Rotation": {
                            "type": "list",
                            "value": {
                                "type": "float",
                                "value": [
                                    -90,
                                    0
                                ]
                            }
                        },
                        "Tags": {
                            "type": "list",
                            "value": {
                                "type": "string",
                                "value": [
                                    "kirka_marker",
                                    "region"
                                ]
                            }
                        },
                        "HandItems": {
                            "type": "list",
                            "value": {
                                "type": "compound",
                                "value": [
                                    {
                                        "components": {
                                            "type": "compound",
                                            "value": {
                                                "minecraft:custom_model_data": {
                                                    "type": "int",
                                                    "value": 4
                                                }
                                            }
                                        },
                                        "count": {
                                            "type": "int",
                                            "value": 1
                                        },
                                        "id": {
                                            "type": "string",
                                            "value": "minecraft:axolotl_spawn_egg"
                                        }
                                    },
                                    {}
                                ]
                            }
                        }
                    }
                },
                "minecraft:lore": {
                    "type": "list",
                    "value": {
                        "type": "string",
                        "value": [
                            "{\"color\":\"gold\",\"italic\":false,\"text\":\"A region marker for S&D, parkour and point gamemodes\"}",
                            "{\"extra\":[{\"color\":\"gray\",\"italic\":false,\"text\":\" • Spans 2.5 blocks from center (X & Z), and 3 up/down (5x5x6)\"}],\"text\":\"\"}",
                            "{\"color\":\"gray\",\"italic\":false,\"text\":\" • Being inside or outside is determined by your feet position\"}",
                            "{\"color\":\"gray\",\"italic\":false,\"text\":\" • Unrestricted positioning; can be placed with precision\"}",
                            "{\"color\":\"gray\",\"italic\":false,\"text\":\" • Triggers course completion in parkour gamemodes\"}"
                        ]
                    }
                },
                "minecraft:custom_name": {
                    "type": "string",
                    "value": "{\"color\":\"green\",\"italic\":false,\"text\":\"Region\"}"
                },
                "minecraft:hide_additional_tooltip": {
                    "type": "compound",
                    "value": {}
                }
            }
        },
        "count": {
            "type": "int",
            "value": 1
        },
        "id": {
            "type": "string",
            "value": "minecraft:axolotl_spawn_egg"
        },
        "DataVersion": {
            "type": "int",
            "value": 3839
        },
        "type": {
            "type": "string",
            "value": "item"
        }
    }
}

export default KirkaMarkerRegionDebug;