: for push to github
git config --global https.proxy https://127.0.0.1:10809
timeout /T 5 /NOBREAK
git push --set-upstream origin main
git config --global --unset https.proxy
git config --global -l
