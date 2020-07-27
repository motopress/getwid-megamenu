<?php


namespace GetwidMegaMenu;


abstract class AbstractBlock {

	protected $name;
	protected $style;
	protected $editor_style;
	protected $editor_script;

	public function __construct() {
		$this->setName();
		$this->setStyle();
		$this->setEditorStyle();
		$this->setEditorScript();
		$this->register();
	}

	public function register() {
		register_block_type(
			$this->name,
			[
				'style'           => $this->style,
				'editor_style'    => $this->editor_style,
				'editor_script'   => $this->editor_script,
				'render_callback' => [$this, 'render_callback']
			]
		);
	}

	public function render_callback($attributes, $content) {
		return $content;
	}

	abstract protected function setName();

	abstract protected function setStyle();

	abstract protected function setEditorStyle();

	abstract protected function setEditorScript();

}