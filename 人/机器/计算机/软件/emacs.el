;; (global-set-key "\M-?" 'help-command)

(defun point-to-top()
"光标跳到开头"
(interactive)
(move-to-window-line 0)
)

(global-set-key "\M-," 'point-to-top)
