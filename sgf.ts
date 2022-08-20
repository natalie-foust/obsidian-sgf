import {
  App,
  EditorPosition,
  MarkdownPostProcessorContext,
  MarkdownRenderChild,
  MarkdownView,
  Notice,
  parseYaml,
  stringifyYaml,
} from "obsidian";
import { ObsidianSgfSettings, parse_user_settings } from "./config";
import { SimplePlayer, WGo} from "wgo";


export function draw_sgf(app: App, settings: ObsidianSgfSettings) {
  return (source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) => {
    let user_config = parse_user_settings(settings, source);
    ctx.addChild(new SgfGame(el, ctx, user_config, app));
  };
}


export class ObsidianPlayer extends SimplePlayer {

}


export class SgfGame extends MarkdownRenderChild {
	private ctx: MarkdownPostProcessorContext;
	private app: App;
	private id: string;

	private MoveId: number;

	constructor (
		container: HTMLElement,
		ctx: MarkdownPostProcessorContext,
		user_config: ObsidianSgfSettings,
		app: App
	){
		super(container);

		this.app = app;
		this.ctx = ctx;
		console.log(this.container);
		this.board = new ObsidianPlayer(container,
			{
				sgf: `(;FF[4]GM[1]SZ[19];B[aa];W[bb];B[cc];W[dd];B[ad];W[bd])`,
			}
		)
		console.log(this.board)
		// Trying to find how to modify SVGDrawHandler to change the look of things
	}
}
