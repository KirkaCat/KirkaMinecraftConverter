const KirkaMarkerBlueSpawn = {
    "name": "",
    "value": {
        "components": {
            "type": "compound",
            "value": {
                "minecraft:custom_model_data": {
                    "type": "int",
                    "value": 1
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
                            "value": "blue"
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
                                    0,
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
                                    "blue_spawn"
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
                                                    "value": 1
                                                },
                                                "minecraft:entity_data": {
                                                    "type": "compound",
                                                    "value": {
                                                        "id": {
                                                            "type": "string",
                                                            "value": "minecraft:armor_stand"
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "count": {
                                            "type": "int",
                                            "value": 1
                                        },
                                        "id": {
                                            "type": "string",
                                            "value": "minecraft:armor_stand"
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
                            "{\"color\":\"gold\",\"italic\":false,\"text\":\"A spawn point marker for the blue team (team 1)\"}",
                            "{\"color\":\"gray\",\"italic\":false,\"text\":\" • Vertical facing direction is always 0; only horizontal works\"}",
                            "{\"color\":\"gray\",\"italic\":false,\"text\":\" • Y axis is precise, but X & Z are locked to the blocks center\"}",
                            "{\"color\":\"gray\",\"italic\":false,\"text\":\" • Spawn point color does not matter in solo modes.\"}"
                        ]
                    }
                },
                "minecraft:custom_name": {
                    "type": "string",
                    "value": "{\"color\":\"aqua\",\"italic\":false,\"text\":\"Blue Team Spawn\"}"
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
            "value": "minecraft:armor_stand"
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

export default KirkaMarkerBlueSpawn;