package Crypto;

use strict;
use warnings;

sub new {
  my ($class, $plain) = @_;
  my $self = +{plain => $plain};
  bless $self, $class;
}

sub normalize_ciphertext {
  my ($self) = @_;
  my $segments = $self->plaintext_segments;
  my @text = ();
  my $size = $self->size;
  for (my $i = 0; $i < $size; $i++) {
    $text[$i] = [];
    for my $segment (@$segments) {
      push @{$text[$i]}, substr($segment, $i, 1) if length $segment > $i;
    }
  }
  return join " ", map {join "", @$_} @text
}

sub ciphertext {
  my ($self) = @_;
  my $text = $self->normalize_ciphertext;
  $text =~ s/\s//g;
  return $text;
}

sub normalize_plaintext {
  my ($self) = @_;
  my $text = lc $self->{plain};
  $text =~ s/\W//g;
  return $text;
}

sub plaintext_segments {
  my ($self) = @_;
  my $text = $self->normalize_plaintext;
  my $size = $self->size;
  my @segments = ();
  while (length $text > $size) {
    push @segments, substr($text, 0, $size);
    $text = substr($text, $size);
  }
  push @segments, substr($text, 0, $size);
  return \@segments;
}

sub size {
  my ($self) = @_;
  my $len = length $self->normalize_plaintext;
  my $size = 2;
  while ($size ** 2 < $len) {
    $size++;
  }
  return $size;
}

1;
