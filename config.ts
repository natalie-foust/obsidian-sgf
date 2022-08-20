interface ObsidianSgfSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: ObsidianSgfSettings = {
	mySetting: 'default'
}

export function parse_user_settings(
	global_settings: ObsidianSgfSettings,
	local_settings_yaml: string
	) {
	console.log('...parsing user config....');
	try {
		return Object.assign(
			global_settings,
			parseYaml(local_settings_yaml)
		)
	} catch (e) {
		return global_settings
	}

}
