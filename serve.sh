#!/bin/sh

. ~/_sysperl/perl5.sh
PMJ=~/gitwk-github/plack-middlewares-jbrowse
PERL5LIB=$PMJ/lib:$PERL5LIB
exec $PMJ/bin/plack_serve $PWD
