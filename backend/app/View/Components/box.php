<?php

namespace App\View\Components;

use Illuminate\View\Component;

class box extends Component
{
    
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $title;
    public $body;
    public function __construct($title,$body)
    {
        $this->title = $title;
        $this->body = $body;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.box');
    }
}